$('#divAllRF div').hide();
$('.divMiddleLvlRF').hide();
$('.divFemaleLvl').show();
let vBirthDateOfPatient = '',
    vAgeOfPatient = '',
    vGeneralListOfRF = '',
    vGeneralListOfOper = '';

$('#chkMale').on('click', function () {
    ($(this).is(':checked')) ? $('#slctMedicalProfileOfPatient [value="10"]').hide(): $('#slctMedicalProfileOfPatient [value="10"]').show();
});


$.extend({
    distinct: function (anArray) {
        let result = [];
        $.each(anArray, function (i, v) {
            if ($.inArray(v, result) === -1) result.push(v);
        });
        return result;
    }
});
let vAllSurgProfiles = [];
let valuesMedPfofile = [];
$('#slctMedicalProfileOfPatient').on('change', function () {
    $('#chkMale').prop('disabled', true);
    valuesMedPfofile = $('#slctMedicalProfileOfPatient option:selected');

    $('.lblIsOrNoSurg, #divChooseKindOfOper, #divCreateKindOfOper, #divSmallOrLargeOper, #divObstOrGynProfile, #divPregnancyOrChildbirth').hide();
    $('#chkIsOrNoSurg, #chkCreateKindOfOper, #divPregnancyOrChildbirth input:checked, #divObstOrGynProfile input:checked, #divSmallOrLargeOper input:checked').prop('checked', false);
    $('.btnAccordChooseOper').prop('value', 1).next().hide();
    $('.btnAccordChooseOper').hide();
    vAllSurgProfiles = (valuesMedPfofile.is('[value = 3]') || valuesMedPfofile.is('[value = 4]') || valuesMedPfofile.is('[value = 5]') || valuesMedPfofile.is('[value = 6]') || valuesMedPfofile.is('[value = 7]') || valuesMedPfofile.is('[value = 8]') || valuesMedPfofile.is('[value = 9]'));
    if (vAllSurgProfiles == true) {
        $('.lblIsOrNoSurg').show();
    }
    (valuesMedPfofile.is('[value = 10]')) ?
    $('#divObstOrGynProfile').show(): '';
});
$('input[name=rdoObstOrGynProfile]:radio').on('click', function () {
    if ($(this).val() == 0) {
        $('#divPregnancyOrChildbirth').show();
    } else {
        $('#divPregnancyOrChildbirth').hide();
        $('input[name="rdoPregnancyOrChildbirth"]:checked').prop('checked', false);
    }
    $('.lblIsOrNoSurg').show();
});
$('#chkIsOrNoSurg').on('click', function () {
    if ($(this).is(':checked')) {
        $('#divChooseKindOfOper, #divCreateKindOfOper').show();
        (valuesMedPfofile.is('[value = 3]')) ? $('.btnGenSurgOper').show(): '';
        (valuesMedPfofile.is('[value = 4]')) ? $('.btnTraumOrthOper').show(): '';
        (valuesMedPfofile.is('[value = 5]')) ? $('.btnNeurosurgOper').show(): '';
        (valuesMedPfofile.is('[value = 6]')) ? $('.btnCardiovascOper').show(): '';
        (valuesMedPfofile.is('[value = 7]')) ? $('.btnUrolOper').show(): '';
        (valuesMedPfofile.is('[value = 8]')) ? $('.btnCombustOper').show(): '';
        (valuesMedPfofile.is('[value = 9]')) ? $('#divChooseKindOfOper').hide(): '';
        (valuesMedPfofile.is('[value = 10]')) ?
        $('.btnObsGynOper').show(): '';
    } else {
        $('#divChooseKindOfOper, #divCreateKindOfOper, #divSmallOrLargeOper').hide();
        $('.btnAccordChooseOper').prop('value', 1).next().hide();
        $('#divChooseKindOfOper option:selected').prop('selected', false);
        $('#chkCreateKindOfOper').prop('checked', false);
        $('#divSmallOrLargeOper input:checked').prop('checked', false);
    }
});
$('.btnAccordChooseOper').on('click', function (el) {
    el = $(this);
    if (el.val() === 0) {
        el.next().hide();
        el.val(1);
    } else {
        el.val(0);
        el.next().show();
    }
})
$('#chkCreateKindOfOper').on('click', function () {
    ($(this).is(':checked')) ? ($('#divSmallOrLargeOper').show(), $('#divChooseKindOfOper').hide(), $('#divChooseKindOfOper option:selected').prop('selected', false),
        $('.btnObsGynOper').show()) : ($('#divSmallOrLargeOper, .lblTimeOfSurg').hide(),
        $('.btnObsGynOper').show(),
        $('#divSmallOrLargeOper input:checked').prop('checked', false), $('#divChooseKindOfOper').show());
})
$('input[name=rdoSmallOrLargeOper]:radio').on('click', function () {
    ($(this).val() == 1) ? ($('.lblTimeOfSurg').hide(), $('#chkTimeOfSurg').prop('checked', false)) : $('.lblTimeOfSurg').show();
})

function getCurrentAge(date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

$('#dateOfBirth').on('input', function () {
    vBirthDateOfPatient = new Date($('#dateOfBirth').prop('value'));
})

function showBtnGoToRF() {
    if (getCurrentAge(vBirthDateOfPatient) != 0 && ($('#weight').val().length > 0) && ($('#height').val().length > 0) && (valuesMedPfofile.length > 0)) {
        $('#btnOne').show();
        ($('#weight').prop('value') < 50 || $('#weight').prop('value') > 120) ? alert('Вес пациента действительно ' + ($('#weight').prop('value')) + ' кг?'): '';
        ($('#height').prop('value') < 150 || $('#height').prop('value') > 190) ? alert('Рост пациента действительно ' + ($('#height').prop('value')) + ' кг?'): '';
    } else {
        $('#btnOne').hide();
    }
}
$('#btnOne').bind('click', goToRF);

$('#slctMedicalProfileOfPatient option').bind('click', showBtnGoToRF);
$('#age, #weight, #height, #dateOfBirth').bind('input', showBtnGoToRF);

$('#slctMedicalProfileOfPatient option').click(function () {
    ($('#slctMedicalProfileOfPatient option:selected').is('[value = 10]') && $('input[name=rdoObstOrGynProfile]:checked').val() == undefined) ? $('#btnOne').prop('disabled', true): $('#btnOne').prop('disabled', false);
})

$('input[name=rdoObstOrGynProfile]').click(function () {
    ($(this).val() == 1) ? ($('#btnOne').prop('disabled', false), $('#inpWeekOfPregnancy').val(''), vWeekOfPregnancy = 0): ($('#btnOne').prop('disabled', true), $('#divDateOfChildbirth').hide(), $('#inpDateOfChildbirth').val(''), vDateOfChildbirth = '');
});

$('input[name=rdoPregnancyOrChildbirth]').click(function () {
    ($(this).val() == 0) ? ($('#inpWeekOfPregnancy').show(), $('#divDateOfChildbirth').hide(), $('#inpDateOfChildbirth').val(''), vDateOfChildbirth = ''):($('#inpWeekOfPregnancy').hide(), vWeekOfPregnancy = 0, $('#divDateOfChildbirth').show());
});

$('input[name=rdoPregnancyOrChildbirth]').click(function () {

    ($(this).val() == 1) ? ($('#inpWeekOfPregnancy').val(''), vWeekOfPregnancy = 0, $('#inpWeekOfPregnancy').hide(), $('#btnOne').prop('disabled', false), $('#divDateOfChildbirth').show()):(vDateOfChildbirth != '') ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);($(this).val() == 0) ? ($('#inpWeekOfPregnancy').show(), $('#divDateOfChildbirth').hide()):(vWeekOfPregnancy != 0) ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);
 });

let vWeekOfPregnancy = 0;
$('#inpWeekOfPregnancy').on('input', function () {
    vWeekOfPregnancy = Number($(this).val());
(vWeekOfPregnancy != 0) ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);
console.log(vWeekOfPregnancy);
});


let vDateOfChildbirth = '';
$('#btnChildbirthToday').click(function () {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    vDateOfChildbirth = [year, month, day].join('-');
    (vDateOfChildbirth != '') ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);

 });
$('#inpDateOfChildbirth').on('input', function () {
vDateOfChildbirth = $(this).val();
    (vDateOfChildbirth != '') ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);

 });

//    ($('input[name=rdoObstOrGynProfile]:checked').val() == 0 && $('input[name=rdoPregnancyOrChildbirth]:checked').val() != undefined) ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);
//    (vWeekOfPregnancy != 0) ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);



$('.divSingleLvlRF').on('click', function (el) {
    el = $(this).closest('.divMiddleLvlRF').prev().find('input:checkbox');
    ($(this).closest('.divMiddleLvlRF').find('input:checkbox').is(':checked')) ? el.prop('checked', true): el.prop('checked', false);
    //    console.log(event.type, event.target.id, event.relatedTarget + ' 1 event');
    //    console.log(el.is(':checked'))
})
$('.divMiddleLvlRF').on('click', function (event, el) {
    el = $(this).prev();
    (el.find('input:checkbox').is(':checked')) ? $(this).prev().hide(): ($(this).prev().show(), $(this).hide(), el.find('button').html('&gt;'));
    console.log(event.type, event.target.id, event.relatedTarget + ' 2 event');
})
$('.divSingleLvlRF label').next().on('click', function (ev) {
    $(this).next().show()
    $(this).hide()
    ev.stopPropagation();
})
$('.divSingleLvlRF label').next().next().on('click', function (ev) {
    $(this).prev().show()
    $(this).hide()
    ev.stopPropagation();
})
$('.btnTogglerRF').on('click', function () {
    //    console.log($(this).html());
    ($(this).html() == ('&gt;')) ? ($(this).closest('.divTogglerRF').next().show(), $(this).html('&lt;')) : ($(this).parents('.divTogglerRF').next().hide(), $(this).html('&gt;'));
    //    console.log($(this).html());
});
$('#btnIsRenalInsuff').on('click', function () {
    ($(this).html() == ('&gt;')) ? $('#frmGFR_CC').hide(): ($('#frmGFR_CC').show(), alert('Критически важно! Вводимые единицы измерения креатинина должны точно соответствовать его введенному значению. К сведению: если значение креатинина не введено, программа расценивает функцию почек как норму при назначении профилактики ВТЭО.'));
});

$('.chkLungDiseases_1').on('click', function () {
    $('.chkLungDiseases_1').not(this).prop('checked', false);
    if ($(this).is(':checked')) {
        ($(this).attr('id') == 'chkSevereLungDiseases') ? $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', true): '';
        if ($(this).attr('id') == 'chkModerateLungDiseases') {
            if ($('.chkBedRestMore3Days_1').is(':checked')) {} else {
                $('#chkIsBedRestMore3Days').prop('checked', false);
                if ($('#chkBedRestMore3Days').attr('data-hasMarked') == '0') {
                    $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', false);
                }
            }
        }
    }
});
$('.chkBedRestMore3Days_1').on('click', function (el) {
    ($(this).is(':checked')) ? $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', true): ($('.chkBedRestMore3Days_1').is(':checked')) ? $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', true) : ($('#chkBedRestMore3Days').attr('data-hasMarked') == '0') ? $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', false) : '';

    console.log($('#chkBedRestMore3Days').attr('data-hasMarked'));
})
$('#chkBedRestMore3Days').on('click', function () {
    let a = $(this).attr('data-hasMarked');
    console.log(a);
    ($(this).is(':checked')) ? $(this).attr('data-hasMarked', '1'): $(this).attr('data-hasMarked', '0');
    ($('#chkIsBedRestMore3Days').is(':checked')) ? (alert('Отмечены ранее патологические состояния и риск-факторы, которые требуют соблюдения больным строгого постального режима'), $(this).prop('checked', true)) : '';
    console.log($(this).attr('data-hasMarked'));

})


//$('.divSingleLvlRF span').on('click', function () {
//    $(this).next().show()
//    $(this).hide()
//})
//$('span.comments').on('click', function () {
//    $(this).prev().show()
//    $(this).hide()
//})
//$('.divSingleLvlRF input').click(function (el) {
//    el = $(this).parents('.divMiddleLvlRF');
//    (el.find('input').is(':checked')) ? el.prev('label').hide(): (el.prev('label').show(), el.prev('label').find('input').prop('checked', false), el.hide());
//})
//$('.btnTogglerRF').on('click',function () {
//    console.log($(this).html());
//    ($(this).html()==('&gt;')) ? ($(this).closest('.divTogglerRF').next().show(), $(this).html('&lt;')):($(this).parents('.divTogglerRF').next().hide(), $(this).html('&gt;'));
//console.log($(this).html());
//});
//$('.divMiddleLvlRF').on('click', function (el) {
//    el = $(this).prev();
//    ($(this).find('input').is(':checked')) ? (el.hide(), el.find('input:checkbox').prop('checked',true)) : (el.show(), el.find('input:checkbox').prop('checked',false), $(this).hide(), el.find('button').html('&gt;'));
//})
//$('.divMiddleLvlRF').on('click', function (el) {
//    el = $(this).prev();
//    ($('.divMiddleLvlRF input').is(':checked')) ? (el.hide(), el.find('input:checkbox').prop('checked',true)): (el.show(), el.find('span:last-child').css('display', 'none'), el.find('span:first-child').css('display', 'block'), el.find('input:checkbox').prop('checked',false));
//})

let vGender = 0,
    vWeight = 0,
    vHeight = 0;

function goToRF() {

    let selectedRF = [];
    if (valuesMedPfofile.is('[value = 1]')) {
        selectedRF = $.merge($(selectedRF), $('.clsTherRF'));
        ($('#chkCalculateRiskOfBleeding').prop('checked')) ? selectedRF = $.merge($(selectedRF), $('.clsNonsurgBleedingRF')): '';
    }
    if (valuesMedPfofile.is('[value = 2]')) {
        selectedRF = $.merge($(selectedRF), $('.clsAtrFibrRF'));
        ($('#chkCalculateRiskOfBleeding').prop('checked')) ? selectedRF = $.merge($(selectedRF), $('.clsFibrBleedingRF')): '';
    }
    if (valuesMedPfofile.is('[value = 3]') || valuesMedPfofile.is('[value = 4]') || valuesMedPfofile.is('[value = 5]') || valuesMedPfofile.is('[value = 6]') || valuesMedPfofile.is('[value = 7]') || valuesMedPfofile.is('[value = 8]') || valuesMedPfofile.is('[value = 9]') || valuesMedPfofile.is('[value = 10]')) {
        selectedRF = $.merge($(selectedRF), $('.clsSurgRF'));
        ($('#chkCalculateRiskOfBleeding').prop('checked') && valuesMedPfofile.is('[value != 4]') && valuesMedPfofile.is('[value != 10]')) ? selectedRF = $.merge($(selectedRF), $('.clsSurgBleedingRF')): '';
    }
    if (valuesMedPfofile.is('[value = 4]')) {
        selectedRF = $.merge($(selectedRF), $('.clsTraumRF'));
        ($('#chkCalculateRiskOfBleeding').prop('checked')) ? selectedRF = $.merge($(selectedRF), $('.clsTraumBleedingRF')): '';
    }
    (valuesMedPfofile.is('[value = 5]')) ? selectedRF = $.merge($(selectedRF), $('.clsNeurosurgRF')): '';
    (valuesMedPfofile.is('[value = 8]')) ? selectedRF = $.merge($(selectedRF), $('.clsCombustRF')): '';
    if (valuesMedPfofile.is('[value = 9]')) {
        selectedRF = $.merge($(selectedRF), $('.clsOncoRF'));
    }
    if (valuesMedPfofile.is('[value = 10]')) {
        ($('input[name=rdoObstOrGynProfile]:checked').val() == 0) ? selectedRF = $.merge($(selectedRF), $('.clsObstRF')): '';
        ($('#chkCalculateRiskOfBleeding').prop('checked')) ? selectedRF = $.merge($(selectedRF), $('.clsObstBleedingRF')): '';
        ($('input[name=rdoPregnancyOrChildbirth]:checked').val() == 1) ? selectedRF = $.merge($(selectedRF), $('.clsLabourRF')): '';
    }
    selectedRF = $.distinct(selectedRF);
    $(selectedRF).show();
    $('.divTogglerRF').show();

    $('#divProfileOfPatient').hide();
    if ($('#chkMale').is(':checked')) {
        $('#chkFemale').prop('checked', false);
        $('#chkMaleDouble').prop('checked', true);
        $('.divFemaleLvl').hide();
    } else {
        $('#chkFemale').prop('checked', true);
        $('#chkMaleDouble').prop('checked', false);
        $('.divFemaleLvl').show();
    }

    ($('#chkMale').is(':checked')) ? vGender = 1: '';
    vWeight = Number($('#weight').val());
    vHeight = Number($("#height").val());

    $('#btnOne').unbind('click', goToRF);
    $('#btnOne').bind('click', countRF).html('Перейти к подсчету риск-факторов ВТЭО');

}

$('.chkGlomerularFiltrationRate_1').on('click', function () {
    $('.chkGlomerularFiltrationRate_1').not(this).prop('checked', false);
})

$('.chkDiabetes_1').on('click', function () {
    $('.chkDiabetes_1').not(this).prop('checked', false);
})

$('.chkBurnsSuperficial_1').on('click', function () {
    $('.chkBurnsSuperficial_1').not(this).prop('checked', false);
})

$('.chkBurnsDeep_1').on('click', function () {
    $('.chkBurnsDeep_1').not(this).prop('checked', false);
})

$('.chkThermalInhalationInjury_1').on('click', function () {
    $('.chkThermalInhalationInjury_1').not(this).prop('checked', false);
})

$('.chkSpinalCordInjure_1').on('click', function () {
    $('.chkSpinalCordInjure_1').not(this).prop('checked', false);
})

$('#chkSepsis').on('click', function () {
    ($(this).is(':checked')) ? $('#chkAcuteInflammatoryDisease').prop('checked', true): '';
})
$('#chkHeartInsuff3_4').on('click', function () {
    ($(this).is(':checked') && $('#lblSomeHeartInsuff').is(':visible')) ? $('#chkSomeHeartInsuff').prop('checked', true): '';
})
$('#chkHeartInsuffLess1Month').on('click', () => ($(this).is(':checked') && $('#lblSomeHeartInsuff').is(':visible')) ? $('#chkSomeHeartInsuff').prop('checked', true) : '')

$('#chkCongestHeartFailOrSystLVDysfunctEFLess40Percent').on('click', function () {
    ($(this).is(':checked') && $('#lblSomeHeartInsuff').is(':visible')) ? $('#chkSomeHeartInsuff').prop('checked', true): '';
})
//    ($(this).is(':checked')) ? : ;
//})
//$('#chkPlateletsLess50, #chkHeparinInducedThrombocytopenia').on('click', function () {
//    ($(this).is(':checked') && $('#lblPlateletsLess150').is(':visible')) ? $('#chkPlateletsLess150').prop('checked', true): '';
//})

//let vIsBedRest = 0, vIsBedRest_1 = 0, vIsBedRest_2 = 0;
//$('#chkBedRestMore3Days').on('change', function () {
//    ($(this).is(':checked')) ? vIsBedRest = 1: (vIsBedRest_2 == 0) ? (vIsBedRest = 0, vIsBedRest_2 = 0, $(this).closest('.divMiddleLvlRF').prev().show()) : ($(this).prop('checked', true).closest('.divMiddleLvlRF').prev().show(), alert('Имеются ранее отмеченные риск-факторы, требующие априори строгого постельного режима'));
//})
//$('.chkLungDiseases_1').bind('click', function (event, el) {
//        ($(this).prop('checked') == false && $('.chkLungDiseases_1').not(':checked')) ? $(this).closest('.divMiddleLvlRF').prev().show(): '';
//
//        $('.chkLungDiseases_1').not(this).prop('checked', false);
//        ($(this).attr('id') == 'chkSevereLungDiseases' && $(this).is(':checked')) ?
//        vIsBedRest_1++ : vIsBedRest_1 = 0;
//        el = 1;
//        if (vIsBedRest_1 == 1) {
//            (vIsBedRest_2 == 0 || vIsBedRest_2 == el && vIsBedRest == 0) ? ($('#chkBedRestMore3Days').prop('checked', true), vIsBedRest_2 = el) : '';
//        } else {
//            console.log('BedRest ' + vIsBedRest, 'SevereLungDis ' + vIsBedRest_1, 'LangOrInfarct ' + vIsBedRest_2);
//            (vIsBedRest_2 == el && vIsBedRest == 0) ? ($('#chkBedRestMore3Days').prop('checked', false), vIsBedRest_2 = 0) : '';
//        }
//        event.stopPropagation();
//        console.log('BedRest ' + vIsBedRest, 'SevereLungDis ' + vIsBedRest_1, 'LangOrInfarct ' + vIsBedRest_2);
//    });
//$('#chkAcuteMiocardInfarction').on('click', function (event, el) {
//    el = 2
//    if ($(this).is(':checked')) {
//        (vIsBedRest_2 == 0 || vIsBedRest_2 == el && vIsBedRest == 0) ? ($('#chkBedRestMore3Days').prop('checked', true), vIsBedRest_2 = el) : '';
//    } else {
//        (vIsBedRest_2 == el && vIsBedRest == 0) ? ($('#chkBedRestMore3Days').prop('checked', false), vIsBedRest_2 = 0) : '';
//    }
//    console.log('INFARCTION:   ' + 'BedRest ' + vIsBedRest, 'SevereLungDis ' + vIsBedRest_1, 'LangOrInfarct ' + vIsBedRest_2);
//    event.stopPropagation();
//})
$('#chkSomeTherapyOfNeoplasm').on('click', function () {
    ($(this).is(':checked')) ? $('#chkActiveNeoplasm').prop('checked', true).closest('.divSingleLvlRF').hide():
        ($('#chkActiveNeoplasm').attr('data-hasMarked') == '0') ? $('#chkActiveNeoplasm').prop('checked', false).closest('.divSingleLvlRF').show() : '';
})
$('#chkActiveNeoplasm').on('change', function () {
    ($(this).is(':checked')) ? $(this).attr('data-hasMarked', '1'): $(this).attr('data-hasMarked', '0');
})
$('#chkAcuteRheumaticDiseases').on('click', function () {
    ($(this).is(':checked')) ? $('#chkRheumaticDiseases').prop('checked', true).closest('.divSingleLvlRF').hide():
        ($('#chkRheumaticDiseases').attr('data-hasMarked') == '0') ? $('#chkRheumaticDiseases').prop('checked', false).closest('.divSingleLvlRF').show() : '';
})

$('#chkPlateletsLess150').on('click', function () {
    if ($(this).is(':checked')) {
        $(this).attr('data-hasMarked', '1');
    } else {
        $(this).attr('data-hasMarked', '0');
        $('#chkPlateletsLess50, #chkPlateletsLess75').prop('checked', false);
    }
})
$('#chkPlateletsLess75').on('click', function () {
    if ($(this).is(':checked')) {
        $('#chkPlateletsLess150').prop('checked', true).closest('.divSingleLvlRF').hide();
        $(this).attr('data-hasMarked', '1');

    } else {
        $('#chkPlateletsLess50').prop('checked', false).closest('.divSingleLvlRF').show();
        $('#chkPlateletsLess150').attr('data-hasMarked') == '0' ? $('#chkPlateletsLess150').prop('checked', false).closest('.divSingleLvlRF').show() : $('#chkPlateletsLess150').closest('.divSingleLvlRF').show();
        $(this).attr('data-hasMarked', '0');
    }
})
$('#chkPlateletsLess50').on('click', function () {
    ($(this).is(':checked')) ? $('#chkPlateletsLess150, #chkPlateletsLess75').prop('checked', true).closest('.divSingleLvlRF').hide():
        ($('#chkPlateletsLess150').attr('data-hasMarked') == '1' && $('#chkPlateletsLess75').attr('data-hasMarked') == '0') ? ($('#chkPlateletsLess150').prop('checked', true).closest('.divSingleLvlRF').show(), $('#chkPlateletsLess75').prop('checked', false).closest('.divSingleLvlRF').show()) : ($('#chkPlateletsLess75').attr('data-hasMarked') == '1') ?
        $('#chkPlateletsLess75, #chkPlateletsLess150').prop('checked', true).closest('.divSingleLvlRF').show() :
        ($('#chkPlateletsLess75, #chkPlateletsLess150').attr('data-hasMarked') == '0') ? $('#chkPlateletsLess75, #chkPlateletsLess150').prop('checked', false).closest('.divSingleLvlRF').show() : '';
})

$('#chkSystemicHypertension').on('click', function () {
    if ($(this).is(':checked')) {
        $(this).attr('data-hasMarked', '1');
    } else {
        $(this).attr('data-hasMarked', '0');
        $('#chkSystemicHypertension2Stage, #chkUncontrolledSystemicHypertension').prop('checked', false);
    }
})
$('#chkSystemicHypertension2Stage').on('click', function () {
    if ($(this).is(':checked')) {
        $('#chkSystemicHypertension').prop('checked', true).closest('.divSingleLvlRF').hide();
        $(this).attr('data-hasMarked', '1');

    } else {
        $('#chkUncontrolledSystemicHypertension').prop('checked', false).closest('.divSingleLvlRF').show();
        $('#chkSystemicHypertension').attr('data-hasMarked') == '0' ? $('#chkSystemicHypertension').prop('checked', false).closest('.divSingleLvlRF').show() : $('#chkSystemicHypertension').closest('.divSingleLvlRF').show();
        $(this).attr('data-hasMarked', '0');
    }
})
$('#chkUncontrolledSystemicHypertension').on('click', function () {
    ($(this).is(':checked')) ? $('#chkSystemicHypertension, #chkSystemicHypertension2Stage').prop('checked', true).closest('.divSingleLvlRF').hide():
        ($('#chkSystemicHypertension').attr('data-hasMarked') == '1' && $('#chkSystemicHypertension2Stage').attr('data-hasMarked') == '0') ? ($('#chkSystemicHypertension').prop('checked', true).closest('.divSingleLvlRF').show(), $('#chkSystemicHypertension2Stage').prop('checked', false).closest('.divSingleLvlRF').show()) : ($('#chkSystemicHypertension2Stage').attr('data-hasMarked') == '1') ?
        $('#chkSystemicHypertension2Stage, #chkSystemicHypertension').prop('checked', true).closest('.divSingleLvlRF').show() :
        ($('#chkSystemicHypertension2Stage, #chkSystemicHypertension').attr('data-hasMarked') == '0') ? $('#chkSystemicHypertension2Stage, #chkSystemicHypertension').prop('checked', false).closest('.divSingleLvlRF').show() : '';
})

//$('.chkSumAcuteInfectionOrInflammatoryDisease').on('click', function (){
//    ($('.chkSumAcuteInfectionOrInflammatoryDisease').is(':checked'))? $('#chkAcuteInfectionOrInflammatoryDisease').prop('checked', true): $('#chkAcuteInfectionOrInflammatoryDisease').prop('checked', false);
//})
//    $('#chkAcuteRheumaticDiseases').on('click', function (){
//        ($(this).is(':checked') && $('#lblRheumaticDiseases').prop('visible', true))? $('#chkRheumaticDiseases').prop('checked', true): ($('#chkRheumaticDiseases, #chkIsRheumaticDiseases').prop('checked', false), $('#lblIsRheumaticDiseases').show(), $('#divIsRheumaticDiseases').hide());
//    })

let vCounterPaduaScore = 0,
    vCounterCHA2DS2_VASс = 0,
    vCounterIMPROVE = 0,
    vCounterHAS_BLED = 0,
    vCounterRusSurgRF = 0,
    vCounterCapriniRF = 0,
    vCounterMajorBleedingScoreRF = 0,
    vSetRusTraumRF = [],
    vCounterRusTraumRF = 0,
    vCounterTraumBleedingRF = 0,
    vCounterGreenTop37a = 0,
    vCounterObstRuRF = 0,
    vCounterObstBleedingRF = 0,
    vCC = 125,
    vGFR = 125;


//  Функция countStratRF стратифицирует риск ВТЭО:
function countStratRF(vCounterRF, x) {
    switch (x) {
        case 'Padua':
            (vCounterRF > 3) ? vStratRF = 'высокий': vStratRF = 'низкий';
            return vStratRF;
            break;
        case 'IMPROVE':
            (vCounterRF > 7) ? vStratRF = 'высокий': vStratRF = 'низкий';
            return vStratRF;
            break;
        case 'HAS_BLED':
            (vCounterRF > 2) ? vStratRF = 'высокий': vStratRF = 'низкий';
            return vStratRF;
            break;
        case 'CHA2DS2_VASсOrRusSurgOrTraumRF':
            (vCounterRF == 0) ? vStratRF = 'низкий': (vCounterRF >= 1 && vCounterRF <= 2) ? vStratRF = 'умеренный' : vStratRF = 'высокий';
            return vStratRF;
            break;
        case 'Caprini':
            (vCounterRF == 0) ? vStratRF = 'низкий': (vCounterRF >= 1 && vCounterRF <= 2) ? vStratRF = 'умеренный' : (vCounterRF >= 3 && vCounterRF <= 4) ? vStratRF = 'высокий' : vStratRF = 'очень высокий';
            return vStratRF;
            break;
        case 'SurgOrTraumBleedingRF':
            (vCounterRF >= 1) ? vStratRF = 'высокий': vStratRF = 'низкий';
            return vStratRF;
            break;
        case 'GreenTop37aRus':
            (vCounterRF > 2) ? vStratRF = 'высокий': vStratRF = 'умеренный';
            return vStratRF;
    }
}

function calculateGFRAndСС() {
    // Код универсального калькулятора для расчета КК и СКФ взят из открытолго источника http://boris.bikbov.ru/ Программирование: Бикбов Б.Т. Выполняя условия автора, дословно приводим комментарий, на котором настаивает автор кода:
    // Данный код может свободно распространяться и модифицироваться при использовании в некоммерческих целях
    // Обязательным условием использования и распространения данного кода являются:
    // 1. Сохранение комментариев с указанием авторства Бикбова Б.Т. в программном коде JavaScript
    // 2. Указание авторства Бикбова Б.Т. на странице с использованием данного програмного кода
    // 3. Указание активной ссылки на сайт http://boris.bikbov.ru/ на странице с использованием данного програмного кода
    //Комментарий автора кода.

    let gfr_cg = '',
        bsa = '',
        gfr_cg_bsa = '',
        vMDRD = '',
        vMDRD_Standartized = '',
        vSKD_EPI = '';
    vCreatinineUnits = Number(vCreatinineUnits);
    //    vCreatinineValue.replace(/[,]+/g, '.');

    if ((vCreatinineValue <= 0.00003) || (vCreatinineValue >= 6500)) {
        vCreatinineValue = 0;
    }
    // конвертирую креатинин
    switch (parseInt(vCreatinineUnits)) {
        case 1: // ммоль/л
            vCreatinineValue = 1000 * vCreatinineValue / 88.4;
            break;
        case 2: // мкмоль/л
            vCreatinineValue /= 88.4;
            break;
        case 4: // мкмоль/л
            vCreatinineValue /= 10;
            break;
    }
    // взрослые
    if (vCreatinineValue > 0 & vGender >= 0 & vAgeOfPatient > 0) {
        // CKD-EPI
        if (vGender == 0) {
            if (vCreatinineValue <= 0.7) {
                vSKD_EPI = Math.pow((vCreatinineValue / 0.7), -0.329) * Math.pow(0.993, vAgeOfPatient);
            } else {
                vSKD_EPI = Math.pow((vCreatinineValue / 0.7), -1.209) * Math.pow(0.993, vAgeOfPatient);
            }
        } else {
            if (vCreatinineValue <= 0.9) {
                vSKD_EPI = Math.pow((vCreatinineValue / 0.9), -0.411) * Math.pow(0.993, vAgeOfPatient);
            } else {
                vSKD_EPI = Math.pow((vCreatinineValue / 0.9), -1.209) * Math.pow(0.993, vAgeOfPatient);
            }
        }
        // коэффициент для расы
        if (vRace == 1) { // белые
            if (vGender == 0) {
                vSKD_EPI = vSKD_EPI * 144;
            } else {
                vSKD_EPI = vSKD_EPI * 141;
            }
        } else { // негроидная
            if (vGender == 0) {
                vSKD_EPI = vSKD_EPI * 166;
            } else {
                vSKD_EPI = vSKD_EPI * 163;
            }
        }
        vSKD_EPI = Math.round(vSKD_EPI);
        //        if (vSKD_EPI > 0) {
        //            console.log('СКФ по формуле CKD-EPI = ' + vSKD_EPI + ' мл/мин/1,73м<sup>2</sup>')
        //        }
        // mdrd
        if (vRace == 2) { // негродидная
            vRace = 1.212;
        }
        // 186 - для нестандартизованных наборов креатинина, 175 - для стандартизованных
        if (vGender == 0) {
            vMDRD = Math.round((186 * (Math.pow(vCreatinineValue, -1.154)) * (Math.pow(vAgeOfPatient, -0.203)) * vRace * 0.742));
            vMDRD_Standartized = Math.round((175 * (Math.pow(vCreatinineValue, -1.154)) * (Math.pow(vAgeOfPatient, -0.203)) * vRace * 0.742));
        } else {
            vMDRD = Math.round((186 * (Math.pow(vCreatinineValue, -1.154)) * (Math.pow(vAgeOfPatient, -0.203)) * vRace * vGender));
            vMDRD_Standartized = Math.round((175 * (Math.pow(vCreatinineValue, -1.154)) * (Math.pow(vAgeOfPatient, -0.203)) * vRace * vGender));
        }
        //        if (vMDRD > 0) {
        //            console.log('СКФ по формуле MDRD = ' + vMDRD + ' мл/мин/1,73м<sup>2</sup> (для наборов без стандартизации креатинина)');
        //            console.log('СКФ по формуле MDRD = ' + vMDRD_Standartized + ' мл/мин/1,73м<sup>2</sup> (для наборов со стандартизацией креатинина по референтному реактиву SRM 967)');
        //        }
        //         кокрофт
        if (vWeight > 0) {
            gfr_cg = ((140 - vAgeOfPatient) * vWeight / 72) / vCreatinineValue;
            if (vGender == 0) {
                gfr_cg = gfr_cg * 0.85;
            }
            //            if (gfr_cg > 0) {
            //                console.log('Клиренс креатинина по формуле Кокрофта-Голта = ' + Math.round(gfr_cg) + ' мл/мин');
            //            }
            if (vHeight > 0) {
                bsa = (vHeight * vWeight / 3600);
                bsa = Math.sqrt(bsa);
                gfr_cg_bsa = gfr_cg * 1.73 / bsa;
                //                console.log('Клиренс креатинина по формуле Кокрофта-Голта со стандартизацией на площадь поверхности тела = ' + Math.round(gfr_cg_bsa) + ' мл/мин/1,73м<sup>2</sup>');
            }
        }

    }
    vGFR = Math.min(vSKD_EPI, vMDRD, vMDRD_Standartized);
    vCC = Math.round(gfr_cg_bsa);
    console.log(vGFR, vCC);
    console.log(vCreatinineValue, vCreatinineUnits, vGender, vAgeOfPatient, vRace, vWeight, vHeight);

}

let vRace = 1,
    vCreatinineValue = '',
    vCreatinineUnits = '';

function countRF() {
    $('#divAllRF').hide();
    vAgeOfPatient = getCurrentAge(vBirthDateOfPatient);
    ($('input[name=rdoPregnancyOrChildbirth]:checked').val() != undefined) ? $('#chkPostpartum').prop('checked', true): '';

    vCreatinineValue = $('#inpCreatinineVal').val();
    vCreatinineUnits = ($('#slctCrUnitsGroup').val()).replace(/[,]+/g, '.');
    ($('#chkRaceB').is(':checked')) ? vRace = 2: '';
    console.log(vCreatinineValue, vCreatinineUnits, vGender, vAgeOfPatient, vRace, vWeight, vHeight);
    calculateGFRAndСС();

    (vGFR > 29 && vGFR < 60) ? $('#chkGlomerularFiltrationRate30_59').prop('checked', true): '';
    (vGFR  < 30) ? $('#chkGlomerularFiltrationRateLess30').prop('checked', true): '';

    ($('.chkSumTherRF_1').is(':checked')) ? $('#chkAcuteIschemicStrokeOrMiocardInfarction').prop('checked', true): '';
    ($('.chkSumTherRF_2').is(':checked')) ? $('#chkRheumaticDiseasesOrInfection').prop('checked', true): '';
    ($('.chkThromboemb_1').is(':checked')) ? $('#chkVascularAnamnesis, #chkWasSomeVeinThromb').prop('checked', true): '';
    ($('.chkThromboemb_2').is(':checked')) ? $('#chkWasPulmEmb').prop('checked', true): '';
    ($('.chkThromboemb_3').is(':checked')) ? $('#chkFamilyVeinThromb').prop('checked', true): '';
    ($('.chkProvocedVTE_1').is(':checked')) ? $('#chkWasProvocedVTE').prop('checked', true): '';
    ($('.chkTraum_1').is(':checked')) ? $('#chkFracturePpelvisFemurTibiaLess1Month').prop('checked', true): '';
    ($('.chkHighRiskThrombophilia_1').is(':checked')) ? $('#chkIsKnownHighRiskThrombophilia').prop('checked', true): '';
    ($('.chkNeoplasm_1').is(':checked')) ? $('#chkIsActiveNeoplasmOrTherapyOfNeoplasm').prop('checked', true): '';
    ($('.chkStroke_1').is(':checked')) ? $('#chkStroke').prop('checked', true): '';
    ($('#chkIsTraum, #chkLargeOperIn30Days').is(':checked')) ? $('#chkTraumOrOperIn30Days').prop('checked', true): '';
    ($('#chkIsPulmonInsuff').is(':checked') || $('#chkIsHeartInsuff').is(':checked')) ? $('#chkPulmonOrHeartInsuff').prop('checked', true): '';
    ($('.chkSevereRenalInsuff_1').is(':checked')) ? $('#chkSevereRenalInsuff').prop('checked', true): '';
    //    ($('.chkSevereRenalInsuff_2').is(':checked')|| vCreatinineValue > 200 ) ? $('#chkSevereRenalInsuff_3').prop('checked', true): '';
    ($('#chkSevereRenalInsuff, #chkIsLiverFailure').is(':checked')) ? $('#chkSevereRenalOrLiverFailure').prop('checked', true): $('#chkSevereRenalOrLiverFailure').prop('checked', false);


    ($('.chkBurns_1').is(':checked')) ? $('#chkBurnsLess20Percent').prop('checked', true): '';
    ($('.chkBurns_2').is(':checked')) ? $('#chkBurnsMore20Percent').prop('checked', true): '';
    ($('.chkObstComorbidities').is(':checked')) ? $('#chkIsObstComorbidityRF').prop('checked', true): '';
    ($('.chkLabourRuRF_1').is(':checked')) ? $('#chkSeverePreeclampsiaOrStillbirth').prop('checked', true): '';
    ($('.chkSumAtrFibrRF_1').is(':checked')) ? $('#chkVascularAnamnesis').prop('checked', true): '';
    ($('.chkThrombocytopenia_1').is(':checked')) ? $('#chkThrombocytopenia').prop('checked', true): '';

    ($('#chkIsHemorragicSyndrome, #chkPriorMajorBleeding').is(':checked')) ? $('#chkBleedingOrHemorragicSyndrome').prop('checked', true): '';

    ($('#chkIsAcuteInflammatoryDiseaseOrInfection').is(':checked') && $('#chkIsRestrictedMobility').is(':checked')) ? $('#chkAcuteInflammatoryDiseaseOrInfectionWithBedRest').prop('checked', true): '';

    ($('.chkSpinalCordInjure_1, #chkPlegia').is(':checked')) ? $('#chkSpinalCordDamageWithPlegia').prop('checked', true): '';

    ($('.chkStroke_1').is(':checked') && $('#chkPlegia').is(':checked')) ? $('#chkStrokeWithPlegia').prop('checked', true): '';

    ($('#chkArthritis').is(':checked') && $('#chkIsRestrictedMobility').is(':checked')) ? $('#chkArthritisWithRestrictedMobility').prop('checked', true): '';
    ($('#chkIsRestrictedMobility, #chkDehydration').is(':checked')) ? $('#chkIsRestrictedMobilityOrDehydration').prop('checked', true): '';
    ($('.chkСoagulopathy_1').is(':checked')) ? $('#chkСoagulopathyWithoutThrombocytopenia').prop('checked', true): '';

    ($('.divTraumOrthOper select').prop('selectedIndex') == 2) ? $('#chkArthroscopicSurgery').prop('checked', true): '';
    ($('.divTraumOrthOper select').prop('selectedIndex') == 5) ? $('#chkShinFractureSurgery').prop('checked', true): '';
    ($('.divTraumOrthOper select').prop('selectedIndex') == 6) ? $('#chkArtroplasty').prop('checked', true): '';
    ($('.divTraumOrthOper select').prop('selectedIndex') == 7) ? $('#chkHipFractureSurgery').prop('checked', true): '';

    ($('.divGenSurgOper select').prop('selectedIndex') == 4) ? $('#chkLiverResection').prop('checked', true): '';
    ($('.divGenSurgOper select').prop('selectedIndex') == 5) ? $('#chkPancreatoDuodResection').prop('checked', true): '';
    ($('.divGenSurgOper select').prop('selectedIndex') == 11) ? $('#chkPulmonectomy').prop('checked', true): '';
    ($('.divGenSurgOper select').prop('selectedIndex') == 14) ? $('#chklaparoscopicIntervention').prop('checked', true): '';

    ($('.divCardiovascOper select').prop('selectedIndex') == 4 || $('.divCardiovascOper select').prop('selectedIndex') == 5) ? $('#chkHeartSurgery').prop('checked', true): '';

    ($('.divNeurosurgOper select').prop('selectedIndex') == 0) ?
    $('#chkBrainOrSpinalCordSurg').prop('checked', true): '';

    ($('.divObsGynOper select').prop('selectedIndex') == 1) ?
    $('#chkElectiveCSection').prop('checked', true): '';
    ($('.divObsGynOper select').prop('selectedIndex') == 2) ?
    $('#chkCSectionInLabour').prop('checked', true): '';
    console.log($('#chkLiverResection').is(':checked'));
    console.log($('.divGenSurgOper select').prop('selectedIndex'));
    console.log($('#chkPancreatoDuodResection').is(':checked'));

    console.log($('#chkPulmonectomy').is(':checked'));

    console.log($('#chkHeartSurger').is(':checked'));

    console.log($('#chkBrainOrSpinalCordSurg').is(':checked'));
    vAgeOfPatient = getCurrentAge(vBirthDateOfPatient);
    (vAgeOfPatient > 35) ?
    $('#chkAgeMore35').prop('checked', true): '';
    (vAgeOfPatient > 40) ?
    $('#chkAgeMore40').prop('checked', true): '';
    (vAgeOfPatient > 40 && vAgeOfPatient < 61) ?
    $('#chkAge_41_60').prop('checked', true): '';
    (vAgeOfPatient > 60 && vAgeOfPatient < 76) ?
    $('#chkAge_61_75').prop('checked', true): '';
    (vAgeOfPatient > 64 && vAgeOfPatient < 75) ?
    $('#chkAge_65_74').prop('checked', true): '';
    (vAgeOfPatient >= 40 && vAgeOfPatient < 85) ?
    $('#chkAge_40_84').prop('checked', true): '';
    (vAgeOfPatient > 65) ? $('#chkAgeMore65').prop('checked', true): '';
    (vAgeOfPatient > 70) ? $('#chkAgeMore70').prop('checked', true): '';
    (vAgeOfPatient >= 75) ? $('#chkAgeMore75').prop('checked', true): '';
    (vAgeOfPatient >= 85) ? $('#chkAgeMore85').prop('checked', true): '';

    function searchBMI(w, h) {
        return (Math.ceil(w / (Math.pow((h / 100), 2))));
    }
    let vBMI = searchBMI($('#weight').val(), $('#height').val());
    (vBMI > 25) ? $('#chkBMIMore25').prop('checked', true): '';
    (vBMI > 30) ? $('#chkBMIMore30').prop('checked', true): '';
    (vBMI > 30 && vBMI < 40) ? $('#chkBMI_30_39').prop('checked', true): '';
    (vBMI > 35) ? $('#chkBMIMore35').prop('checked', true): '';
    (vBMI > 40) ? $('#chkBMIMore40').prop('checked', true): '';

    let vGrades = [0];
    let vAllChoosedOperations = [];

    $.each($('#divChooseKindOfOper option:selected'), function (el) {
        vGrades.push($('#divChooseKindOfOper option:selected')[el].value);
        vAllChoosedOperations.push($('#divChooseKindOfOper option:selected')[el].innerText);
    })

    console.log(vGrades);
    console.log(vAllChoosedOperations);

    let vGradeOfOper = 0;
    let vGradesOfOper = vGrades.map(Number);


    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    let vMaxGradeOfChoosedOper = getMaxOfArray(vGradesOfOper);
    ($('input[name=rdoSmallOrLargeOper]:checked').val() !== undefined) ? vGradeOfOper = Number($('input[name=rdoSmallOrLargeOper]:checked').val()): vGradeOfOper = vMaxGradeOfChoosedOper;

    if ($('#chkIsOrNoSurg').is(':checked')) {
        (vGradeOfOper > 0) ? ($('#chkLargeSurgery').prop('checked', true)) : $('#chkSmallSurgery').prop('checked', true);
    }

    console.log(vGradeOfOper);
    console.log(vGradesOfOper.length);
    console.log($('#chkIsOrNoSurg').is(':checked'));
    //        console.log($('#chkSmallSurgery').is(':checked'));

    let i = [],
        vMyArr = [],
        vSetRusSurgRF = [],
        m = 0;
    ($('#divAllRF input:checkbox:checked')).each(function () {
        vMyArr = $(this).val().split('');
        vCounterPaduaScore += Number(vMyArr[1]);
        i.push(vMyArr[2]);
        i.push(vMyArr[3]);
        i.push(vMyArr[4]);
        m = Number(i.join(''));
        i = [];
        vCounterIMPROVE += Number(m);
        vCounterCHA2DS2_VASс += Number(vMyArr[5]);
        vCounterHAS_BLED += Number(vMyArr[6]);
        vSetRusSurgRF.push(vMyArr[7]);
        vCounterCapriniRF += Number(vMyArr[8]);
        vCounterMajorBleedingScoreRF += Number(vMyArr[9]);
        vCounterTraumBleedingRF += Number(vMyArr[10]);
        vSetRusTraumRF.push(vMyArr[11]);
        vCounterGreenTop37a += Number(vMyArr[12]);
        vCounterObstBleedingRF += Number(vMyArr[13]);
        vCounterObstRuRF += Number(vMyArr[14]);
    })

    vSetRusSurgRF = $.distinct(vSetRusSurgRF);
    vSetRusTraumRF = $.merge(vSetRusTraumRF, vSetRusSurgRF);
    vSetRusTraumRF = $.distinct(vSetRusTraumRF);

    function estimateSurgRiskGrade(age, time, kindSurg, risk) {
        let i = 0;
        // Базовые условия, которые назначают баллы каждому параметру:
        if (age >= 40 && age <= 60) i++;
        if (age > 60) i += 2;
        if (time == true) i++;
        if (kindSurg >= 1) i++;
        if (risk == true) i++;
        return i;
    }

    let vCounterSurgRF = 0;
    //        if (vSetRusSurgRF.indexOf('3') != -1){
    //            vCounterSurgRF = 3;
    //        } else {
    //            if (($('#chkIsOrNoSurg').is(':checked'))){
    //                vCounterSurgRF = estimateSurgRiskGrade(vAgeOfPatient, $('#chkTimeOfSurg').is(':checked'), vGradeOfOper, vSetRusSurgRF.includes('1'));
    //
    //            }
    //        }
    //        if (vSetRusSurgRF.indexOf('2') != -1 && vCounterSurgRF < 3){
    //            vCounterSurgRF = 2;
    //        }
    console.log(vSetRusSurgRF);
    if ($('#chkIsOrNoSurg').is(':checked')) {
        (vGradeOfOper == 3) ? vCounterRusSurgRF = 3: vCounterRusSurgRF = estimateSurgRiskGrade(vAgeOfPatient, $('#chkTimeOfSurg').is(':checked'), vGradeOfOper, vSetRusSurgRF.includes('1'));
    }
    (vSetRusSurgRF.indexOf('2') != -1 && vCounterRusSurgRF < 3) ? vCounterRusSurgRF = 2: '';
    (vSetRusSurgRF.indexOf('3') != -1) ? vCounterRusSurgRF = 3: '';

    if ($('#chkIsOrNoSurg').is(':checked')) {
        (vGradeOfOper == 3) ? vCounterCapriniRF += 5: (vGradeOfOper == 1 || vGradeOfOper == 2) ? vCounterCapriniRF += 2 : vCounterCapriniRF += 1;
    }

    if ($('#chkIsOrNoSurg').is(':checked')) {
        (vGradeOfOper == 3) ? vCounterRusTraumRF = 3: vCounterRusTraumRF = estimateSurgRiskGrade(vAgeOfPatient, $('#chkTimeOfSurg').is(':checked'), vGradeOfOper, vSetRusTraumRF.includes('1'));
    }
    (vSetRusTraumRF.indexOf('2') != -1 && vCounterRusTraumRF < 3) ? vCounterRusTraumRF = 2: '';
    (vSetRusTraumRF.indexOf('3') != -1) ? vCounterRusTraumRF = 3: '';



    (vCounterMajorBleedingScoreRF > 0) ? vCounterMajorBleedingScoreRF = 1: '';
    (vCounterTraumBleedingRF > 0) ? vCounterTraumBleedingRF = 1: '';

    console.log($('#divAllRF input:checked'));
    console.log(vAgeOfPatient);
    console.log($('#chkTimeOfSurg').is(':checked'));
    console.log(vSetRusSurgRF.includes('1'));
    console.log(vGradeOfOper, vGradeOfOper == 0);
    console.log(vSetRusSurgRF);
    console.log(vCounterRusSurgRF);
    console.log(vCounterCapriniRF);
    console.log(vCounterRusTraumRF);

    let vIsBedRestBMI = $('#divAllRF input[id*="BMIMore"]:checked ').last();
    let vIsBedRestAge = $('#divAllRF input[id*="AgeMore"]:checked ').last();
    $('.chk2_LvlRF, .chk3_LvlRF input:checked').prop('checked', false);
    console.log($('#divAllRF input:checked'));

    //    $('#divAllRF input[id*="chkBMI"]:checked, #divAllRF input[id*="chkAge"]:checked ').prop('checked', false);
    vIsBedRestBMI.prop('checked', true);
    vIsBedRestAge.prop('checked', true);

    //    let b = $('#divAllRF input:checked').parent();
    function getStringOfRF(el) {
        let a = 0,
            b = '';
        $(el).each(function () {
            (a > 0) ? b += ',' + $(this).text(): b += $(this).text();
            a += 1;
        });
        return b;
    }
    vGeneralListOfRF = getStringOfRF($('#divAllRF input:checked').parent());
    console.log(vGeneralListOfRF);

    vGeneralListOfOper = getStringOfRF($('#divChooseKindOfOper option:selected'));
    console.log(vGeneralListOfOper);



    console.log('Padua: ' + vCounterPaduaScore, ' IMPROVE: ' + vCounterIMPROVE, ' CHA2DS2-VASс: ' + vCounterCHA2DS2_VASс, ' HAS-BLED: ' + vCounterHAS_BLED, ' Российская шкала риска ВТЭО: ' + vCounterRusSurgRF, ' Caprini: ' + vCounterCapriniRF, ' Major Bleeding Score: ' + vCounterMajorBleedingScoreRF, ' Шкала риска кровотечений при больших травматологических вмешательствах: ' + vCounterTraumBleedingRF, ' Шкала риска ВТЭО в травматологии: ' + vCounterRusTraumRF, ' vCounterGreenTopGuideline37a: ' + vCounterGreenTop37a, ' Contraindications to LMWH use: ' + vCounterObstBleedingRF, ' vCounterGreenTopGuideline37aRus: ' + vCounterObstRuRF);


    console.log(countStratRF(vCounterPaduaScore, 'Padua'));
    console.log(countStratRF(vCounterIMPROVE, 'IMPROVE'));
    console.log(countStratRF(vCounterCHA2DS2_VASс, 'CHA2DS2_VASсOrRusSurgOrTraumRF'));
    console.log(countStratRF(vCounterHAS_BLED, 'HAS_BLED'));
    console.log('Российская шкала ВТЭО ' + countStratRF(vCounterRusSurgRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF'));
    console.log(countStratRF(vCounterCapriniRF, 'Caprini'));
    console.log(countStratRF(vCounterMajorBleedingScoreRF, 'SurgOrTraumBleedingRF'));
    console.log(countStratRF(vCounterRusTraumRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF'));
    console.log(countStratRF(vCounterTraumBleedingRF, 'SurgOrTraumBleedingRF'));
    console.log(countStratRF(vCounterGreenTop37a, 'GreenTop37aRus'));
    console.log(countStratRF(vCounterObstRuRF, 'GreenTop37aRus'));

    console.log(vGFR, vCC);

}


//    $('#btnThree').on('click', function (){
//        $('#demoContainer').show();
//
function bindBalls(counter) {
    let vBalls;
    if (counter == 1) {
        vBalls = ' балл';
    }
    if (counter > 1 && counter < 5) {
        vBalls = ' балла';
    }
    if (counter > 4) {
        vBalls = ' баллов';
    }
    return counter + vBalls;
}
//        let vContTextTher = '';
//        let vContTextTherBleeding = '';
//        let vContTextSurg = '';
//        let vContTextCapriniSurg = '';
//        let vContTextSurgNotOper = '';
//        let vContTextSurgBleeding = '';
//        let vContTextObst = '';
//        let vContTextAtrFibr = '';
//        let vContTextErythremia = '';
//        let vContTextAtrFibrBleeding = '';
//
//        if (vCounterPaduaScore != 0){
//            vContTextTher = '\nнехирургические риск-факторы (Padua Prediction Score): ' + vListTherRFArr + '. Риск ВТЭО: ' + vCounterPaduaScore + ' ' + bindBalls(vCounterPaduaScore) + ' - ' + vStratTherRF + '.';
//        }
//        let vSmallOrLargeSurg;
//        if (vGradeOfOper != 0 && $("input[name='rdoIsOrNoSurg']:checked").val() == 1){
//            vSmallOrLargeSurg = '. Операция: большая. ';
//            $('#chkLargeSurgery').prop('checked', true);
//        }
//        if ($("input[name='rdoIsOrNoSurg']:checked").val() == 1){
//            vContTextSurg = '\nхирургические риск-факторы: ' + vListSurgRFArr + vSmallOrLargeSurg + 'Риск ВТЭО: ' + vCounterSurgRF + ' ' + bindBalls(vCounterSurgRF) + ' - ' + vStratSurgRF + '.';
//        }
//        if (vCounterSurgRFNotOperRF != 0){
//            vContTextSurgNotOper = '\nхирургические неоперационные риск-факторы: ' + vListSurgNotOperRFArr + '. Риск ВТЭО: ' + vCounterSurgRFNotOperRF + ' ' + bindBalls(vCounterSurgRFNotOperRF) + ' - ' + vStratSurgNotOperRF + '.';
//        }
//        if (vCounterCapriniRF != 0){
//            vContTextCapriniSurg = '\nхирургические риск-факторы (шкала Caprini): ' + vListCapriniRFArr + '. Риск ВТЭО: ' + vCounterCapriniRF + ' ' + bindBalls(vCounterCapriniRF) + ' - ' + vStratCapriniRF + '.';
//        }
//        if (vCounterIMPROVE != 0){
//            vContTextTherBleeding = '\nриск-факторы развития кровотечения при профилактике ВТЭО у нехирургических пациентов: ' + vListNonsurgBleedingRFArr + '. Риск кровотечения: ' + vCounterIMPROVE + ' ' + bindBalls(vCounterIMPROVE) + ' - ' + vStratNonsurgBleedingRF + '.';
//        }
//        if (vCounterMajorBleedingScoreRF != 0){
//            vContTextSurgBleeding = '\nриск-факторы развития кровотечения при профилактике ВТЭО у хирургических пациентов: ' + vListSurgBleedingRFArr + '. Риск кровотечения: ' + vCounterMajorBleedingScoreRF + ' ' + bindBalls(vCounterMajorBleedingScoreRF) + ' - ' + vStratSurgBleedingRF + '.';
//        }
//        if (vCounterGreenTop37a != 0 && $("input[name='rdoObstOrGynProfile']:checked").val() == 0){
//            vContTextObst = '\nакушерские риск-факторы: ' + vListObstRFArr + '. Риск ВТЭО: ' + vCounterGreenTop37a + ' ' + bindBalls(vCounterGreenTop37a) + '.';
//        }
//        if (vCounterCHA2DS2_VASс != 0){
//            vContTextAtrFibr = '\nриск-факторы развития тромботического ишемического инсульта (шкала CHA2DS2-VASс ): ' + vListAtrFibrRFArr + '. Риск инсульта: ' + vCounterCHA2DS2_VASс + ' ' + bindBalls(vCounterCHA2DS2_VASс) + '.';
//        }
//        if (vCounterHAS_BLED != 0){
//            vContTextAtrFibrBleeding = '\nриск-факторы развития кровотечения при профилактике инфаркта мозга (шкала HAS-BLED): ' + vListAtrFibrBleedingRFArr + '. Риск кровотечения: ' + vCounterHAS_BLED + ' ' + bindBalls(vCounterHAS_BLED) + '. - ' + vStratAtrFibrBleedingRF + '.';
//        }
//        if ($('#chkErythremiaRF').is(':checked')){
//            vContTextErythremia = '\nэритремия.';
//        }
//        $('#demoContainer').text('У пациента имеются:' + vContTextTher + vContTextTherBleeding + vContTextSurg + vContTextCapriniSurg + vContTextSurgNotOper + vContTextSurgBleeding + vContTextObst + vContTextAtrFibr + vContTextAtrFibrBleeding + vContTextErythremia);
//        if (vCounterPaduaScore == 0 && vCounterSurgRF == 0 && vCounterSurgRFNotOperRF == 0 && vCounterGreenTop37a == 0 && vCounterCHA2DS2_VASс == 0){
//            $('#demoContainer').text('Риск ВТЭО низкий.');
//        }
//        $('label, p, select').hide();
//    })
$('#btnTwo').on('click', function () {
    $('#pTitleOfConclusion').show();

    (vGeneralListOfRF != '') ? $('<p>', {
        text: (vGeneralListOfRF + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_1')): '';

    (vGeneralListOfOper != '') ? $('<p>', {
        text: ('Операции:' + vGeneralListOfOper + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_1')): '';

    ($('#pTextCollector_1').children().length > 0) ? $('#pTextCollector_1').show(): '';

    (vCounterPaduaScore > 3 && valuesMedPfofile.is('[value = 1]')) ? $('<p>', {
        text: ('Padua: ' + bindBalls(vCounterPaduaScore) + '. Риск ' + countStratRF(vCounterPaduaScore, 'Padua') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterCHA2DS2_VASс >= 1 && valuesMedPfofile.is('[value = 2]')) ? $('<p>', {
        text: ('CHA2DS2-VASс: ' + bindBalls(vCounterCHA2DS2_VASс) + '. Риск ' + countStratRF(vCounterCHA2DS2_VASс, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterCapriniRF >= 2 && vAllSurgProfiles == true) ? $('<p>', {
        text: ('Caprini: ' + bindBalls(vCounterCapriniRF) + '. Риск ' + countStratRF(vCounterCapriniRF, 'Caprini') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterRusSurgRF >= 1 && vAllSurgProfiles == true) ? $('<p>', {
        text: ('Российская риска ВТЭО в хирургии: ' + bindBalls(vCounterRusSurgRF) + '. Риск ' + countStratRF(vCounterRusSurgRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterRusTraumRF > 2 && valuesMedPfofile.is('[value = 4]')) ? $('<p>', {
        text: ('Российская риска ВТЭО в травматологии: ' + bindBalls(vCounterRusTraumRF) + '. Риск ' + countStratRF(vCounterRusTraumRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterGreenTop37a < 3 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('GreenTopGuideline37a: ' + bindBalls(vCounterGreenTop37a) + '. Риск ' + countStratRF(vCounterGreenTop37a, 'GreenTop37aRus') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    (vCounterObstRuRF < 3 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('Российская риска ВТЭО в акушерстве-гинекологии: ' + bindBalls(vCounterObstRuRF) + '. Риск ' + countStratRF(vCounterObstRuRF, 'GreenTop37aRus') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    ($('#pTextCollector_2').children().length > 0) ? $('#pTextCollector_2').show(): '';



    (vCounterIMPROVE > 7 && valuesMedPfofile.is('[value = 1]')) ? $('<p>', {
        text: ('IMPROVE: ' + bindBalls(vCounterIMPROVE) + '. Риск ' + countStratRF(vCounterIMPROVE, 'IMPROVE') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';
    (vCounterHAS_BLED > 2 && valuesMedPfofile.is('[value = 2]')) ? $('<p>', {
        text: ('HAS-BLED: ' + bindBalls(vCounterHAS_BLED) + '. Риск ' + countStratRF(vCounterHAS_BLED, 'HAS_BLED') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    (vCounterMajorBleedingScoreRF > 0 && vAllSurgProfiles == true) ? $('<p>', {
        text: ('Major Bleeding Score: ' + bindBalls(vCounterMajorBleedingScoreRF) + '. Риск ' + countStratRF(vCounterMajorBleedingScoreRF, 'SurgOrTraumBleedingRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    (vCounterTraumBleedingRF > 0 && valuesMedPfofile.is('[value = 4]')) ? $('<p>', {
        text: ('... при больших травматологических вмешательствах: ' + bindBalls(vCounterTraumBleedingRF) + '. Риск ' + countStratRF(vCounterTraumBleedingRF, 'SurgOrTraumBleedingRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    (vCounterObstBleedingRF > 0 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('... в акушерстве-гинекологии: ' + bindBalls(vCounterObstBleedingRF) + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    ($('#pTextCollector_3').children().length > 0 && $('#chkCalculateRiskOfBleeding').is(':checked')) ? $('#pTextCollector_3').show(): '';
    $('.pTextContainer:contains("высокий")').css({
        'color': 'red'
    });
    $('.pTextContainer:contains("умеренный")').css({
        'color': 'orange'
    });
})
//$('#btnThree').on('click', function (){
//
//    calculateGFRAndСС();
//    console.log(vCreatinineValue, vGender, vWeight, vHeight, vRace, vCreatinineUnits);
//    console.log(vCC, vGFR);
//
//});

function createAlgorithmOfThromboembolismProphylaxis() {
    let vHighRiskOfBleeding = 0;
    (vCounterIMPROVE > 7 || vCounterHAS_BLED > 2 || vCounterMajorBleedingScoreRF > 0 || vCounterTraumBleedingRF > 0 || vCounterObstBleedingRF > 0) ? vHighRiskOfBleeding = 1: '';


    (vAgeOfPatient < 18) ? $('#chkClexane, #chkFraxiparine, #chkAspirin, #chkPradaxa, #chkXarelto, #chkEliquis').prop('visible', false): '';
    (vAgeOfPatient > 60) ? $('#chkVarfarin').prop('visible', false): '';

    ($('#chkSevereHepaticFailure, #chkBreastFeeding').is(':checked')) ? $('#chkVarfarinum, #chkHeparinum, #chkAspirin, #chkPradaxa, #chkXarelto, #chkEliquis').prop('visible', false): '';

    ($('#chkHeartInsuff3_4').is(':checked')) ? $('#chkAspirin').hide(): '';

    ($('#chkUncontrolledSystemicHypertension').is(':checked')) ? $('#chkHeparinum').prop('visible', false): '';

    ($('#chkAcuteInfection').is(':checked')) ? console.log('септический эндокардит?'): '';
//    Для аспирина
    ($('#chkMethotrexateTaking').is(':checked') || $('#chkchkAsthma').is(':checked')) ? $('#chkAspirin').prop('visible', false): '';
    //    Для гепарина
    ($('#chkIsOrNoSurg').is(':checked')) ? console.log('операция на глазах?'): '';
    ($('#chkIsDiabetes').is(':checked')) ? console.log('диабетическая ретинопатия?'): '';
//Ксарелто
($('№chkCongenitalLactaseDeficiency').is(':checked')) ? $('#chkchkXarelto').prop('visible', false): '';
    //   ...

    (vCC < 30)? $('#chkArixtra, #chkAspirin, #chkPradaxa, #chkVarfarinum').prop('visible', false): '';
    (vCC < 15 || $('#chkChronicDialysis').is(':checked'))? $('#chkXarelto, #chkEliquis').prop('visible', false): '';


(vWeekOfPregnancy > 0) ? $('#chkHeparinum, #chkXarelto, #chkEliquis').hide():'';

(vWeekOfPregnancy > 0 || $('#chkArtificialHeartValve').is(':checked')) ? $('#chkClexane').hide():'';

(vWeekOfPregnancy < 13 || vWeekOfPregnancy > 28) ? $('#chkAspirin').hide():'';

(vWeekOfPregnancy < 13 || vWeekOfPregnancy > 36) ? $('#chkVarfarinum').hide():'';



    ($('.divGenSurgOper select').prop('selectedIndex') == 4 || $('.divTraumOrthOper select').prop('selectedIndex') == 8 || $('.divNeurosurgOper select').prop('selectedIndex') == 0 || $('.divUrolOper').prop('selectedIndex') == 0 || $('.divUrolOper').prop('selectedIndex') == 1) ? $('#chkHeparinum').prop('visible', false): '';

};
