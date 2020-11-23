#target illustartor

var doc = app.activeDocument;
var myNumber;

while ((myNumber = prompt ("Введите номер заказа")) == "undefined") {

}
if (myNumber != null) {
	var aLayer = doc.layers.add();
	aLayer.name = "Arrow";
	aLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

	var arrowGroup = aLayer.groupItems.add();

	//создание цвета "REGISTRATION"
	function getRegColor()
	{
		for (var i = 0; i < doc.spots.length; i++)
			{
				if (doc.spots[i].colorType == ColorModel.REGISTRATION);
				{
					regColor = new SpotColor();
					regColor.spot = doc.spots[i];
				}
			}
	return regColor;
	}
	regColor = getRegColor();


	//Создание стрелки
	var myLine = arrowGroup.pathItems.add();
	myLine.stroked = false;
	myLine.setEntirePath([[0, 0], [0, 5.964], [-1.762, 5.487], [0.729, 9.687], [3.217, 5.487], [1.457, 5.964], [1.457, 0]]);
	myLine.closed = true;
	myLine.fillColor = regColor;
	//Координаты стрелки
	myLineX = myLine.position[0];
	myLineY = myLine.position[1]-(myLine.height/2+myLine.height);

	//Создание номера заказа
	var numberText = arrowGroup.textFrames.add();
	numberText.contents = myNumber;
	numberText.textRange.characterAttributes.fillColor = regColor;
	numberText.rotate(-90);
	numberText = numberText.createOutline();

	//Расположение номера заказа относительно стрелки
	numberTextX = myLineX - (numberText.width - myLine.width)/2;
	numberText.position = [numberTextX, myLineY];

	//Выставляем стрелку и номер в правильное место
	var art = doc.artboards[0];
	var x = art.artboardRect[2];
	var y = ((art.artboardRect[1] + art.artboardRect[3]) / 2) + arrowGroup.height/2;

	arrowGroup.position = [x, y];
} else {
	alert ("Вы не ввели номер!");
}
