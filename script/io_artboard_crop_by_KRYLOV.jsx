//
//IO_FINDFONTS BY KRYLOV || ANDREW203@MAIL.RU
//

#target illustrator
const mm = 72/25.4;

//Поиск цветов названных кирилицей
function cyrillicSpotCatch() {
    for (var i = 0; i<app.activeDocument.spots.length; i++)
        spotName = app.activeDocument.spots[i].name
        if (spotName.match('[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]') != null)
            alert('Спот с кириллицей: '.concat(spotName))
        return null
}


var CMYKblack = new CMYKColor();
			CMYKblack.cyan = 0;
			CMYKblack.magenta = 0;
			CMYKblack.yellow = 0;
			CMYKblack.black = 100;

//unlock & unhide all (true/false )
var unlock = false;

var doc = app.activeDocument;

var fileName = String(doc.fullName)

// unlock all layers
for (var i = 0; i < doc.layers.length; i++) {
    doc.layers[i].locked = false;
}

//	unlock & unhide all objects
if(unlock)
	{
		app.executeMenuCommand("unlockAll");
//		app.executeMenuCommand("showAll");
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
var margin = 5 * mm

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

	//Find all BLACK and overprint it
//OverprintBlack();
//cyrillicSpotCatch();

// Если файл 278 заказчика, напомнить проверить параметры дисторсии
if (fileName.match('/278/') != null)
    alert('Проверьте дисторцию в параметрах Esko!')

app.executeMenuCommand("fitall")
app.executeMenuCommand("zoomout")

  function OverprintBlack() {
    // collect all elements
    var pathCollect = doc.pathItems;
    var compCollect = doc.compoundPathItems;
    var txtCollect = doc.textFrames;

    // if current document  have no elements, out function
    if (pathCollect.length == 0 && compCollect.length == 0 && txtCollect.length == 0) return;

    // the array for all collected elements
    var elemArr = [];

    // push all elems to array
    for (var p = 0; p < pathCollect.length; p++) {
      if (pathCollect[p].parent.typename == "CompoundPathItem") continue;
      elemArr.push(pathCollect[p]);
    }
    for (var c = 0; c < compCollect.length; c++) {
      elemArr.push(compCollect[c]);
    }
    for (var t = 0; t < txtCollect.length; t++) {
      elemArr.push(txtCollect[t]);
    }


	  // scanning, finding and killing
    for (var j = 0; j < elemArr.length; j++) {
      //  depending on the typename of elems define vars elem.fillColor and elem.strokeColor
      try {
        switch (elemArr[j].typename) {
          case 'PathItem':
            SetOverprintBlack(elemArr[j]);
            break;
          case 'CompoundPathItem':
            SetOverprintBlack(elemArr[j].pathItems[0]);
            break;
          case 'TextFrame':
            var frameChars = elemArr[j].textRange.characters;
            for (var i = 0; i < frameChars.length; i++) {
              SetOverprintBlack(frameChars[i].characterAttributes);
            }
            break;
          default:
            // default action
            break;
        }
      } catch (e) {
      }
    }

    // COMMON TOOL
    function SetOverprintBlack(elem) {
      // CMYK
      // fill
      try {
        if ((elem.fillColor + '' ) == '[CMYKColor]' && (elem.fillOverprint == false || elem.overprintFill == false)) {
          for (var l = 0; l < 3; l++) {
            if (elem.fillColor.cyan == 0 && elem.fillColor.magenta == 0 && elem.fillColor.yellow == 0 && elem.fillColor.black == 100) {
              elem.fillOverprint = true;
              elem.overprintFill = true;
            }
          }
        }
      } catch (e) {
      }
      //stroke
      try {
        if ((elem.strokeColor + '' ) == '[CMYKColor]' && (elem.strokeOverprint == false || elem.overprintStroke == false)) {
          for (var l = 0; l < 3; l++) {
            if (elem.strokeColor.cyan == 0 && elem.strokeColor.magenta == 0 && elem.strokeColor.yellow == 0 && elem.strokeColor.black == 100) {
              elem.strokeOverprint = true;
              elem.overprintStroke = true;
            }
          }
        }
      } catch (e) {
      }
      // GRAYSCALE
      // fill
      try {
        if ((elem.fillColor + '' ) == '[GrayColor]' && (elem.fillOverprint == false || elem.overprintFill == false)) {
          if (elem.fillColor.gray == 100) {
            elem.fillColor = CMYKblack;
            elem.fillOverprint = true;
            elem.overprintFill = true;
          }
        }
      } catch (e) {
      }
      //stroke
      try {
        if ((elem.strokeColor + '' ) == '[GrayColor]' && (elem.strokeOverprint == false || elem.overprintStroke == false)) {
          if (elem.strokeColor.gray == 100) {
            elem.strokeColor = CMYKblack;
            elem.strokeOverprint = true;
            elem.overprintStroke = true;
          }
        }
      } catch (e) {
      }
    }
  }
