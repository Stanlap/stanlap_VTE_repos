$(document).ready(function () {
let vWeekOfPregnancy = 5,
    vDateOfChildbirth = 25/08/2019;

    vPatient = {
            vGender: 0,
            vAge: 30,
            vWeight: 65,
            vMedProfile: 4,
            vRiscVTE: 0,
            vCC: 30,
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
                'singleProphDose': 0.4,
                delivery: 'п/к',
                container: 'шприц',
                timesADay: 1,

                drugs: {
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
                'singleProphDose': 5000,
                delivery: 'п/к',
                container: 'амп.',
                timesADay: 3,
                drugs: {
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
                'singleProphDose': 0.5,
                delivery: 'п/к',
                container: 'шприц',
                timesADay: 1,

                drugs: {
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
                'singleProphDose': 100,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                drugs: {
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
                'singleProphDose': 150,
                delivery: 'внутрь',
                container: 'капс.',
                timesADay: 2,
                drugs: {
                    Pradaxa: {
                        nameCyr: 'Прадакса',
                        nameLat: 'Pradaxa',
                        officDose: [75, 150],
                    }
                }
            },
            'Rivaroxaban': {
                pair: {
                    'Rivaroxaban': 'Ривароксабан'
                },
                'singleProphDose': 20,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                drugs: {
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
                'singleProphDose': 2.5,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                drugs: {
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
                'singleProphDose': 5.0,
                delivery: 'внутрь',
                container: 'таб.',
                timesADay: 1,
                drugs: {
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
        frequencyOfDrugTaking: 'сут.'
    };

    $('<div/>').attr({
            id: 'invitToAct_1'
        })
        .html('Выберите препарат по МНН:')
        .appendTo('#drugChooser');
$('<label/>')
  .attr({
  id: 'lblBreastFeeding_1',
  for: 'rdoBreastFeeding_1'
  }).text('Согласиться').css('margin-right', '10px').hide().appendTo('#drugChooser');

$('<input/>')
    .attr({
        type: 'radio',
        name: 'rdoBreastFeeding',
        id: 'rdoBreastFeeding_1',

        value: 1
    }).appendTo('#lblBreastFeeding_1');


$('<label/>')
  .attr({
  id: 'lblBreastFeeding_2',
  for: 'rdoBreastFeeding_2'
  }).text('Отказаться').hide().appendTo('#drugChooser');

    $('<input/>')
    .attr({
        type: 'radio',
        name: 'rdoBreastFeeding',
        id: 'rdoBreastFeeding_2',
        value: 2,
        text: 'Нет'
    }).appendTo('#lblBreastFeeding_2');

    $('<br>').appendTo('#drugChooser');

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

(vPatient.vGender == 0 && vPatient.vAge < 45 && vWeekOfPregnancy == 0) ? ($('#invitToAct_1').html('Если пациентка кормит грудью, следует отменить грудное вскармливание. Ваше решение?'), $('#lblBreastFeeding_1, #lblBreastFeeding_2').show()) : '';


$('#btnThree').on('click', function () {
    createAlgorithmOfThromboembolismProphylaxis();
});

//    addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));
//($('input[name=rdoBreastFeeding]:checked').val() === 2) ?                 ($('#dlstList_1 [value="2"]').hide(),
//        $('#dlstList_1 [value="4"]').hide(),
//        $('#dlstList_1 [value="5"]').hide(),
//        $('#dlstList_1 [value="6"]').hide(),
//        $('#dlstList_1 [value="7"]').hide(),
//        $('#dlstList_1 [value="8"]').hide()) : '';



$('input[name=rdoBreastFeeding]').on('click', function () {
$('#invitToAct_1').html('Выберите препарат по МНН:');
$('#lblBreastFeeding_1, #lblBreastFeeding_2').hide();
console.log($('#dlstList_1').val());
});

function createAlgorithmOfThromboembolismProphylaxis() {

    $('#divContraindicationsToDrugsUse').show();
    checkDrugsContraindications();

    function checkDrugsContraindications() {
console.log(vPatient.vGender);
//        (vPatient.vGender == 0 && vPatient.vAge < 45 && vWeekOfPregnancy == 0) ? $('#invitToAct_1').html('Если пациентка кормит грудью, планируете отменить грудное вскармливание?'): $('#slctListOfDrugsForVTEPrevention').show();

        (vWeekOfPregnancy > 0) ? ($('#divBreastFeeding').hide(),$('#slctListOfDrugsForVTEPrevention').show()):'';

        function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        vDateNow = '';
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    vDateNow = [year, month, day].join('-');
    return vDateNow;
}

        (vDateOfChildbirth == formatDate()) ? $('#slctListOfDrugsForVTEPrevention [value="2"]').hide():'';

        (vPatient.vAge < 18) ? ($('#slctListOfDrugsForVTEPrevention [value="0"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="1"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="4"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="5"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="6"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="8"]').hide()) : '';
        (vPatient.vAge > 60) ? $('#slctListOfDrugsForVTEPrevention [value="7"]').hide(): '';

        if ($('#chkIsOrNoSurg').is(':checked')) {
            ($('.divGenSurgOper select').prop('selectedIndex') == 4 || $('.divTraumOrthOper select').prop('selectedIndex') == 8 || $('.divNeurosurgOper select').prop('selectedIndex') == 0 || $('.divUrolOper select').prop('selectedIndex') == 0 || $('.divUrolOper select').prop('selectedIndex') == 1) ? $('#slctListOfDrugsForVTEPrevention [value="2"]').hide(): '';
        }

        ($('#chkSevereHepaticFailure').is(':checked')) ? ($('#slctListOfDrugsForVTEPrevention [value="2"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="4"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="5"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="6"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="7"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="8"]').hide()) : '';

        ($('#chkHeartInsuff3_4').is(':checked')) ? $('#slctListOfDrugsForVTEPrevention [value="8"]').hide(): '';

        ($('#chkUncontrolledSystemicHypertension').is(':checked')) ? $('#slctListOfDrugsForVTEPrevention [value="2"]').hide(): '';
        ($('#chkActiveUlcerOfStomachOrDuodenum').is(':checked')) ? $('#slctListOfDrugsForVTEPrevention [value="8"]').hide(): '';

        (vPatient.vCC < 30) ? ($('#slctListOfDrugsForVTEPrevention [value="3"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="4"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="7"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="8"]').hide()) : '';
        (vPatient.vCC < 15 || $('#chkChronicDialysis').is(':checked')) ? ($('#slctListOfDrugsForVTEPrevention [value="5"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="6"]').hide()) : '';

        (vWeekOfPregnancy > 0) ? ($('#slctListOfDrugsForVTEPrevention [value="2"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="5"]').hide(),
            $('#slctListOfDrugsForVTEPrevention [value="6"]').hide()) : ($('#chkArtificialHeartValve').is(':checked')) ? $('#slctListOfDrugsForVTEPrevention [value="0"]').hide(): '';

        (vWeekOfPregnancy < 13 || vWeekOfPregnancy > 28) ? $('#slctListOfDrugsForVTEPrevention [value="8"]').hide():'';
        (vWeekOfPregnancy > 36) ? $('#slctListOfDrugsForVTEPrevention [value="7"]').hide() : '';

    }
let vDrugVal ='';
    $('#slctListOfDrugsForVTEPrevention').on('change', function () {
        let a = $(this),
            vAdd = '. ',
        t = '',
        t1 = 'Назначение препарата противопоказано (не рекомендуется), если ',
        t2 = ' Отменить выбранный препарат?';

        function confirmIt() {
            if (confirm(t1 + t + t2)) {
                a.find(':selected').hide();
                a.find('[value="9"]').attr("selected", "selected");
            } else {
                vDrugVal = a.val();
            }
        }

        if (a.val() == 0 && vWeekOfPregnancy > 0) {
            t = 'пациентке установлен искусственный клапан сердца.';
            confirmIt();
        };
        if (a.val() == 2) {
            if ($('#chkIsOrNoSurg').is(':checked')) {
                t = 'выполнена операция на глазных яблоках' + vAdd;
                ($('.chkDiabetes_1').prop('checked', false)) ? confirmIt(): '';
            };
            if ($('.chkDiabetes_1').is(':checked')) {
                (t != '') ? (vAdd = ', ', t = t + vAdd + 'имеется диабетическая ретинопатия.') : t = 'имеется диабетическая ретинопатия.';
                confirmIt();
            };
        };
        if (a.val() == 5) {
            t = 'имеется врожденный дефицит лактазы.';
            confirmIt();
        };
        if (a.val() == 8) {
            t = 'пациент принимает метатрексат, или у пациента бронх астма, индуцированная приемом салицилатов.';
            confirmIt();
        };
        if (a.val() == 1 ||a.val() == 3 ||a.val() == 1 ||a.val() == 4 || a.val() == 6 ||a.val() == 7) {
            vDrugVal = a.val();
        };

    });
};

let vClexane = {
'': 'Анфибра',
'': 'Гемапаксан',
'': 'Клексан',
'': 'Фленокс НЕО',
'': 'Эниксум',
'': 'Эноксапарин',
'': 'Эноксапарин-Бинергия'
};
//способ 1
//$.each(vClexane, function(key, value) {
//$('#my_select').append($("", {
//value: key,
//text: value
//}));
//});

function fillSelectNewValues(a, b){
$.each(a, function(key, value) {
b.append($('', {
value: key,
text: value
}));
});
}





    function addOptionsToDatalist(vDrug, vDL) {
        vDL.find('option').remove();
        $.each(vDrug, function (key, value) {
            vDL.append($('<option>', {
                    key: value
                })
                .text(value));
        });
    }

    function getObjFromArr(vArr, ) {
        let vArrPairs = Object.keys(vArr).map(function (index) {
                return vArr[index].pair;
            }),
            vObjPairs = {};
        $(vArrPairs).each(function (index) {
            vObjPairs[Object.keys(vArrPairs[index])] = Object.values(vArrPairs[index])[0];
        });
        return vObjPairs;
    }

    vObjDrugPairs = getObjFromArr(vDrugsList);
    //    console.log(vObjDrugPairs);
    addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));

    $('#chkUseLatinDrugName').on('click', function () {
        $(this).is(':checked') ? $('#drugLatinName, #inpText_2').show() : $('#drugLatinName, #inpText_2').hide();
    });

    function chooseDrugGroup() {
        console.log('func_1');
        $('#invitToAct_1').text('Выберите препарат по коммерческому названию (либо введите другой):');
        vChoosedDrug.vChoosedDrugGroup = $('#inpText_1').val();
        $.each(vObjDrugPairs, function (index, value) {
            value === vChoosedDrug.vChoosedDrugGroup ? vChoosedDrug.vChoosedDrugGroupLat = index : '';
        });
        vArrPairs = Object.keys(vDrugsList[vChoosedDrug.vChoosedDrugGroupLat].drugs).map(function (name) {
            return [vDrugsList[vChoosedDrug.vChoosedDrugGroupLat].drugs[name].nameCyr, vDrugsList[vChoosedDrug.vChoosedDrugGroupLat].drugs[name].nameLat];

        });
        vObjDrugPairs = {};
        vArrPairs.forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            vObjDrugPairs[entry[1]] = entry[0];
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
            value === $('#inpText_1').val() ? $('#inpText_2').val(index) : '';
        });
        $('#inpText_1').val() === '' ? $('#inpText_2').val('') : '';
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
        if (vChoosedDrug.vChoosedDrugGroupLat === 'Acetylsalicylic acid') {
            $('#inpText_2, #invitToAct_2').show();
            $('#inpText_2').val('');
            vSingleDosesList = {
                1: '100',
                2: '200',
                3: '300'
            };
            addOptionsToDatalist(vSingleDosesList, $('#dlstList_2'));
        };
        let vTPath_1 = vDrugsList['Dabigatran etexilate'];
        (vPatient.vMedProfile === 2 && (vPatient.vAge > 75 || vPatient.vCC < 51)) ? (vTPath_1.singleProphDose = 110, vTPath_1.drugs.Pradaxa.officDose = [110]) : '';
        if (vPatient.vMedProfile === 4) {
            vTPath_1.timesADay = 1;
            vPatient.vAge < 76 ? (vTPath_1.singleProphDose = 220, vTPath_1.drugs.Pradaxa.officDose = [110]) : '';
        };

        let vTPath_2 = vDrugsList[vChoosedDrug.vChoosedDrugGroupLat].drugs;
        addOptionsToDatalist(vTPath_2[vChoosedDrug.titleLat].officDose, $('#dlstList_1'));

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
        let vT_1 = vDrugsList[vChoosedDrug.vChoosedDrugGroupLat],
            vT_2 = vChoosedDrug.officDose,
            vOfficDose_Gen = parseFloat($('#inpText_1').val()),
            vT_3,
            vT_4 = ' mg, ',
            vT_5 = '';

        switch (vChoosedDrug.vChoosedDrugGroupLat) {

            case 'Enoxaparin sodium':
                console.log('Enoxaparin sodium');
                vT_2.Ml = vOfficDose_Gen;
                vT_2.Mg = vT_2.Ml * 100;
                vT_2.aXa = vT_2.Ml * 10000;
                if (vT_2.Mg === 30 && vPatient.vRiscVTE === 2) {
                    vT_1.timesADay = 2;
                    vT_1.singleProphDose = 30;
                }
                (vPatient.vRiscVTE === 1 || vPatient.vCC < 30) ? (vT_1.singleProphDose = 20, vChoosedDrug.numberOfOfficDose = 1) : '';
                vT_3 = vT_2.Mg;
                while (vT_3 < vT_1.singleProphDose) {
                    vT_3 += vT_3;
                    vChoosedDrug.numberOfOfficDose++;
                };
               vT_5 = (vT_1.singleProphDose / 100) + ' ml, ';
                break;

            case 'Nadroparin calcium':
                console.log('Nadroparin calcium');

                vT_2.Ml = vOfficDose_Gen;
                vT_2.aXa = vT_2.Ml * 9500;
                ((vPatient.vMedProfile === 1 || vPatient.vMedProfile === 2) && vPatient.vWeight > 70) ? vT_1.singleProphDose = 0.6: '';
                (vPatient.vMedProfile === 3) ? vT_1.singleProphDose = 0.3: '';
                if (vPatient.vMedProfile === 4) {
                    vPatient.vWeight < 50 ? vT_1.singleProphDose = 0.2 : vPatient.vWeight > 70 ? vT_1.singleProphDose = 0.4 : vT_1.singleProphDose = 0.3;
                };
                vPatient.vCC < 30 ? vT_1.singleProphDose = +(vT_1.singleProphDose *= 0.75).toFixed(2) : '';

                vI = vT_2.Ml;
                while (vI < vT_1.singleProphDose) {
                    vI += vI;
                    vChoosedDrug.numberOfOfficDose++;
                }
                vT_5 = vT_1.singleProphDose + ' ml, ';
                vT_1.singleProphDose *= 100;
                break;


            case 'Heparin sodium':
                console.log('Heparin sodium');
                vPatient.vWeight < 50 ? vT_1.timesADay = 2 : '';
                vPatient.vWeight > 150 ? vT_1.singleProphDose = 6500 : '';
                vT_2.ME = vOfficDose_Gen;
                vT_2.Ml = vT_2.ME / 1000;
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / 25000).toFixed(1);
                vT_4 = ' ME, ';
                break;

            case 'Fondaparinux sodium':
                console.log('Fondaparinux sodium');
                vPatient.vCC < 50 ? vT_1.singleProphDose *= 0.6 : '';
                vT_2.Ml = vOfficDose_Gen;
                vT_2.Mg = vT_2.Ml * 5;
                vT_5 = (vT_1.singleProphDose) + ' ml, ';
                vT_1.singleProphDose *= 5;
//                vChoosedDrug.singleProphDose = (`${vT_1.singleProphDose * 5} mg, ${vT_1.singleProphDose} ml,`);
                break;

            case 'Acetylsalicylic acid':
                console.log('Acetylsalicylic acid');
                vT_2.Mg = vOfficDose_Gen;
                vT_1.singleProphDose = $('#inpText_2').val();
                vChoosedDrug.tempCont = (`${(vT_1.singleProphDose/vOfficDose_Gen).toFixed(1)} ${vT_1.container},`);
                $('#btnTry').trigger('click').remove();
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vT_2.Mg).toFixed(1);
//                vChoosedDrug.singleProphDose = (`${vT_1.singleProphDose} mg,`);
                break;

            case 'Dabigatran etexilate':
                console.log('Dabigatran etexilate');

                vT_2.Mg = vOfficDose_Gen;
                vI = vOfficDose_Gen;
                while (vI < vT_1.singleProphDose) {
                    vI += vI;
                    vChoosedDrug.numberOfOfficDose++;
                }
//                vChoosedDrug.singleProphDose = (`${vT_1.singleProphDose} mg,`);
                break;

            case 'Rivaroxaban':
                console.log('Rivaroxaban');
                (vPatient.vCC > 30 || vPatient.vCC < 51) ? vT_1.singleProphDose = 15: '';
                vT_2.Mg = vOfficDose_Gen;
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vOfficDose_Gen).toFixed(1);
//                vChoosedDrug.singleProphDose = (`${vT_1.singleProphDose} mg,`);
                break;

            case 'Apixaban':
                console.log('Apixaban');
                vT_2.Mg = vOfficDose_Gen;
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vOfficDose_Gen).toFixed(1);
//                vChoosedDrug.singleProphDose = (`${vT_1.singleProphDose} mg,`);
                break;

            case 'Warfarin':
                console.log('Warfarin');
                vT_2.Mg = vOfficDose_Gen;
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vOfficDose_Gen).toFixed(1);
//                vChoosedDrug.singleProphDose = (`${vT_1.singleProphDose} mg,`);
                break;
        };
        vChoosedDrug.singleProphDose = (`${vT_1.singleProphDose}${vT_4}${vT_5}`);
        vChoosedDrug.tempCont = (`${vT_1.container} ${vChoosedDrug.numberOfOfficDose},`);
        let vTimE_S = 'раза';

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
        (vT_1.timesADay === 1 || vT_1.timesADay > 4) ? vTimE_S = 'раз': '';
        let vText_1 = convertObjPairsToString(vT_2),
            vText_2 = (`${vChoosedDrug.tempCont} ${vChoosedDrug.singleProphDose}`);

        console.log(`Выбран препарат: ${vChoosedDrug.titleCyr} (${vChoosedDrug.titleLat}${vText_1}, ${vT_1.container} 1) ${vT_1.delivery}, ${vText_2}${vT_1.timesADay} ${vTimE_S}/${vChoosedDrug.frequencyOfDrugTaking}`);
    });

    $('#btnTry').on('click', function () {
        //Код не удалять, кнопка - делегат для события!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (vPatient.vMedProfile === 4 && +$('#inpText_2').val() === 300) {
            $('#inpText_3').val() === 'через день' ?
                vChoosedDrug.frequencyOfDrugTaking = '2 сут.' : '';
            console.log(vChoosedDrug.frequencyOfDrugTaking);
        };
    });
});
