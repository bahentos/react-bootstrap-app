#target
illustartor

mm = 2.834645

function execScript(script) {
    bridge = new BridgeTalk()
    bridge.target = "illustartor"
    bridge.body = script
    return bridge.send()
}

today = new Date()
function startZero (str) {
    if (str.length == 1) {
        str = "0" + str
        return str
    }
    else {
        return str
    }

}
dd = startZero(String(today.getDate()))
mmm = startZero(String(today.getMonth() + 1))
gggg = today.getFullYear()
currentDate = dd + "." +  mmm + "." + gggg





//Окно запроса данных

with (app.activeDocument) {
    // модальное окно - "dialog", панель - "palette"
    myDialog = new Window("dialog", "Информация по цветопробе");
    myDialog.panel1 = myDialog.add("panel", undefined, "Данные")

    myDialog.panel1.group4 = myDialog.panel1.add("group")
    myDialog.panel1.group4.ProbeSurname = myDialog.panel1.group4.add("staticText", undefined, "Дизайнер:")
    myDialog.panel1.group4.ProbeSurname.size = [70, 30]
    myDialog.panel1.group4.ProbeSurname.justify = "right"
    myDialog.panel1.group4.ProbeSurnameData = myDialog.panel1.group4.add("editText", undefined, "Романовский А. М.")
    myDialog.panel1.group4.ProbeSurnameData.size = [320, 20]

    myDialog.panel1.group1 = myDialog.panel1.add("group")
    myDialog.panel1.group1.ProbeNameLabel = myDialog.panel1.group1.add("staticText", undefined, "Название:")
    myDialog.panel1.group1.ProbeNameLabel.size = [70, 30]
    myDialog.panel1.group1.ProbeNameLabel.justify = "right"
    myDialog.panel1.group1.ProbeNameData = myDialog.panel1.group1.add("editText", undefined, "")
    myDialog.panel1.group1.ProbeNameData.size = [320, 20]

    myDialog.panel1.group2 = myDialog.panel1.add("group")
    myDialog.panel1.group2.ProbeProfileLabel = myDialog.panel1.group2.add("staticText", undefined, "Профиль:")
    myDialog.panel1.group2.ProbeProfileLabel.size = [70, 30]
    myDialog.panel1.group2.ProbeProfileLabel.justify = "right"
    myDialog.panel1.group2.ProbeProfileData = myDialog.panel1.group2.add("editText", undefined, "")
    myDialog.panel1.group2.ProbeProfileData.size = [320, 20]

    myDialog.panel1.group3 = myDialog.panel1.add("group")
    myDialog.panel1.group3.ProbeLPILabel = myDialog.panel1.group3.add("staticText", undefined, "Линиатура:")
    myDialog.panel1.group3.ProbeLPILabel.size = [70, 30]
    myDialog.panel1.group3.ProbeLPILabel.justify = "right"
    myDialog.panel1.group3.ProbeLPIData = myDialog.panel1.group3.add("editText", undefined, "")
    myDialog.panel1.group3.ProbeLPIData.size = [320, 20]

    myDialog.group4 = myDialog.add('group')
    myDialog.group4.buttonOk = myDialog.group4.add('button', undefined, 'OK')
    myDialog.group4.buttonCancel = myDialog.group4.add('button', undefined, 'Cancel')

    myDialog.group4.buttonOk.onClick = function () {
        execScript(dateTransfer())
    }
    myDialog.group4.buttonCancel.onClick = function () {
        myDialog.close()
    }

    function dateTransfer() {


        //Присваиваем переменные данным из диалога

        newProbeName = myDialog.panel1.group1.ProbeNameData.text
        newProbeProfile = myDialog.panel1.group2.ProbeProfileData.text
        newProbeLPI = myDialog.panel1.group3.ProbeLPIData.text
        newProbeSurname = myDialog.panel1.group4.ProbeSurnameData.text

        //Создаем массив пантонов
    inksArray = []
        for (i=0; i < inkList.length; i++) {
            if (inkList[i].inkInfo.printingStatus == InkPrintStatus.ENABLEINK) {
                if(inkList[i].name != "White" && inkList[i].name != "kroy") {
                        inksArray.push (inkList[i]) 
                    }                 
               }
                
            }
       
       
       //Создаем массив свотчей соответствующий массиву пантонов
       inksSwatches = []
       for (i=0; i < inksArray.length; i++) {
           if(inksArray[i].name === "Process Cyan" || inksArray[i].name === "Process Magenta" || inksArray[i].name === "Process Yellow" || inksArray[i].name === "Process Black") {
                    inksSwatches.push({name: inksArray[i].name})
               } else {
                            for(j=0; j < swatches.length; j++){
                                if(inksArray[i].name === swatches[j].name) {
                                    inksSwatches.push(swatches[j])
                             }
                 }
                   
                    }

       }

        //Вычисляем высоту таблицы
        function checkHeightTable (arr) {
           currentH = arr.length * 6
           if (currentH < 45) {
                     return 45
               } else {
                        return  (currentH + 2 )
                   }
        }

      //  $.writeln(inksArray)
        tableHeight = checkHeightTable(inksArray)

        //Вычисляем координаты для таблицы
        //inksArray = inkList.filter(function (item) {return item.inkInfo.printingStatus == InkPrintStatus.ENABLEINK} )

        coordX = artboards[0].artboardRect[0]
        coordY = artboards[0].artboardRect[3] - 5

        //Задаем цвет для таблицы

        blueColor = new CMYKColor()
        blueColor.cyan = 100
        blueColor.magenta = 52
        blueColor.yellow = 0
        blueColor.black = 0

        //Рисуем таблицу
        //Большая рамка

        newPath = pathItems.rectangle(coordY, coordX, 235 * mm, tableHeight * mm)
        newPath.strokeWidth = 0.724
        newPath.strokeColor = blueColor
        newPath.filled = false


        text2 = textFrames.add()
        text2.contents = "№ " + newProbeName
        fontStyle = text2.textRange.characterAttributes
        fontStyle.size = 7
        fontStyle.fillColor = blueColor
        text2 = text2.createOutline()
        text2.position = [coordX + 1.5 * mm, (coordY - 3 * mm) + text2.height/2]

        line1 = pathItems.add();
        line1.strokeWidth = 0.724
        line1.strokeColor = blueColor
        line1.closed = false
        line1.setEntirePath([[coordX + 116 * mm, coordY], [coordX + 116 * mm, (coordY - (tableHeight * mm))]]);

        line2 = pathItems.add();
        line2.strokeWidth = 0.724
        line2.strokeColor = blueColor
        line2.closed = false
        line2.setEntirePath([[coordX + 190 * mm, coordY], [coordX + 190 * mm, (coordY - (tableHeight * mm))]]);


        //Маленькая таблица

        newPath1 = pathItems.rectangle(coordY - 6 * mm, coordX, 76 * mm, 23 * mm)
        newPath1.strokeWidth = 0.381
        newPath1.strokeColor = blueColor
        newPath1.filled = false

        text3 = textFrames.add()
        text3.contents = "утверждено"
        fontStyle1 = text3.textRange.characterAttributes
        fontStyle1.size = 4
        fontStyle1.fillColor = blueColor
        text3 = text3.createOutline()
        text3.position = [(coordX + 22.5 * mm) - text3.width / 2, (coordY - 7.147 * mm) + text3.height / 2]

        line3 = pathItems.add();
        line3.strokeWidth = 0.381
        line3.strokeColor = blueColor
        line3.closed = false
        line3.setEntirePath([[coordX, coordY - 8 * mm], [coordX + 76 * mm, coordY - 8 * mm]]);

        //Первая колонка

        text4 = textFrames.add()
        text4.contents = "1. Оринигал-макет"
        fontStyle2 = text4.textRange.characterAttributes
        fontStyle2.size = 5
        fontStyle2.fillColor = blueColor
        text4 = text4.createOutline()
        text4.position = [coordX + 1.5 * mm, (coordY - 10.1 * mm) + text4.height / 2]

        text5 = textFrames.add()
        text5.contents = "2. Цвета"
        fontStyle3 = text5.textRange.characterAttributes
        fontStyle3.size = 5
        fontStyle3.fillColor = blueColor
        text5 = text5.createOutline()
        text5.position = [coordX + 1.5 * mm, (coordY - 14.3 * mm) + text5.height / 2]

        text6 = textFrames.add()
        text6.contents = "3. Тексты"
        fontStyle4 = text6.textRange.characterAttributes
        fontStyle4.size = 5
        fontStyle4.fillColor = blueColor
        text6 = text6.createOutline()
        text6.position = [coordX + 1.5 * mm, (coordY - 18.5 * mm) + text6.height / 2]

        text7 = textFrames.add()
        text7.contents = "4. Размеры"
        fontStyle5 = text7.textRange.characterAttributes
        fontStyle5.size = 5
        fontStyle5.fillColor = blueColor
        text7 = text7.createOutline()
        text7.position = [coordX + 1.5 * mm, (coordY - 22.7 * mm) + text7.height / 2]

        text8 = textFrames.add()
        text8.contents = "Профиль:"
        fontStyle8 = text8.textRange.characterAttributes
        fontStyle8.size = 5
        fontStyle8.fillColor = blueColor
        text8 = text8.createOutline()
        text8.position = [coordX + 1.5 * mm, (coordY - 26.9 * mm) + text8.height / 2]

        //Вторая колонка

        checkBox = pathItems.rectangle(coordY, coordX, 2.5 * mm, 2.5 * mm)
        checkBox.strokeWidth = 0.165
        checkBox.strokeColor = blueColor
        checkBox.filled = false
        checkBox.position = [coordX + 21 * mm, (coordY - 10.1 * mm) + checkBox.height / 2]

        checkBox1 = pathItems.rectangle(coordY, coordX, 2.5 * mm, 2.5 * mm)
        checkBox1.strokeWidth = 0.165
        checkBox1.strokeColor = blueColor
        checkBox1.filled = false
        checkBox1.position = [coordX + 21 * mm, (coordY - 14.3 * mm) + checkBox1.height / 2]

        checkBox2 = pathItems.rectangle(coordY, coordX, 2.5 * mm, 2.5 * mm)
        checkBox2.strokeWidth = 0.165
        checkBox2.strokeColor = blueColor
        checkBox2.filled = false
        checkBox2.position = [coordX + 21 * mm, (coordY - 18.5 * mm) + checkBox2.height / 2]

        checkBox3 = pathItems.rectangle(coordY, coordX, 2.5 * mm, 2.5 * mm)
        checkBox3.strokeWidth = 0.165
        checkBox3.strokeColor = blueColor
        checkBox3.filled = false
        checkBox3.position = [coordX + 21 * mm, (coordY - 22.7 * mm) + checkBox3.height / 2]

        text9 = textFrames.add()
        text9.contents = "Фамилия"
        fontStyle9 = text9.textRange.characterAttributes
        fontStyle9.size = 5
        fontStyle9.fillColor = blueColor
        text9 = text9.createOutline()
        text9.position = [coordX + 28 * mm, (coordY - 10.1 * mm) + text9.height / 2]

        text10 = textFrames.add()
        text10.contents = "Должность"
        fontStyle10 = text10.textRange.characterAttributes
        fontStyle10.size = 5
        fontStyle10.fillColor = blueColor
        text10 = text10.createOutline()
        text10.position = [coordX + 28 * mm, (coordY - 14.3 * mm) + text10.height / 2]

        text11 = textFrames.add()
        text11.contents = "Подпись"
        fontStyle11 = text11.textRange.characterAttributes
        fontStyle11.size = 5
        fontStyle11.fillColor = blueColor
        text11 = text11.createOutline()
        text11.position = [coordX + 28 * mm, (coordY - 18.5 * mm) + text11.height / 2]

        text12 = textFrames.add()
        text12.contents = "Дата"
        fontStyle12 = text12.textRange.characterAttributes
        fontStyle12.size = 5
        fontStyle12.fillColor = blueColor
        text12 = text12.createOutline()
        text12.position = [coordX + 28 * mm, (coordY - 22.7 * mm) + text12.height / 2]

        text13 = textFrames.add()
        text13.contents = newProbeProfile
        fontStyle13 = text13.textRange.characterAttributes
        fontStyle13.size = 6.5
        fontStyle13.fillColor = blueColor
        fontStyle13.capitalization = FontCapsOption.ALLCAPS
        text13 = text13.createOutline()
        text13.position = [coordX + 19 * mm, (coordY - 26.9 * mm) + text13.height / 2]

        line6 = pathItems.add();
        line6.strokeWidth = 0.381
        line6.strokeColor = blueColor
        line6.closed = false
        line6.setEntirePath([[coordX, coordY - 12.2 * mm], [coordX + 76 * mm, coordY - 12.2 * mm]]);

        line7 = pathItems.add();
        line7.strokeWidth = 0.381
        line7.strokeColor = blueColor
        line7.closed = false
        line7.setEntirePath([[coordX, coordY - 16.4 * mm], [coordX + 76 * mm, coordY - 16.4 * mm]]);

        line8 = pathItems.add();
        line8.strokeWidth = 0.381
        line8.strokeColor = blueColor
        line8.closed = false
        line8.setEntirePath([[coordX, coordY - 20.6 * mm], [coordX + 76 * mm, coordY - 20.6 * mm]]);

        line9 = pathItems.add();
        line9.strokeWidth = 0.381
        line9.strokeColor = blueColor
        line9.closed = false
        line9.setEntirePath([[coordX, coordY - 24.8 * mm], [coordX + 76 * mm, coordY - 24.8 * mm]]);


        line10 = pathItems.add();
        line10.strokeWidth = 0.381
        line10.strokeColor = blueColor
        line10.closed = false
        line10.setEntirePath([[coordX + 18 * mm, coordY - 6 * mm], [coordX + 18 * mm, coordY - 29 * mm]]);

        line11 = pathItems.add();
        line11.strokeWidth = 0.381
        line11.strokeColor = blueColor
        line11.closed = false
        line11.setEntirePath([[coordX + 27 * mm, coordY - 6 * mm], [coordX + 27 * mm, coordY - 8 * mm]]);

        line12 = pathItems.add();
        line12.strokeWidth = 0.381
        line12.strokeColor = blueColor
        line12.closed = false
        line12.setEntirePath([[coordX + 40 * mm, coordY - 8 * mm], [coordX + 40 * mm, coordY - 24.8 * mm]]);

        //Блок текста с объяснениями

        pathTextFrame = pathItems.rectangle(coordY - 6 * mm, coordX + 77 * mm, 36 * mm, 15 * mm)
        areaText = textFrames.areaText(pathTextFrame)
        areaText.contents = "Цвета Pantone могут отображаться на цифровой цветопробе некорректно.\n Подбор цветов Pantone на печати необходимо производить по каталогу Pantone Formula Guide."
        fontStyle4 = areaText.textRange.characterAttributes
        fontStyle4.size = 5
        fontStyle4.fillColor = blueColor


        //Даты и подписи

        text14 = textFrames.add()
        text14.contents = "Разработал"
        fontStyle14 = text14.textRange.characterAttributes
        fontStyle14.size = 5
        fontStyle14.fillColor = blueColor
        text14 = text14.createOutline()
        text14.position = [coordX + 1.5 * mm, coordY - 31.2 * mm]

        text15 = textFrames.add()
        text15.contents = "Проверил"
        fontStyle15 = text15.textRange.characterAttributes
        fontStyle15.size = 5
        fontStyle15.fillColor = blueColor
        text15 = text15.createOutline()
        text15.position = [coordX + 1.5 * mm, coordY - 34.92 * mm]

        text16 = textFrames.add()
        text16.contents = "Согласовано"
        fontStyle16 = text16.textRange.characterAttributes
        fontStyle16.size = 5
        fontStyle16.fillColor = blueColor
        text16 = text16.createOutline()
        text16.position = [coordX + 1.5 * mm, coordY - 38.755 * mm]

        text17 = textFrames.add()
        text17.contents = "Согласовано"
        fontStyle17 = text17.textRange.characterAttributes
        fontStyle17.size = 5
        fontStyle17.fillColor = blueColor
        text17 = text17.createOutline()
        text17.position = [coordX + 1.5 * mm, coordY - 42.434 * mm]



        line13 = pathItems.add();
        line13.strokeWidth = 0.572
        line13.strokeColor = blueColor
        line13.closed = false
        line13.setEntirePath([[coordX + 38 * mm, coordY - 32.459 * mm], [coordX + 53 * mm, coordY - 32.459 * mm]]);

        line14 = pathItems.add();
        line14.strokeWidth = 0.572
        line14.strokeColor = blueColor
        line14.closed = false
        line14.setEntirePath([[coordX + 38 * mm, coordY - 36.115 * mm], [coordX + 53 * mm, coordY - 36.115 * mm]]);

        line15 = pathItems.add();
        line15.strokeWidth = 0.572
        line15.strokeColor = blueColor
        line15.closed = false
        line15.setEntirePath([[coordX + 38 * mm, coordY - 39.981 * mm], [coordX + 53 * mm, coordY - 39.981 * mm]]);

        dataBorder1 = pathItems.rectangle(coordY, coordX, 15 * mm, 2.4 * mm)
        dataBorder1.strokeWidth = 0.432
        dataBorder1.strokeColor = blueColor
        dataBorder1.filled = false
        dataBorder1.position = [coordX + 38 * mm, coordY - 42 * mm]

        text18 = textFrames.add()
        text18.contents = currentDate
        fontStyle18 = text18.textRange.characterAttributes
        fontStyle18.size = 8
        fontStyle18.fillColor = blueColor
        text18 = text18.createOutline()
        text18.position = [coordX + 38 * mm, coordY - 30.3 * mm]

        text19 = textFrames.add()
        text19.contents = "дата"
        fontStyle19 = text19.textRange.characterAttributes
        fontStyle19.size = 3.5
        fontStyle19.fillColor = blueColor
        text19 = text19.createOutline()
        text19.position = [coordX + 44.38 * mm, coordY - 33 * mm]

        text20 = textFrames.add()
        text20.contents = "дата"
        fontStyle20 = text20.textRange.characterAttributes
        fontStyle20.size = 3.5
        fontStyle20.fillColor = blueColor
        text20 = text20.createOutline()
        text20.position = [coordX + 44.38 * mm, coordY - 36.656 * mm]

        text21 = textFrames.add()
        text21.contents = "дата"
        fontStyle21 = text21.textRange.characterAttributes
        fontStyle21.size = 3.5
        fontStyle21.fillColor = blueColor
        text21 = text21.createOutline()
        text21.position = [coordX + 44.38 * mm, coordY - 40.522 * mm]

        // третья колонка дат и подписей

        line16 = pathItems.add();
        line16.strokeWidth = 0.572
        line16.strokeColor = blueColor
        line16.closed = false
        line16.setEntirePath([[coordX + 60 * mm, coordY - 32.459 * mm], [coordX + 75 * mm, coordY - 32.459 * mm]]);

        line17 = pathItems.add();
        line17.strokeWidth = 0.572
        line17.strokeColor = blueColor
        line17.closed = false
        line17.setEntirePath([[coordX + 60 * mm, coordY - 36.115 * mm], [coordX + 75 * mm, coordY - 36.115 * mm]]);

        line18 = pathItems.add();
        line18.strokeWidth = 0.572
        line18.strokeColor = blueColor
        line18.closed = false
        line18.setEntirePath([[coordX + 60 * mm, coordY - 39.981 * mm], [coordX + 75 * mm, coordY - 39.981 * mm]]);

        dataBorder2 = pathItems.rectangle(coordY, coordX, 15 * mm, 2.4 * mm)
        dataBorder2.strokeWidth = 0.432
        dataBorder2.strokeColor = blueColor
        dataBorder2.filled = false
        dataBorder2.position = [coordX + 60 * mm, coordY - 42 * mm]

        text22 = textFrames.add()
        text22.contents = newProbeSurname
        fontStyle22 = text22.textRange.characterAttributes
        fontStyle22.size = 6
        fontStyle22.fillColor = blueColor
        text22 = text22.createOutline()
        text22.position = [coordX + 60 * mm, coordY - 30.3 * mm]

        text23 = textFrames.add()
        text23.contents = "№"
        fontStyle23 = text23 .textRange.characterAttributes
        fontStyle23.size = 6
        fontStyle23.fillColor = blueColor
        text23 = text23 .createOutline()
        text23.position = [coordX + 60.439 * mm, coordY - 42.508 * mm]

        //Блок Утверждаю

        line19  = pathItems.add();
        line19.strokeWidth = 0.572
        line19.strokeColor = blueColor
        line19.closed = false
        line19.setEntirePath([[coordX + 77.717 * mm, coordY - 34.29 * mm], [coordX + 89.127 * mm, coordY - 34.29 * mm]]);

        line20 = pathItems.add();
        line20.strokeWidth = 0.572
        line20.strokeColor = blueColor
        line20.closed = false
        line20.setEntirePath([[coordX + 90.177 * mm, coordY - 34.29 * mm], [coordX + 105.214 * mm, coordY - 34.29 * mm]]);

        line21 = pathItems.add();
        line21.strokeWidth = 0.572
        line21.strokeColor = blueColor
        line21.closed = false
        line21.setEntirePath([[coordX + 106.051 * mm, coordY - 34.29 * mm], [coordX + 113.25 * mm, coordY - 34.29 * mm]]);

        line22 = pathItems.add();
        line22.strokeWidth = 0.572
        line22.strokeColor = blueColor
        line22.closed = false
        line22.setEntirePath([[coordX + 77.717 * mm, coordY - 41.407 * mm], [coordX + 89.127 * mm, coordY - 41.407 * mm]]);

        text24 = textFrames.add()
        text24.contents = "должность"
        fontStyle24 = text24 .textRange.characterAttributes
        fontStyle24.size = 3.5
        fontStyle24.fillColor = blueColor
        text24 = text24.createOutline()
        text24.position = [coordX + 80.291 * mm, coordY - 35.105 * mm]

        text25 = textFrames.add()
        text25.contents = "Фамилия И.О."
        fontStyle25 = text25.textRange.characterAttributes
        fontStyle25.size = 3.5
        fontStyle25.fillColor = blueColor
        text25 = text25.createOutline()
        text25.position = [coordX + 93.593 * mm, coordY - 34.853 * mm]

        text26 = textFrames.add()
        text26.contents = "подпись"
        fontStyle26 = text26.textRange.characterAttributes
        fontStyle26.size = 3.5
        fontStyle26.fillColor = blueColor
        text26 = text26.createOutline()
        text26.position = [coordX + 107.347 * mm, coordY - 35.105 * mm]

        text27 = textFrames.add()
        text27.contents = "дата согласования"
        fontStyle27 = text27.textRange.characterAttributes
        fontStyle27.size = 3.5
        fontStyle27.fillColor = blueColor
        text27 = text27.createOutline()
        text27.position = [coordX + 77.901 * mm, coordY - 42.337 * mm]

        text28 = textFrames.add()
        text28.contents = "Утверждаю"
        fontStyle28 = text28.textRange.characterAttributes
        fontStyle28.size = 6.5
        fontStyle28.fillColor = blueColor
        text28 = text28.createOutline()
        text28.position = [coordX + 92.115 * mm, coordY - 28.925 * mm]

        text29 = textFrames.add()
        text29.contents = "М.П."
        fontStyle29 = text29 .textRange.characterAttributes
        fontStyle29.size = 4.5
        fontStyle29.fillColor = blueColor
        text29 = text29.createOutline()
        text29.position = [coordX + 110.815 * mm, coordY - 41.807 * mm]


        //Блок текста в последней ячейке

        pathTextFrame1 = pathItems.rectangle(coordY - 1.489 * mm, coordX + 191.96 * mm, 37 * mm, 27 * mm)
        areaText1 = textFrames.areaText(pathTextFrame1)
        areaText1.contents = "Digital_test-06.13\n" +
            "Линиатура: " + newProbeLPI + " \n" +
            "Коэф-т искажения:\n" +
            "Толщина флексоформы:\n" +
            "Размеры верстки:\n" +
            "Количество форм:\n" +
            "Процент запечатки:"
        fontStyleArea = areaText1.textRange.characterAttributes
        fontStyleArea.size = 8.713
        fontStyleArea.fillColor = blueColor

        //Печатные цвета с квадратиками
        inksNames = []

        function makeColor(c, m, y, k) {
            var newColor = new CMYKColor();
            newColor.cyan = c;
            newColor.magenta = m;
            newColor.yellow = y;
            newColor.black = k;
            return newColor;
        }

        function findSwatches (colorName) {
            for (i = 0 ; i< swatches.length; i++) {
                if(swatches[i].name == colorName) {
                    return swatches[i].color
                }
            }
        }


        yColorBox = coordY - 1.5 * mm;
        xColorBox = coordX + 117.605 * mm

        yColorSmallText = coordY - 26.858 * mm;
        xColorSmallText = coordX + 191.96 * mm



//Размещение  текста с цветом для процента запечатки
for (i=0; i < inksArray.length; i++) {
                switch (inksArray[i].name) {
                    case "Process Cyan":


                        colorSmallText = textFrames.add()
                        colorSmallText.contents = "C-"
                        colorSmallTextStyle = colorSmallText.textRange.characterAttributes
                        colorSmallTextStyle.size = 7
                        colorSmallTextStyle.fillColor = makeColor(100, 0, 0, 0)
                        colorSmallText = colorSmallText.createOutline()
                        colorSmallText.position = [xColorSmallText,  yColorSmallText]
                        yColorSmallText = yColorSmallText - 2.41 * mm
                        break;

                     case "Process Magenta":
                        colorSmallText1 = textFrames.add()
                        colorSmallText1.contents = "M-"
                        colorSmallTextStyle1 = colorSmallText1.textRange.characterAttributes
                        colorSmallTextStyle1.size = 7
                        colorSmallTextStyle1.fillColor = makeColor(0, 100, 0, 0)
                        colorSmallText1 = colorSmallText1.createOutline()
                        colorSmallText1.position = [xColorSmallText,  yColorSmallText]
                        yColorSmallText = yColorSmallText - 2.41 * mm
                        break;

                    case "Process Yellow":
                        colorSmallText2 = textFrames.add()
                        colorSmallText2.contents = "Y-"
                        colorSmallTextStyle2 = colorSmallText2.textRange.characterAttributes
                        colorSmallTextStyle2.size = 7
                        colorSmallTextStyle2.fillColor = makeColor(0, 0, 100, 0)
                        colorSmallText2 = colorSmallText2.createOutline()
                        colorSmallText2.position = [xColorSmallText,  yColorSmallText]
                        yColorSmallText = yColorSmallText - 2.41 * mm
                        break;

                    case "Process Black":
                        colorSmallText3 = textFrames.add()
                        colorSmallText3.contents = "K-"
                        colorSmallTextStyle3 = colorSmallText3.textRange.characterAttributes
                        colorSmallTextStyle3.size = 7
                        colorSmallTextStyle3.fillColor = makeColor(0, 0, 0, 100)
                        colorSmallText3 = colorSmallText3.createOutline()
                        colorSmallText3.position = [xColorSmallText,  yColorSmallText]
                        yColorSmallText = yColorSmallText - 2.41 * mm
                        break;

                    default:

                        colorSmallText4 = textFrames.add()
                        colorSmallText4.contents = inkList[i].name.replace(/PANTONE\s(.+)/g, "P-$1") + "-"
                        colorSmallTextStyle4 = colorSmallText4.textRange.characterAttributes
                        colorSmallTextStyle4.size = 7
                        colorSmallTextStyle4.fillColor = inksSwatches[i].color
                        colorSmallText4 = colorSmallText4.createOutline()
                        colorSmallText4.position = [xColorSmallText, yColorSmallText]
                        yColorSmallText = yColorSmallText - 2.41 * mm
                        break;
                }
            }

//Размещение квадратиков с цветами
       for (i=0; i < inksArray.length; i++) {
                switch (inksArray[i].name) {
                    case "Process Cyan":
                        colorBox1 = pathItems.rectangle(yColorBox, xColorBox, 10 * mm, 5 * mm)
                        colorBox1.stroked = false
                        colorBox1.fillColor = makeColor(100, 0, 0, 0)

                        colorText1 = textFrames.add()
                        colorText1.contents = "C"
                        colorText1Style = colorText1.textRange.characterAttributes
                        colorText1Style.size = 14
                        colorText1Style.fillColor = makeColor(100, 0, 0, 0)
                        colorText1 = colorText1.createOutline()
                        colorText1.position = [xColorBox + 11 * mm, yColorBox - 0.807 * mm]
                        yColorBox = yColorBox - 6 * mm
                        break;

                    case "Process Magenta":
                        colorBox2 = pathItems.rectangle(yColorBox, xColorBox, 10 * mm, 5 * mm)
                        colorBox2.stroked = false
                        colorBox2.fillColor = makeColor(0, 100, 0, 0)

                        colorText2 = textFrames.add()
                        colorText2.contents = "M"
                        colorText2Style = colorText2.textRange.characterAttributes
                        colorText2Style.size = 14
                        colorText2Style.fillColor = makeColor(0, 100, 0, 0)
                        colorText2 = colorText2.createOutline()
                        colorText2.position = [xColorBox + 11 * mm, yColorBox - 0.807 * mm]
                        yColorBox = yColorBox - 6 * mm
                        break;

                    case "Process Yellow":
                        colorBox3 = pathItems.rectangle(yColorBox, xColorBox, 10 * mm, 5 * mm)
                        colorBox3.stroked = false
                        colorBox3.fillColor = makeColor(0, 0, 100, 0)

                        colorText3 = textFrames.add()
                        colorText3.contents = "Y"
                        colorText3Style = colorText3.textRange.characterAttributes
                        colorText3Style.size = 14
                        colorText3Style.fillColor = makeColor(0, 0, 100, 0)
                        colorText3 = colorText3.createOutline()
                        colorText3.position = [xColorBox + 11 * mm, yColorBox - 0.807 * mm]
                        yColorBox = yColorBox - 6 * mm
                        break;

                    case "Process Black":
                        colorBox4 = pathItems.rectangle(yColorBox, xColorBox, 10 * mm, 5 * mm)
                        colorBox4.stroked = false
                        colorBox4.fillColor = makeColor(0, 0, 0, 100)

                        colorText4 = textFrames.add()
                        colorText4.contents = "K"
                        colorText4Style = colorText4.textRange.characterAttributes
                        colorText4Style.size = 14
                        colorText4Style.fillColor = makeColor(0, 0, 0, 100)
                        colorText4 = colorText4.createOutline()
                        colorText4.position = [xColorBox + 11 * mm, yColorBox - 0.807 * mm]
                        yColorBox = yColorBox - 6 * mm
                        break;

                    default:
                        //$.writeln("start " + inksArray[i].name)
                        colorBox5 = pathItems.rectangle(yColorBox, xColorBox, 10 * mm, 5 * mm)
                        colorBox5.stroked = false
                        //colorBox5.fillColor = makeColor(0, 0, 0, 100)
                        colorBox5.fillColor = inksSwatches[i].color
                        //$.writeln("middle1 " + inksArray[i].name)
                        colorText5 = textFrames.add()
                        colorText5.contents = inksArray[i].name.replace(/PANTONE\s(.+)/g, "P-$1")
                        colorText5Style = colorText5.textRange.characterAttributes
                        colorText5Style.size = 14
                        //colorText5Style.fillColor = makeColor(0, 0, 0, 100)
                        colorText5Style.fillColor = inksSwatches[i].color
                        colorText5 = colorText5.createOutline()
                        colorText5.position = [xColorBox + 11 * mm, yColorBox - 0.807 * mm]
                        yColorBox = yColorBox - 6 * mm
                        break;
                        
                }
            }


        myDialog.close()
    }

    myDialog.show()
}
