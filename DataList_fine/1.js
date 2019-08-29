$(document).ready(function () {
    let vWeekOfPregnancy = 0,
        //        vDateOfChildbirth = '2019-08-26',
        vDateOfChildbirth = '',
        vSevereHepaticFailure = false,
        vHeartInsuff3_4 = false,
        vIsOrNoSurg = false,
        vSomeSurg = false,
        vDiabetes = true,
        vActiveUlcerOfStomachOrDuodenum = false,
        vChronicDialysis = false,
        vArtificialHeartValve = false,
        vUncontrolledSystemicHypertension = false;
    vPatient = {
            vGender: 0,
            vAge: 50,
            vWeight: 65,
            vMedProfile: 1,
            vRiscVTE: 0,
            vCC: 80,
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
    }).html('Выберите препарат по МНН:').appendTo('#drugChooser');
    //$('<label/>')
    //  .attr({
    //  id: 'lblBreastFeeding_1',
    //  for: 'rdoBreastFeeding_1'
    //  }).text('Согласиться').css('margin-right', '10px').hide().appendTo('#drugChooser');
    //    $('<label/>')
    //        .attr({
    //            id: 'lblBreastFeeding_1',
    //            for: 'rdoBreastFeeding_1'
    //        }).text('Согласиться').css('margin-right', '10px').hide().appendTo('#drugChooser');
    //
    //    $('<input/>')
    //        .attr({
    //            type: 'radio',
    //            name: 'rdoBreastFeeding',
    //            id: 'rdoBreastFeeding_1',
    //
    //            value: 1
    //        }).appendTo('#lblBreastFeeding_1');
    //
    //
    //    $('<label/>')
    //        .attr({
    //            id: 'lblBreastFeeding_2',
    //            for: 'rdoBreastFeeding_2'
    //        }).text('Отказаться').hide().appendTo('#drugChooser');
    //
    //    $('<input/>')
    //        .attr({
    //            type: 'radio',
    //            name: 'rdoBreastFeeding',
    //            id: 'rdoBreastFeeding_2',
    //            value: 2,
    //            text: 'Нет'
    //        }).appendTo('#lblBreastFeeding_2');
    //
    //    $('<br>').appendTo('#drugChooser');
    //

    $('<input/>').attr({
        id: 'inpText_1',
        type: 'text',
        list: 'dlstList_1'
    }).appendTo('#drugChooser');
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

    function getArrPairs(vArr, ) {
        return Object.keys(vArr).map(function (index) {
            return vArr[index].pair;
        });
    }
    let vArrPairs = getArrPairs(vDrugsList);
    console.log(vArrPairs);

    function getObjFromArrPairs(vArrP) {
        let vObjP = {};
        $(vArrP).each(function (index) {
            vObjP[Object.keys(vArrP[index])] = Object.values(vArrP[index])[0];
        });
        return vObjP;
    }
    vObjDrugPairs = getObjFromArrPairs(vArrPairs);
    console.log(vObjDrugPairs);
//    let vObjDrugPairs = Object.assign({}, vObjDrugPairs);
//    console.log(vObjDrugPairs);
//    vObjDrugPairs = getObjFromArrPairs(vArrPairs);
//    console.log(vObjDrugPairs);
//    let vObjDrugPairs = Object.assign({}, vObjDrugPairs);
//    console.log(vObjDrugPairs);

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
    vDateOfChildbirth === formatDate() ? delete vObjDrugPairs['Heparin sodium'] : '';
    if (vPatient.vAge < 18) {
        with(vObjDrugPairs) {
            delete Apixaban;
            delete Rivaroxaban;
        }
        delete vObjDrugPairs['Enoxaparin sodium'];
        delete vObjDrugPairs['Nadroparin calcium'];
        delete vObjDrugPairs['Dabigatran etexilate'];
        delete vObjDrugPairs['Acetylsalicylic acid'];
    };
    (vPatient.vAge > 60) ? delete vObjDrugPairs.Warfarin: '';
    if (vSevereHepaticFailure) {
        with(vObjDrugPairs) {
            delete Rivaroxaban;
            delete Apixaban;
            delete Warfarin;
        }
        delete vObjDrugPairs['Heparin sodium'];
        delete vObjDrugPairs['Dabigatran etexilate'];
        delete vObjDrugPairs['Acetylsalicylic acid'];
    };
    (vHeartInsuff3_4 || vActiveUlcerOfStomachOrDuodenum) ? delete vObjDrugPairs['Acetylsalicylic acid']: '';
    vUncontrolledSystemicHypertension ? delete vObjDrugPairs['Heparin sodium'] : '';
    (vIsOrNoSurg && vSomeSurg) ? delete vObjDrugPairs['Heparin sodium']: '';
    //        if(!vIsOrNoSurg && vSomeSurg){
    // let vDecision = confirm('Гепарин противопоказан при офтальмологических операциях. Отказаться от данного препарата?');
    //        vDecision ? (delete vObjDrugPairs['Heparin sodium'], !vDecision):'';
    //        }
    //        if(vDiabetes){
    // vDecision = confirm('Гепарин противопоказан при наличии диабетической ретинопатии. Отказаться от данного препарата?');
    //        vDecision ? (delete vObjDrugPairs['Heparin sodium'], !vDecision):'';
    //        }

    (vPatient.vCC < 15 || vChronicDialysis) ? (delete vObjDrugPairs.Rivaroxaban, delete vObjDrugPairs.Apixaban) : '';
    vPatient.vCC < 30 ? (delete vObjDrugPairs['Acetylsalicylic acid'], delete vObjDrugPairs['Dabigatran etexilate'], delete vObjDrugPairs['Fondaparinux sodium'], delete vObjDrugPairs.Warfarin) : '';

    vWeekOfPregnancy > 0 ? (delete vObjDrugPairs['Heparin sodium'], delete vObjDrugPairs.Rivaroxaban, delete vObjDrugPairs.Apixaban) : '';
    (vWeekOfPregnancy > 0 && vArtificialHeartValve) ? delete vObjDrugPairs['Enoxaparin sodium']: '';

    (vWeekOfPregnancy < 13 || vWeekOfPregnancy > 28) && vWeekOfPregnancy !== 0 ? delete vObjDrugPairs['Acetylsalicylic acid'] : '';
    vWeekOfPregnancy > 36 ? delete vObjDrugPairs.Warfarin : '';

    if (vPatient.vGender == 0 && vPatient.vAge < 45 && vWeekOfPregnancy == 0) {
        let vAns = confirm('Если пациентка кормит грудью, следует отменить грудное вскармливание. Ваше решение?');
        if (vAns == false) {
            with(vObjDrugPairs) {
                delete Apixaban;
                delete Rivaroxaban;
                delete Warfarin;
            }
            delete vObjDrugPairs['Acetylsalicylic acid'];
            delete vObjDrugPairs['Dabigatran etexilate'];
            delete vObjDrugPairs['Heparin sodium'];
            //            console.log(vObjDrugPairs);
            //            addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));

        }
    };


    function addOptionsToDatalist(vDrug, vDL) {
        vDL.find('option').remove();
        $.each(vDrug, function (key, value) {
            vDL.append($('<option>', {
                    key: value
                })
                .text(value));
        });
        vDrug = {};
    }
    addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));


//was hidden old
    //    (vPatient.vGender == 0 && vPatient.vAge < 45 && vWeekOfPregnancy == 0) ? ($('#invitToAct_1').html('Если пациентка кормит грудью, следует отменить грудное вскармливание. Ваше решение?'), $('#lblBreastFeeding_1, #lblBreastFeeding_2').show()) : $('#inpText_1').show();;
    //
    //    $('input[name = "rdoBreastFeeding"]').on('click', function () {
    //        if (+$('input[name=rdoBreastFeeding]:checked').val() === 2) {
    //            with(vObjDrugPairs) {
    //                delete Apixaban;
    //                delete Rivaroxaban;
    //                delete Warfarin;
    //            }
    //            delete vObjDrugPairs['Acetylsalicylic acid'];
    //            delete vObjDrugPairs['Dabigatran etexilate'];
    //            delete vObjDrugPairs['Heparin sodium'];
    //            console.log(vObjDrugPairs);
    //            addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));
    //        };
    //
    //
    //        $('#invitToAct_1').html('Выберите препарат по МНН:');
    //        $('#lblBreastFeeding_1, #lblBreastFeeding_2').hide();
    //        $('#inpText_1').show();
    //        console.log($('#dlstList_1').val());
    //    });

    //    let vDrugVal = '';
    //        $('#slctListOfDrugsForVTEPrevention').on('change', function () {
    //            let a = $(this),
    //                vAdd = '. ',
    //                t = '',
    //                t1 = 'Назначение препарата противопоказано (не рекомендуется), если ',
    //                t2 = ' Отменить выбранный препарат?';
    //
    //            function confirmIt() {
    //                if (confirm(t1 + t + t2)) {
    //                    a.find(':selected').hide();
    //                    a.find('[value="9"]').attr("selected", "selected");
    //                } else {
    //                    vDrugVal = a.val();
    //                }
    //            }
    //
    //            if (a.val() == 0 && vWeekOfPregnancy > 0) {
    //                t = 'пациентке установлен искусственный клапан сердца.';
    //                confirmIt();
    //            };
    //            if (a.val() == 2) {
    //                if ($('#chkIsOrNoSurg').is(':checked')) {
    //                    t = 'выполнена операция на глазных яблоках' + vAdd;
    //                    ($('.chkDiabetes_1').prop('checked', false)) ? confirmIt(): '';
    //                };
    //                if ($('.chkDiabetes_1').is(':checked')) {
    //                    (t != '') ? (vAdd = ', ', t = t + vAdd + 'имеется диабетическая ретинопатия.') : t = 'имеется диабетическая ретинопатия.';
    //                    confirmIt();
    //                };
    //            };
    //            if (a.val() == 5) {
    //                t = 'имеется врожденный дефицит лактазы.';
    //                confirmIt();
    //            };
    //            if (a.val() == 8) {
    //                t = 'пациент принимает метатрексат, или у пациента бронх астма, индуцированная приемом салицилатов.';
    //                confirmIt();
    //            };
    //            if (a.val() == 1 || a.val() == 3 || a.val() == 1 || a.val() == 4 || a.val() == 6 || a.val() == 7) {
    //                vDrugVal = a.val();
    //            };
    //
    //        });
    //    };

//end was hidden old


    $('#chkUseLatinDrugName').on('click', function () {
        $(this).is(':checked') ? $('#drugLatinName, #inpText_2').show() : $('#drugLatinName, #inpText_2').hide();
    });

    function tryChooseDrugGroup() {
        console.log('func_1');
        $('#invitToAct_1').text('Выберите препарат по коммерческому названию:');
        if (!vIsOrNoSurg && vSomeSurg && $('#inpText_1').val() === 'Гепарин натрия') {
            let vDecision = confirm('Гепарин противопоказан при офтальмологических операциях. Отказаться от данного препарата?');
            vDecision ? (delete vObjDrugPairs['Heparin sodium'], !vDecision) : '';
        };
        if ($('#inpText_1').val() === 'Гепарин натрия' && vDiabetes) {
            vDecision = confirm('Гепарин противопоказан при наличии диабетической ретинопатии. Отказаться от данного препарата?');
            vDecision ? (delete vObjDrugPairs['Heparin sodium'], !vDecision, $('#inpText_1').val('')) :$('#inpText_1').val('');
        };
        addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));
$('#btnOne').show();
        $('#inpText_1').unbind('input', tryChooseDrugGroup);
    };
    $('#inpText_1').bind('input', tryChooseDrugGroup);

    function chooseDrugGroup() {
console.log('func_2');
    $('#inpText_1').val() === ''? alert('Введите название лекарственного препарата.'):'';

        $('#btnOne, #lblLatinTitle').show();
        $('#inpText_2').val('');

        vChoosedDrug.vChoosedDrugGroup = $('#inpText_1').val();
        console.log(vChoosedDrug.vChoosedDrugGroup);

        $.each(vObjDrugPairs, function (index, value) {
            value === vChoosedDrug.vChoosedDrugGroup ? vChoosedDrug.vChoosedDrugGroupLat = index : '';
            console.log(vChoosedDrug.vChoosedDrugGroupLat);
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
        $('#btnOne').unbind('click', chooseDrugGroup);
        $('#btnOne').hide();
    $('#inpText_1').bind('input', chooseDrug);

    };
    $('#btnOne').bind('click', chooseDrugGroup);



    //    $('#btnOne').bind('click', addDrugTitles);

// was hidden 1
//    $('#inpText_1').bind('input', chooseDrugGroup);








    //        vChoosedDrug.vChoosedDrugGroup = $('#inpText_1').val();
    //
    //        $.each(vObjDrugPairs, function (index, value) {
    //            value === vChoosedDrug.vChoosedDrugGroup ? vChoosedDrug.vChoosedDrugGroupLat = index : '';
    //console.log(vChoosedDrug.vChoosedDrugGroupLat);
    //        });
    //        vArrPairs = Object.keys(vDrugsList[vChoosedDrug.vChoosedDrugGroupLat].drugs).map(function (name) {
    //            return [vDrugsList[vChoosedDrug.vChoosedDrugGroupLat].drugs[name].nameCyr, vDrugsList[vChoosedDrug.vChoosedDrugGroupLat].drugs[name].nameLat];
    //
    //        });
    //        vObjDrugPairs = {};
    //        vArrPairs.forEach(entry => {
    //            let key = entry[0];
    //            let value = entry[1];
    //            vObjDrugPairs[entry[1]] = entry[0];
    //        });
    //        console.log(vObjDrugPairs);
    //                addOptionsToDatalist(vObjDrugPairs, $('#dlstList_1'));

    //        $('#inpText_1').val('');
    //        $('#inpText_1').unbind('input', tryChooseDrugGroup);
    //    };

    //    $('#inpText_1').bind('input', tryChooseDrugGroup);
//end was hidden 1

    function chooseDrug() {
        console.log('func_3');

        $.each(vObjDrugPairs, function (index, value) {
            value === $('#inpText_1').val() ? $('#inpText_2').val(index) : '';
        });
//        vChoosedDrug.titleCyr = $('#inpText_1').val();
//        vChoosedDrug.titleLat = $('#inpText_2').val();

        $('#inpText_1').val() === '' ? $('#inpText_2').val('') : '';
$('#btnOne').show();
    $('#btnOne').bind('click', addDrugTitles);

    }

    function addDrugTitles() {
        console.log('func_4');
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

    $('#inpText_1').unbind('input', chooseDrug);
 console.log(vChoosedDrug.titleLat);     $('#inpText_1').bind('input', attachFunc_makeNoteOfDrug);

    $('#btnOne').unbind('click', addDrugTitles);

    };

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
function attachFunc_makeNoteOfDrug(){
console.log('func_5');
$('#btnOne').bind('click', makeNoteOfDrug);
$('#inpText_1').unbind('input', attachFunc_makeNoteOfDrug);
};

    function makeNoteOfDrug() {
console.log('func_6');
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
                break;

            case 'Acetylsalicylic acid':
                console.log('Acetylsalicylic acid');
                vT_2.Mg = vOfficDose_Gen;
                vT_1.singleProphDose = $('#inpText_2').val();
                vChoosedDrug.tempCont = (`${(vT_1.singleProphDose/vOfficDose_Gen).toFixed(1)} ${vT_1.container},`);
                $('#btnTry').trigger('click').remove();
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vT_2.Mg).toFixed(1);
                break;

            case 'Dabigatran etexilate':
                console.log('Dabigatran etexilate');

                vT_2.Mg = vOfficDose_Gen;
                vI = vOfficDose_Gen;
                while (vI < vT_1.singleProphDose) {
                    vI += vI;
                    vChoosedDrug.numberOfOfficDose++;
                }
                break;

            case 'Rivaroxaban':
                console.log('Rivaroxaban');
                (vPatient.vCC > 30 || vPatient.vCC < 51) ? vT_1.singleProphDose = 15: '';
                vT_2.Mg = vOfficDose_Gen;
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vOfficDose_Gen).toFixed(1);
                break;

            case 'Apixaban':
                console.log('Apixaban');
                vT_2.Mg = vOfficDose_Gen;
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vOfficDose_Gen).toFixed(1);
                break;

            case 'Warfarin':
                console.log('Warfarin');
                vT_2.Mg = vOfficDose_Gen;
                vChoosedDrug.numberOfOfficDose = (vT_1.singleProphDose / vOfficDose_Gen).toFixed(1);
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
$('#btnOne').unbind('click', makeNoteOfDrug);
    };

    $('#btnTry').on('click', function () {
        //Код не удалять, кнопка - делегат для события!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (vPatient.vMedProfile === 4 && +$('#inpText_2').val() === 300) {
            $('#inpText_3').val() === 'через день' ?
                vChoosedDrug.frequencyOfDrugTaking = '2 сут.' : '';
            console.log(vChoosedDrug.frequencyOfDrugTaking);
        };
    });
});
