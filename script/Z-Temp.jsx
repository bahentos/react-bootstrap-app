sel = activeDocument.selection;
refObj_x = sel[0].position[0] + (sel[0].width / 2);
refObj_y = sel[0].position[1] - (sel[0].height / 2);
$.writeln (refObj_x);
$.writeln (refObj_y);

newlayer = activeDocument.layers.add();
newlayer.ZOrder(ZOrderMethod.BRINGTOFRONT); 
newlayer.name = "Connectors";

newCompoundPath = activeDocument.compoundPathItems.add();
