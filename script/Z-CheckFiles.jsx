function main(inputs){
    var docinp=(inputs);
    $.writeln (docinp);
    var sourceDoc= app.open(File(docinp),DocumentColorSpace.CMYK);
    $.writeln (sourceDoc);
    var iCount = sourceDoc.textFrames.length;
     $.writeln ("iCount=" + iCount);
        var artItem = [];
              for (i = 0; i < sourceDoc.pageItems.length; i++) {
                  artItem[i] = sourceDoc.pageItems[i];
                  if (artItem[i].typename == 'PlacedItem') {
                          try {
                              var fname = artItem[i].file.name;
                      }
                      catch (e) {
                          $.writeln("Нет линков: "+e.message);
                          break;
                      }
                  }
              }
              try {
                if (iCount > 0) {
                  throw new ReferenceError("В файле есть " + iCount + " текстовых объектов");
                }
              } catch (e) {
                $.writeln(e.message);
        }
}
main ("/C/qwe/TestAI.ai");