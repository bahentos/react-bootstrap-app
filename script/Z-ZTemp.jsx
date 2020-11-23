mm = 2.834645


with (app.activeDocument) {
    for (i = 0 ; i< swatches.length; i++) {
        $.writeln(swatches[i].name)
    }

    $.writeln("___________")
    $.writeln(swatches[7].name)
    $.writeln(inkList[4].name)

    $.writeln("___________")

    if (swatches[7].name == inkList[4].name) {

        $.writeln("Да капец!")
    } else {

        $.writeln("Нет")
    }



    function makeColor(c , m , y ,  k ) {
        var newColor = new CMYKColor();
        newColor.cyan = c;
        newColor.magenta = m;
        newColor.yellow = y;
        newColor.black = k;
        return newColor;
    }

    function findColor (colorName) {

        for (i = 0 ; i< swatches.length; i++) {
            if(swatches[i].name == colorName) {
                return swatches[i].color
            } else {
                return makeColor(0 , 100 , 0 ,  0 )
            }
        }
    }

    colorBox1 = pathItems.rectangle(0, 0, 10 * mm, 5 * mm)
    colorBox1.stroked = false
    colorBox1.fillColor = swatches[7].color

}