$(document).ready(function () {
    let vPatient = {
            vMedProfile: 0,
            vRiscVTE: 0,
            vCC: 0,
            vDateOfSurg: '',
            vWeight: 0,
            vAge: 18
        },


    vDrugsList = {
        'Enoxaparin sodium': {
            pair: {
                'Enoxaparin sodium': 'Эноксапарин натрия'
            },
            'singleProphDose': 40,
            delivery: 'п/к',
            container: 'шприц',
            timesADay: 1,
            drugs: {
                Anfibra: {
                    nameCyr: 'Анфибра',
                    nameLat: 'Anfibra',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                Hemapaxan: {
                    nameCyr: 'Гемапаксан',
                    nameLat: 'Hemapaxan',
                    officDose: [0.4],
                },
                Clexane: {
                    nameCyr: 'Клексан',
                    nameLat: 'Clexane',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                'Flenox Neo': {
                    nameCyr: 'Фленокс НЕО',
                    nameLat: 'Flenox Neo',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                Enixum: {
                    nameCyr: 'Эниксум',
                    nameLat: 'Enixum',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                'Enoxaparin sodium': {
                    nameCyr: 'Эноксапарин натрия',
                    nameLat: 'Enoxaparin sodium',
                    officDose: [0.2, 0.3, 0.4, 0.6, 0.8, 1, ],
                },
                'Enoxaparin Binergia': {
                    nameCyr: 'Эноксапарин-Бинергия',
                    nameLat: 'Enoxaparin Binergia',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                }
            }
        },
        'Nadroparin calcium': {
            pair: {
                'Nadroparin calcium': 'Надропарин кальция'
            },
            drugs: {
                'singleProphDose': 0.4,
                delivery: 'п/к',
                container: 'шприц',
                timesADay: 1,
                Fraxiparine: {
                    nameCyr: 'Фраксипарин',
                    nameLat: 'Fraxiparine',
                    officDose: [0.3, 0.4, 0.6, 0.8, 1, ],
                },
                'Fraxiparine Forte': {
                    nameCyr: 'Фраксипарин Форте',
                    nameLat: 'Fraxiparine Forte',
                    officDose: [0.6, 0.8, 1, ],
                }
            }
        },
        'Heparin sodium': {
            pair: {
                'Heparin sodium': 'Гепарин натрия'
            },
            drugs: {
                'singleProphDose': 5000,
                delivery: 'п/к',
                container: 'амп.',
                timesADay: 3,
                Heparinum: {
                    nameCyr: 'Гепарин',
                    nameLat: 'Heparinum',
                    officDose: [5000],
                },
                'Heparinum natrium': {
                    nameCyr: 'Гепарин натрия',
                    nameLat: 'Heparinum natrium',
                    officDose: [5000],
                }
            }
        },
        'Fondaparinux sodium': {
            pair: {
                'Fondaparinux sodium': 'Фондапаринукс натрия'
            },
             drugs: {
                'singleProphDose': 0.5,
                delivery: 'п/к',
                container: 'шприц',
                timesADay: 1,
                Arixrta: {
                    nameCyr: 'Арикстра',
                    nameLat: 'Arixrta',
                    officDose: [0.5, 1, ],
                }
            }
        },
        'Acetylsalicylic acid': {
            pair: {
                'Acetylsalicylic acid': 'Ацетилсалициловая кислота'
            },
            drugs: {
                'singleProphDose': 100,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                'Acetylsalicylic acid': {
                    nameCyr: 'Ацетилсалициловая кислота',
                    nameLat: 'Acetylsalicylic acid',
                    officDose: [500],
                },

                'Aspirin Cardio': {
                    nameCyr: 'Аспирин кардио',
                    nameLat: 'Aspirin Cardio',
                    officDose: [100, 300],
                },

                'ASK-cardio': {
                    nameCyr: 'АСК-кардио',
                    nameLat: 'ASK-cardio',
                    officDose: [100],
                },

                Acecardol: {
                    nameCyr: 'Ацекардол',
                    nameLat: 'Acecardol',
                    officDose: [50, 100, 300],
                },

                Trombopol: {
                    nameCyr: 'Тромбопол',
                    nameLat: 'Trombopol',
                    officDose: [75, 175],
                },

                Sanovasc: {
                    nameCyr: 'Сановаск',
                    nameLat: 'Sanovasc',
                    officDose: [50, 75, 100],
                },

                'Thrombo ASS': {
                    nameCyr: 'Тромбо АСС',
                    nameLat: 'Thrombo ASS',
                    officDose: [50, 100],
                },

                CardiASK: {
                    nameCyr: 'КардиАСК',
                    nameLat: 'CardiASK',
                    officDose: [50, 100, 300],
                },

                Aspicor: {
                    nameCyr: 'Аспикор',
                    nameLat: 'Aspicor',
                    officDose: [100],
                },

                'Upsarin UPSA': {
                    nameCyr: 'Упсарин УПСА',
                    nameLat: 'Upsarin UPSA',
                    officDose: [500],
                }
            }
        },
        'Dabigatran etexilate': {
            pair: {
                'Dabigatran etexilate': 'Дабигатрана этексилат'
            },
            drugs: {
                'singleProphDose': 110,
                delivery: 'внутрь',
                container: 'капс.',
                timesADay: 1,
                Pradaxa: {
                    nameCyr: 'Прадакса',
                    nameLat: 'Pradaxa',
                    officDose: [75, 110, 150],
                }
            }
        },
        'Rivaroxaban': {
            pair: {
                'Rivaroxaban': 'Ривароксабан'
            },
            drugs: {
                'singleProphDose': 20,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                Xarelto: {
                    nameCyr: 'Ксарелто',
                    nameLat: 'Xarelto',
                    officDose: [2.5, 10, 15, 20],
                }
            }
        },
        'Apixaban': {
            pair: {
                'Apixaban': 'Апиксабан'
            },
            drugs: {
                'singleProphDose': 2.5,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                Eliquis: {
                    nameCyr: 'Эликвис',
                    nameLat: 'Eliquis',
                    officDose: [2.5, 5],
                }
            }
        },
        'Warfarin': {
            pair: {
                'Warfarin': 'Варфарин'
            },
            drugs: {
                'singleProphDose': 2.5,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                Warfarex: {
                    nameCyr: 'Варфарекс',
                    nameLat: 'Warfarex',
                    officDose: [1, 3, 5],
                },
                Warfarin: {
                    nameCyr: 'Варфарин',
                    nameLat: 'Warfarin',
                    officDose: [2.5],
                },
                Warfarin: {
                    nameCyr: 'Варфарин Канон',
                    nameLat: 'Warfarin',
                    officDose: [2.5],
                },
                'Warfarin Nycomed': {
                    nameCyr: 'Варфарин Никомед',
                    nameLat: 'Warfarin Nycomed',
                    officDose: [2.5],
                },
                'Warfarin-OBL': {
                    nameCyr: 'Варфарин-OBL',
                    nameLat: 'Warfarin-OBL',
                    officDose: [2.5],
                }
            },
        }
    };
    vChoosedDrug = {
        titleCyr: '',
        titleLat: '',
        officDose: {},
        numberOfOfficDose: 1,
        frequencyOfDrugTaking: ''
    };

    $('<div/>').attr({
            id: 'invitToAct_1'
        })
        .html('Выберите препарат по МНН:')
        .appendTo('#drugChooser');
    $('<input/>').attr({
            id: 'inpText_1',
            type: 'text',
            list: 'dlstList_1'
        })
        .appendTo('#drugChooser');
    $('<datalist/>').attr({
            id: 'dlstList_1',
        })
        .appendTo('#inpText_1');
    $('<br>').appendTo('#drugChooser');
    $('<label/>').attr({
            id: 'lblLatinTitle',
            for: 'chkUseLatinDrugName'
        })
        .hide()
        .html('Указывать латинское название')
        .appendTo('#drugChooser');
    $('<input/>').attr({
            type: 'checkbox',
            id: 'chkUseLatinDrugName'
        })
        .appendTo('#lblLatinTitle');
    $('<div/>').attr({
            id: 'invitToAct_2'
        })
        .html('Выберите разовую дозу препарата:')
        .hide()
        .appendTo('#drugChooser');
    $('<input/>').attr({
            id: 'inpText_2',
            type: 'text',
            list: 'dlstList_2'
        })
        .hide()
        .appendTo('#drugChooser');
    $('<datalist/>').attr({
            id: 'dlstList_2',
        })
        .appendTo('#inpText_2');

    let vChoosedDrugGroup = '',
        vChoosedDrugGroupLat = '';

    function addOptionsToDatalist(vDrug, vDL) {
        vDL.find('option').remove();
        $.each(vDrug, function (key, value) {
            vDL.append($('<option>', {
                    key: value
                })
                .text(value));
        });
    }
    let vObjDrugPairs = {},
        vArrDrugPairs = Object.keys(vDrugsList).map(function (index) {
            return vDrugsList[index].pair;
        });
    vObjDrugPairs[Object.keys(vArrDrugPairs[0])] = Object.values(vArrDrugPairs[0])[0];
    $(vArrDrugPairs).each(function (index) {
        vObjDrugPairs[Object.keys(vArrDrugPairs[index])] = Object.values(vArrDrugPairs[index])[0];
    });
    console.log(vObjDrugPairs);
    addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));

    $('#chkUseLatinDrugName').on('click', function () {
        ($(this).is(':checked')) ? $('#drugLatinName, #inpText_2').show(): $('#drugLatinName, #inpText_2').hide();
    });

    function chooseDrugGroup() {
        $('#invitToAct_1').text('Выберите препарат по коммерческому названию (либо введите другой):');
        console.log('func_1');
        vChoosedDrugGroup = $('#inpText_1').val();
        $.each(vObjDrugPairs, function (index, value) {
            if (value === vChoosedDrugGroup) {
                vChoosedDrugGroupLat = index;
            }
        });
        vArrDrugPairs = Object.keys(vDrugsList[vChoosedDrugGroupLat].drugs).map(function (name) {
            return [vDrugsList[vChoosedDrugGroupLat].drugs[name].nameCyr, vDrugsList[vChoosedDrugGroupLat].drugs[name].nameLat];

        });
    console.log(vArrDrugPairs);
vObjDrugPairs = {};
vArrDrugPairs.forEach(entry => {
let key = entry[0];
let value = entry[1];
vObjDrugPairs[entry[1]] = entry[0];
console.log(`${key}: ${value}`);
});
console.log(vObjDrugPairs);
addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));

        $('#inpText_1').val('');
        $('#inpText_1').unbind('input', chooseDrugGroup);
    };
    $('#inpText_1').bind('input', chooseDrugGroup);

    function chooseDrug() {
        console.log('func_2');

        $('#btnOne, #lblLatinTitle').show();
        $.each(vObjDrugPairs, function (index, value) {
            (value === $('#inpText_1').val()) ? $('#inpText_2').val(index): '';
        });
        ($('#inpText_1').val() === '') ? $('#inpText_2').val(''): '';
    }
    $('#inpText_1').bind('input', chooseDrug);

    function addDrugTitles() {
        console.log('func_3');
        $('#inpText_1').unbind('input', chooseDrug);
        vChoosedDrug.titleCyr = $('#inpText_1').val();
        vChoosedDrug.titleLat = $('#inpText_2').val();
        $('#inpText_1').val('');
        $('#invitToAct_1').text('Выберите аптечную дозу препарата:');
        $('#lblLatinTitle, #inpText_2').hide();
        if (vChoosedDrugGroupLat === 'Acetylsalicylic acid') {
            $('#inpText_2, #invitToAct_2').show();
            $('#inpText_2').val('');
            vSingleDosesList = {
                1: '100',
                2: '200',
                3: '300'
            };
            addOptionsToDatalist(vSingleDosesList, $('#dlstList_2'));
        };
        (vPatient.vMedProfile === 2) ? (vDrugsList['Dabigatran etexilate'].singleProphDose = 150, vDrugsList['Dabigatran etexilate'].timesADay = 2, vDrugsList['Dabigatran etexilate'].Pradaxa.officDose = [75, 150]) : '';

        (vPatient.vMedProfile === 4) ? (vDrugsList['Dabigatran etexilate'].singleProphDose = 220, vDrugsList['Dabigatran etexilate'].timesADay = 1, vDrugsList['Dabigatran etexilate'].Pradaxa.officDose = [110]) : '';
        (vPatient.age > 75) ? vDrugsList['Dabigatran etexilate'].Pradaxa.officDose = [75, 150]: '';
        (vPatient.age > 80 || (vPatient.age > 75 && (vPatient.vCC > 30 || vPatient.vCC < 51))) ? vDrugsList['Dabigatran etexilate'].Pradaxa.officDose = [110]: '';
        (vPatient.vMedProfile === 4 && (vPatient.age > 75 && (vPatient.vCC > 30 || vPatient.vCC < 51))) ? vDrugsList['Dabigatran etexilate'].Pradaxa.officDose = [75, 150]: '';

        let vTempPath_1 = vDrugsList[vChoosedDrugGroupLat].drugs;
        addOptionsToDatalist(vTempPath_1[$('#inpText_2').val()].officDose, $('#dlstList_1'));
        $('#inpText_1').val(vTempPath_1[vChoosedDrug.titleLat].singleProphDose);
        $('#btnOne').unbind('click', addDrugTitles);
    };
    $('#btnOne').bind('click', addDrugTitles);

    $('#inpText_2').on('input', function () {
        if (+($(this).val()) === 300) {
            $('<br>').appendTo('#drugChooser');
            $('<div/>').attr({
                    id: 'invitToAct_3'
                })
                .html('Выберите частоту приема препарата:')
                .appendTo('#drugChooser');
            $('<input/>').attr({
                    id: 'inpText_3',
                    type: 'text',
                    list: 'dlstList_3'
                })
                .appendTo('#drugChooser');
            $('<datalist/>').attr({
                    id: 'dlstList_3',
                })
                .appendTo('#inpText_3');
            vDailyDosesList = {
                1: 'ежедневно',
                2: 'через день'
            };
            addOptionsToDatalist(vDailyDosesList, $('#dlstList_3'));
        }
    })

    $('#Two').on('click', function () {
    let vTemp_1 = vDrugsList[vChoosedDrugGroupLat],
        vTemp_2 = vChoosedDrug.officDose,
        vOfficDose_Gen = parseFloat($('#inpText_1').val()),
        vI,
        vT_1 = 1;

         switch (vChoosedDrugGroupLat) {

            case 'Enoxaparin sodium':
                vTemp_2.Ml = vOfficDose_Gen;
                vTemp_2.Mg = vTemp_2.Ml * 100;
                vTemp_2.aXa = vTemp_2.Ml * 10000;
                if (vTemp_2.Mg === 30 && vPatient.vRiscVTE === 2) {
                    vTemp_1.timesADay = 2;
                    vTemp_1.singleProphDose = 30;
                } else {
                    vI = vTemp_2.Mg;
                    while (vI < vTemp_1.singleProphDose) {
                        vI += vI;
                        vChoosedDrug.numberOfOfficDose++;
                    }
                };
                (vPatient.vRiscVTE === 1 || vPatient.vCC < 30) ? (vTemp_1.singleProphDose.Mg = 20, vChoosedDrug.numberOfOfficDose = 1) : '';

                break;


            case 'Nadroparin calcium':
                console.log('Nadroparin calcium');

                vTemp_2.Ml = vOfficDose_Gen;
                vTemp_2.aXa = vTemp_2.Ml * 9500;

                (vPatient.vMedProfile === 1 && vPatient.vWeight > 70) ? vTemp_1.singleProphDose = 0.6: '';
                (vPatient.vMedProfile === 2) ? vTemp_1.singleProphDose = 0.3: '';
                if (vPatient.vMedProfile === 3) {
                    (vPatient.vWeight < 50) ? vTemp_1.singleProphDose = 0.2: (vPatient.vWeight > 70) ? vTemp_1.singleProphDose = 0.4 : vTemp_1.singleProphDose = 0.3;
                };
                (vPatient.vCC < 30) ? vTemp_1.singleProphDose = +(vTemp_1.singleProphDose *= 0.75).toFixed(1): '';

                vI = vTemp_2.Ml;
                while (vI < vTemp_1.singleProphDose) {
                    vI += vI;
                    vChoosedDrug.numberOfOfficDose++;
                }
                console.log(vTemp_2.Ml, vTemp_1.singleProphDose);
                console.log(vTemp_1.singleProphDose);

                break;


            case 'Heparin sodium':
                console.log('Heparin sodium');
                (vPatient.vWeight < 50) ? vTemp_1.timesADay = 2: '';
                (vPatient.vWeight > 150) ? vTemp_1.singleProphDose = 6500: '';
                vTemp_2.ME = vOfficDose_Gen;
                vTemp_2.Ml = vTemp_2.ME / 1000;
                vChoosedDrug.numberOfOfficDose = (vTemp_1.singleProphDose / 25000).toFixed(1);
                break;

            case 'Fondaparinux sodium':
                console.log('Fondaparinux sodium');
                (vPatient.vCC < 30) ? (vTemp_1.singleProphDose = 1.5 + ' mg,', vChoosedDrug.singleProphDose = 0.3 + ' ml,') : '';
                vTemp_2.Ml = vOfficDose_Gen;
                vTemp_2.Mg = vTemp_2.Ml * 5;
                break;

            case 'Acetylsalicylic acid':
                console.log('Acetylsalicylic acid');
                vTemp_2.Mg = vOfficDose_Gen;
                vTemp_1.singleProphDose = $('#inpText_2').val();
                vChoosedDrug.singleProphDose = (`${(vTemp_1.singleProphDose/vOfficDose_Gen).toFixed(1)} ${vTemp_1.container},`);
                vTemp_1.singleProphDose += ' mg, ';
                $('#btnTry').trigger('click').remove();
                break;

            case 'Dabigatran etexilate':
                console.log('Dabigatran etexilate');
                (vPatient.age > 75) ? (vDrugsList['Dabigatran etexilate'].singleProphDose = 150, vDrugsList['Dabigatran etexilate'].timesADay = 1) : '';
                (vPatient.age > 80 || (vPatient.age > 75 && (vPatient.vCC > 30 || vPatient.vCC < 51))) ? (vDrugsList['Dabigatran etexilate'].singleProphDose = 110, vDrugsList['Dabigatran etexilate'].timesADay = 2) : '';
                (vPatient.vMedProfile === 4 && (vPatient.age > 75 && (vPatient.vCC > 30 || vPatient.vCC < 51))) ? (vDrugsList['Dabigatran etexilate'].singleProphDose = 150, vDrugsList['Dabigatran etexilate'].timesADay = 1) : '';

                vTemp_2.Mg = vOfficDose_Gen;
                vChoosedDrug.singleProphDose = '';
                vI = +$('#inpText_1').val();
                while (vI < vDrugsList['Dabigatran etexilate'].singleProphDose) {
                    vI += vI;
                    vT_1++;
                }
                vDrugsList['Dabigatran etexilate'].singleProphDose += ' mg,';
                vChoosedDrug.singleProphDose = (`${vTemp_1.container}: ${vT_1},`);
                break;

            case 'Rivaroxaban':
                console.log('Rivaroxaban');
                (vPatient.vCC > 30 || vPatient.vCC < 51) ? vTemp_1.singleProphDose = 15: '';
                vTemp_2.Mg = vOfficDose_Gen;
                vT_1 = (vTemp_1.singleProphDose / vOfficDose_Gen).toFixed(1);
                vChoosedDrug.singleProphDose = (`${vTemp_1.container}: ${vT_1},`);
                vTemp_1.singleProphDose += ' mg,';
                break;
            case 'Apixaban':
                console.log('Apixaban');
                vTemp_2.Mg = vOfficDose_Gen;
                vT_1 = (vTemp_1.singleProphDose / vOfficDose_Gen).toFixed(1);
                vChoosedDrug.singleProphDose = (`${vTemp_1.container}: ${vT_1},`);
                vTemp_1.singleProphDose += ' mg,';
                break;
            case 'Warfarin':
                console.log('Warfarin');
                vTemp_2.Mg = vOfficDose_Gen;
                vT_1 = (vTemp_1.singleProphDose / vOfficDose_Gen).toFixed(1);
                vChoosedDrug.singleProphDose = (`${vTemp_1.container}: ${vT_1},`);
                vTemp_1.singleProphDose += ' mg,';

                break;
        };

        let vTimE_S = 'раза',
            vText_1 = '',
            vText_2 = '';

        function convertObjPairsToString(vObj) {
            let vText = '',
                vPairs = Object.entries(vObj);
            vPairs.forEach(entry => {
                let key = entry[0];
                let value = entry[1];
                vText += (`, ${value} ${key}`);
            });
            return vText;
        }
        (vTemp_1.timesADay === 1 || vTemp_1.timesADay > 4) ? vTimE_S = 'раз': '';
        vText_1 = convertObjPairsToString(vTemp_2);
        vText_2 = (`${vChoosedDrug.singleProphDose} ${vTemp_1.singleProphDose} `);

        console.log(`Выбран препарат: ${vTemp_1[vChoosedDrug.titleLat].nameCyr} (${vTemp_1[vChoosedDrug.titleLat].nameLat}${vText_1}, ${vTemp_1.container}: ${vChoosedDrug.numberOfOfficDose}), ${vTemp_1.delivery}, ${vText_2}${vTemp_1.timesADay} ${vTimE_S}/сут.${vChoosedDrug.frequencyOfDrugTaking}`);
    });

    //                let vObjDrugPairs = {},
    //                    vArrDrugPairs = Object.keys(vDrugsList).map(function (name) {
    //                        return vDrugsList[name].pair;
    //                    });
    //                vObjDrugPairs[Object.keys(vArrDrugPairs[0])] = Object.values(vArrDrugPairs[0])[0];
    //                $(vArrDrugPairs).each(function (index) {
    //                    vObjDrugPairs[Object.keys(vArrDrugPairs[index])] = Object.values(vArrDrugPairs[index])[0];
    //                });
    //                console.log(vObjDrugPairs);
    //                addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));

    $('#btnTry').on('click', function () {

        //Код не удалять!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (vPatient.vMedProfile === 3 && +$('#inpText_2').val() === 300) {
                    vChoosedDrug.frequencyOfDrugTaking = ' ' + $('#inpText_3').val() + '.';
                    console.log(vChoosedDrug.frequencyOfDrugTaking);
                };
    });
});
