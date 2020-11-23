//
//IO_CORNERS BY KRYLOV || ANDREW203@MAIL.RU
//

#target illustrator
const mm = 72/25.4; 
var doc = app.activeDocument;

var layerName = 'MARKS';

var polimer = prompt ("Какова толщина полимера?");
if(polimer >= 2.54)
	{
        var cornWeight = 0.783 * 2;
      }
  else
  {
      var cornWeight = 0.283 * 2;
      }
	
var cornLength = 5 *mm;

// unlock all layers
for (var i = 0; i < doc.layers.length; i++) {
    doc.layers[i].locked = false;
}


//unlock & unhide all (true/false )
var unlock = true;

//	unlock & unhide all objects
if(unlock)
	{
		app.executeMenuCommand("unlockAll");
		app.executeMenuCommand("showAll");
		app.selection = null;
	}
// remove all guides
app.executeMenuCommand("clearguide");
// crop artboard to selection bounds
app.selection = null;

doc.selectObjectsOnActiveArtboard();
doc.fitArtboardToSelectedArt(0);

app.selection = null;

// set new margins (1 millimeter = 2.834645 points, 1 point = 0.353 millimeters)
var margin = 10 * mm

var artboardRect = doc.artboards[0].artboardRect

artboardRect[0] -= margin; // left
artboardRect[1] += margin; // top
artboardRect[2] += margin; // right
artboardRect[3] -= margin; // bottom

doc.artboards[0].artboardRect = artboardRect;

//find all fonts
app.executeMenuCommand("Text Objects menu item");

if (doc.selection.length>0)
	{
		app.selection = null;
		app.executeMenuCommand("Adobe Illustrator Find Font Menu Item");
	}
else
	{
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

function Corner(parent,x1,y1,color,weight,lenght,position,group)
{
	var line = parent.pathItems.add();
	line.stroked = true;
	line.filled = false;
	line.strokeOverprint = true;
	line.strokeWidth = weight;
	line.strokeColor = color;
	switch (position){
		case 1:
			line.setEntirePath( Array( Array(x1+lenght, y1), Array(x1, y1), Array (x1,y1+lenght)) );
		break;
		case 2:
			line.setEntirePath( Array( Array(x1+lenght, y1), Array(x1, y1), Array (x1,y1-lenght)) );
		break;
		case 3:
			line.setEntirePath( Array( Array(x1-lenght, y1), Array(x1, y1), Array (x1,y1-lenght)) );
		break;
		case 4:
			line.setEntirePath( Array( Array(x1-lenght, y1), Array(x1, y1), Array (x1,y1+lenght)) );
		break;
		}
	line.moveToEnd(group);
    line = null;
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
	
var artboardRect = doc.artboards[0].artboardRect;

    Corner(mLayer,artboardRect[0],artboardRect[3], regColor, cornWeight, cornLength, 1, markGroup);
    Corner(mLayer,artboardRect[0],artboardRect[1], regColor, cornWeight, cornLength, 2, markGroup);
    Corner(mLayer,artboardRect[2],artboardRect[1], regColor, cornWeight, cornLength, 3, markGroup);
    Corner(mLayer,artboardRect[2],artboardRect[3], regColor, cornWeight, cornLength, 4, markGroup);

