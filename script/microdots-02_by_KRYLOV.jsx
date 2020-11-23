//
//IO_MICRODOTS BY KRYLOV || ANDREW203@MAIL.RU
//

#target illustrator
const mm = 72/25.4; 
var doc = app.activeDocument;

var layerName = 'MARKS';
	
var dotRazm = 0.5 *mm;

var margin = 5 *mm;
	
	

//unlock & unhide all (true/false )
var unlock = true;

//	unlock & unhide all objects
if(unlock)
	{
		app.executeMenuCommand("unlockAll");
		app.executeMenuCommand("showAll");
		app.selection = null;
	}


function getRegColor()  
{
	for (var i = 0; i < app.activeDocument.spots.length; i++)
		{
			if ((app.activeDocument.spots[i].name == '[Registration]')||(app.activeDocument.spots[i].name == '[Совмещение]'));
				{
					regColor = new SpotColor();
					regColor.spot = doc.spots[i];
				}
		}
		
	
return regColor;
}

var layerFlag = true;	
	for (var i = 0; i < doc.layers.length; i++) 
		{
			if (doc.layers[i].name == layerName)
				{
					var mLayer = doc.layers[i];
					mLayer.visible = true;
					mLayer.locked = false;
					mLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
					layerFlag = false;
				}
		}
	if (layerFlag) {var mLayer = doc.layers.add(); mLayer.name = layerName; mLayer.zOrder(ZOrderMethod.BRINGTOFRONT);}

var regColor = getRegColor();
var markGroup = mLayer.groupItems.add();
	
var artboardRect = doc.artboards[0].artboardRect

	y1 = artboardRect[1] - ( (artboardRect[1] - artboardRect[3]) /2 ) + dotRazm / 2;
	x1 = artboardRect[0] - margin;
	x2 = artboardRect[2] + margin - dotRazm ;		
	
	var dot = mLayer.pathItems.ellipse(y1, x1, dotRazm, dotRazm);
		dot.stroked = false;
		dot.filled = true;
		dot.fillOverprint = true;
		dot.fillColor = regColor;
		dot.moveToEnd(markGroup);
		
		var dot = mLayer.pathItems.ellipse(y1, x2, dotRazm, dotRazm);
		dot.stroked = false;
		dot.filled = true;
		dot.fillOverprint = true;
		dot.fillColor = regColor;
		dot.moveToEnd(markGroup);
