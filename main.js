$('#divAllRF div').hide();
$('.divMiddleLvlRF').hide();
$('.divFemaleLvl').show();
let vBirthDateOfPatient = '',
    vGeneralListOfRF = '',
    vGeneralListOfOper = '';
$('#chkMale').on('click', function () {
    ($(this).is(':checked')) ? $('#slctMedicalProfileOfPatient [value="10"]').hide(): $('#slctMedicalProfileOfPatient [value="10"]').show();
});;
$.extend({
    distinct: function (anArray) {
        let result = [];
        $.each(anArray, function (i, v) {
            if ($.inArray(v, result) == -1) result.push(v);
        });
        return result;
    }
});;
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
});;
$('input[name=rdoObstOrGynProfile]:radio').on('click', function () {
    if ($(this).val() == 0) {
        $('#divPregnancyOrChildbirth').show();
    } else {
        $('#divPregnancyOrChildbirth').hide();
        $('input[name="rdoPregnancyOrChildbirth"]:checked').prop('checked', false);
    }
    $('.lblIsOrNoSurg').show();
});;
$('#chkIsOrNoSurg').on('click', function () {
    if ($(this).is(':checked')) {
        $('#divChooseKindOfOper, #divCreateKindOfOper').show();
        (valuesMedPfofile.is('[value = 3]')) ? $('.btnGenSurgOper').show(): '';
        (valuesMedPfofile.is('[value = 4]')) ? $('.btnTraumOrthOper').show(): '';
        (valuesMedPfofile.is('[value = 5]')) ? $('.btnNeurosurgOper').show(): '';
        (valuesMedPfofile.is('[value = 6]')) ? $('.btnCardiovascOper').show(): '';
        (valuesMedPfofile.is('[value = 7]')) ? $('.btnUrolOper').show(): '';
        (valuesMedPfofile.is('[value = 8]')) ? $('.btnCombustOper').show(): '';
        (valuesMedPfofile.is('[value = 9]')) ? $('#pChooseOper').hide(): '';
        (valuesMedPfofile.is('[value = 10]')) ?
        $('.btnObsGynOper').show(): '';
    } else {
        $('#divChooseKindOfOper, #divCreateKindOfOper, #divSmallOrLargeOper').hide();
        $('.btnAccordChooseOper').prop('value', 1).next().hide();
        $('#divChooseKindOfOper option:selected').prop('selected', false);
        $('#chkCreateKindOfOper').prop('checked', false);
        $('#divSmallOrLargeOper input:checked').prop('checked', false);
    }
});;
$('.btnAccordChooseOper').on('click', function (el) {
    el = $(this);
    if (el.val() == 0) {
        el.next().hide();
        el.val(1);
    } else {
        el.val(0);
        el.next().show();
    }
});
$('#chkCreateKindOfOper').on('click', function () {
    ($(this).is(':checked')) ? ($('#divSmallOrLargeOper').show(), $('#divChooseKindOfOper').hide(), $('#divChooseKindOfOper option:selected').prop('selected', false),
        $('.btnObsGynOper').show()) : ($('#divSmallOrLargeOper, .lblTimeOfSurg').hide(),
        $('.btnObsGynOper').show(),
        $('#divSmallOrLargeOper input:checked').prop('checked', false), $('#divChooseKindOfOper').show());
});
$('input[name=rdoSmallOrLargeOper]:radio').on('click', function () {
    ($(this).val() == 1) ? ($('.lblTimeOfSurg').hide(), $('#chkTimeOfSurg').prop('checked', false)) : $('.lblTimeOfSurg').show();
});
$('#dateOfBirth').on('input', function () {
    vBirthDateOfPatient = new Date($('#dateOfBirth').prop('value'));
    vAgeOfPatient = getCurrentAge(vBirthDateOfPatient);
});
let vAgeOfPatient = 0;
function getCurrentAge(date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}
function showBtnGoToRF() {
    if (getCurrentAge(vBirthDateOfPatient) != 0 && ($('#weight').val().length > 0) && ($('#height').val().length > 0) && (valuesMedPfofile.length > 0)) {
        $('#btnOne').show();
        //        $('#btnOne').bind('click',makeCaution);
    } else {
        $('#btnOne').hide();
    }
}
function makeCaution() {
    let a = '';
    (vAgeOfPatient < 16) ? a += ('Пациент моложе 16 лет - шкалы могут подсчитывать риск ВТЭО некорректно (хотя явных указаний на это нет).'): (vAgeOfPatient > 100) ? a += ('Возраст пациента действительно ' + vAgeOfPatient + ' лет?') : '';
    ($('#weight').prop('value') < 50 || $('#weight').prop('value') > 120) ? a += ('\nВес пациента действительно ' + ($('#weight').prop('value')) + ' кг?'): '';
    ($('#height').prop('value') < 150 || $('#height').prop('value') > 190) ? a += ('\nРост пациента действительно ' + ($('#height').prop('value')) + ' кг?'): '';
    return a;
}
$('#btnOne').on('click', function () {
    (makeCaution() != '') ? (alert(makeCaution()), $(this).unbind('click'), $('#btnOne').bind('click', goToRF)) :
    $('#btnOne').bind('click', goToRF());
});
$('#slctMedicalProfileOfPatient option').bind('click', showBtnGoToRF);
$('#age, #weight, #height, #dateOfBirth').bind('input', showBtnGoToRF);
$('#slctMedicalProfileOfPatient option').click(function () {
    ($('#slctMedicalProfileOfPatient option:selected').is('[value = 10]') && $('input[name=rdoObstOrGynProfile]:checked').val() == undefined) ? $('#btnOne').prop('disabled', true): $('#btnOne').prop('disabled', false);
});
$('input[name=rdoObstOrGynProfile], input[name=rdoPregnancyOrChildbirth]').click(function () {
    ($('input[name=rdoObstOrGynProfile]:checked').val() == 1) ? $('#btnOne').prop('disabled', false): ($('input[name=rdoObstOrGynProfile]:checked').val() == 0 && $('input[name=rdoPregnancyOrChildbirth]:checked').val() != undefined) ? $('#btnOne').prop('disabled', false) : $('#btnOne').prop('disabled', true);
});
$('.divSingleLvlRF').on('click', function (el) {
    el = $(this).closest('.divMiddleLvlRF').prev().find('input:checkbox');
    ($(this).closest('.divMiddleLvlRF').find('input:checkbox').is(':checked')) ? el.prop('checked', true): el.prop('checked', false);
    //    console.log(event.type, event.target.id, event.relatedTarget + ' 1 event');
    //    console.log(el.is(':checked'))
});
$('.divMiddleLvlRF').on('click', function (event, el) {
    el = $(this).prev();
    (el.find('input:checkbox').is(':checked')) ? $(this).prev().hide(): ($(this).prev().show(), $(this).hide(), el.find('button').html('&gt;'));
    console.log(event.type, event.target.id, event.relatedTarget + ' 2 event');
});
$('.divSingleLvlRF label').next().on('click', function (ev) {
    $(this).next().show()
    $(this).hide()
    ev.stopPropagation();
});
$('.divSingleLvlRF label').next().next().on('click', function (ev) {
    $(this).prev().show()
    $(this).hide()
    ev.stopPropagation();
});
$('.btnTogglerRF').on('click', function () {
    //    console.log($(this).html());
    ($(this).html() == ('&gt;')) ? ($(this).closest('.divTogglerRF').next().show(), $(this).html('&lt;')) : ($(this).parents('.divTogglerRF').next().hide(), $(this).html('&gt;'));
});;
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
});;
$('.chkBedRestMore3Days_1').on('click', function (el) {
    ($(this).is(':checked')) ? $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', true): ($('.chkBedRestMore3Days_1').is(':checked')) ? $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', true) : ($('#chkBedRestMore3Days').attr('data-hasMarked') == '0') ? $('#chkIsBedRestMore3Days, #chkBedRestMore3Days').prop('checked', false) : '';
});
$('#chkBedRestMore3Days').on('click', function () {
    let a = $(this).attr('data-hasMarked');
    console.log(a);
    ($(this).is(':checked')) ? $(this).attr('data-hasMarked', '1'): $(this).attr('data-hasMarked', '0');
    ($('#chkIsBedRestMore3Days').is(':checked')) ? (alert('Отмечены ранее патологические состояния и риск-факторы, которые требуют соблюдения больным строгого постального режима'), $(this).prop('checked', true)) : '';
});
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
    $('#btnOne').unbind('click', goToRF);
    $('#btnOne').bind('click', countRF).html('Перейти к подсчету риск-факторов ВТЭО');
}
$('.chkGlomerularFiltrationRate_1').on('click', function () {
    $('.chkGlomerularFiltrationRate_1').not(this).prop('checked', false);
});
$('.chkDiabetes_1').on('click', function () {
    $('.chkDiabetes_1').not(this).prop('checked', false);
});
$('.chkPreeclampsia_1').on('click', function () {
    $('.chkPreeclampsia_1').not(this).prop('checked', false);
});
$('.chkBurnsSuperficial_1').on('click', function () {
    $('.chkBurnsSuperficial_1').not(this).prop('checked', false);
});
$('.chkBurnsDeep_1').on('click', function () {
    $('.chkBurnsDeep_1').not(this).prop('checked', false);
});
$('.chkThermalInhalationInjury_1').on('click', function () {
    $('.chkThermalInhalationInjury_1').not(this).prop('checked', false);
});
$('.chkSpinalCordInjure_1').on('click', function () {
    $('.chkSpinalCordInjure_1').not(this).prop('checked', false);
});
$('.chkHeartInsuff_1').on('click', function () {
    $('.chkHeartInsuff_1').not(this).prop('checked', false);
});
$('.chkThromboemb_2').on('click', function () {
    $('.chkThromboemb_2').not(this).prop('checked', false);
});
$('.divSystemicHypertension input').on('click', function () {
    $('.divSystemicHypertension input').not(this).prop('checked', false);
});
$('.divRheumaticDiseases input').on('click', function () {
    $('.divRheumaticDiseases input').not(this).prop('checked', false);
});
$('.chkSpinalCordInjure_1, .chkStroke_1').on('click', function () {
    $('.chkSpinalCordInjure_1').not(this).prop('checked', false);
    ($(this).is(':checked'))? alert('ВАЖНО! Если у пациента имеются грубые парезы или плегия, укажите это в подразделе "ограниченная повижность"'):'';
});

$('.chkBedRest_1').on('click', function () {
    $('.chkBedRest_1').not(this).prop('checked', false);
});


$('#chkBedRestNoSurgPatient').on('click', function () {
    if ($(this).is(':checked')) {
        $('#chkBedRestMore3Days').attr('data-hasMarked', '0');
        ($('#chkIsBedRestMore3Days').is(':checked')) ? (alert('Отмечены ранее патологические состояния и риск-факторы, которые требуют соблюдения больным строгого постального режима'), $('#chkBedRestMore3Days').prop('checked', true), $('#chkBedRestNoSurgPatient').prop('checked', false) ) : $('#chkBedRestMore3Days').prop('checked', false);

    } else {
        $('#chkBedRestMore3Days').attr('data-hasMarked', '1');
    }
});

$('.chkBedRestMore3Days_1').on('click', function () {
    ($(this).is(':checked')) ? $('#chkBedRestNoSurgPatient').prop('checked', false): '';
});
$('#chkSepsis').on('click', function () {
    ($(this).is(':checked')) ? $('#chkAcuteInflammatoryDisease').prop('checked', true): '';
});
//$('#chkHeartInsuff3_4').on('click', function () {
//    ($(this).is(':checked') && $('#lblSomeHeartInsuff').is(':visible')) ? $('#chkSomeHeartInsuff').prop('checked', true): '';
//});
//$('#chkHeartInsuffLess1Month').on('click', () => ($(this).is(':checked') && $('#lblSomeHeartInsuff').is(':visible')) ? $('#chkSomeHeartInsuff').prop('checked', true) : '')
$('#chkCongestHeartFailOrSystLVDysfunctEFLess40Percent').on('click', function () {
    ($(this).is(':checked')) ? $('#chkSomeHeartInsuff').prop('checked', true): '';
});
$('#chkSomeTherapyOfNeoplasm').on('click', function () {
    ($(this).is(':checked')) ? $('#chkActiveNeoplasm').prop('checked', true).closest('.divSingleLvlRF').hide():
        ($('#chkActiveNeoplasm').attr('data-hasMarked') == '0') ? $('#chkActiveNeoplasm').prop('checked', false).closest('.divSingleLvlRF').show() : '';
});
$('#chkActiveNeoplasm').on('change', function () {
    ($(this).is(':checked')) ? $(this).attr('data-hasMarked', '1'): $(this).attr('data-hasMarked', '0');
});
//$('#chkAcuteRheumaticDiseases').on('click', function () {
//    ($(this).is(':checked')) ? $('#chkRheumaticDiseases').prop('checked', true).closest('.divSingleLvlRF').hide():
//        ($('#chkRheumaticDiseases').attr('data-hasMarked') == '0') ? $('#chkRheumaticDiseases').prop('checked', false).closest('.divSingleLvlRF').show() : '';
//});
$('#chkPlateletsLess150').on('click', function () {
    if ($(this).is(':checked')) {
        $(this).attr('data-hasMarked', '1');
    } else {
        $(this).attr('data-hasMarked', '0');
        $('#chkPlateletsLess50, #chkPlateletsLess75').prop('checked', false);
    }
});
$('#chkPlateletsLess75').on('click', function () {
    if ($(this).is(':checked')) {
        $('#chkPlateletsLess150').prop('checked', true).closest('.divSingleLvlRF').hide();
        $(this).attr('data-hasMarked', '1');
    } else {
        $('#chkPlateletsLess50').prop('checked', false).closest('.divSingleLvlRF').show();
        $('#chkPlateletsLess150').attr('data-hasMarked') == '0' ? $('#chkPlateletsLess150').prop('checked', false).closest('.divSingleLvlRF').show() : $('#chkPlateletsLess150').closest('.divSingleLvlRF').show();
        $(this).attr('data-hasMarked', '0');
    }
});
$('#chkPlateletsLess50').on('click', function () {
    ($(this).is(':checked')) ? $('#chkPlateletsLess150, #chkPlateletsLess75').prop('checked', true).closest('.divSingleLvlRF').hide():
        ($('#chkPlateletsLess150').attr('data-hasMarked') == '1' && $('#chkPlateletsLess75').attr('data-hasMarked') == '0') ? ($('#chkPlateletsLess150').prop('checked', true).closest('.divSingleLvlRF').show(), $('#chkPlateletsLess75').prop('checked', false).closest('.divSingleLvlRF').show()) : ($('#chkPlateletsLess75').attr('data-hasMarked') == '1') ?
        $('#chkPlateletsLess75, #chkPlateletsLess150').prop('checked', true).closest('.divSingleLvlRF').show() :
        ($('#chkPlateletsLess75, #chkPlateletsLess150').attr('data-hasMarked') == '0') ? $('#chkPlateletsLess75, #chkPlateletsLess150').prop('checked', false).closest('.divSingleLvlRF').show() : '';
});
//$('#chkSystemicHypertension').on('click', function () {
//    if ($(this).is(':checked')) {
//        $(this).attr('data-hasMarked', '1');
//    } else {
//        $(this).attr('data-hasMarked', '0');
//        $('#chkSystemicHypertension2Stage, #chkUncontrolledSystemicHypertension').prop('checked', false);
//    }
//});
//$('#chkSystemicHypertension2Stage').on('click', function () {
//    if ($(this).is(':checked')) {
//        $('#chkSystemicHypertension').prop('checked', true).closest('.divSingleLvlRF').hide();
//        $(this).attr('data-hasMarked', '1');
//
//    } else {        $('#chkUncontrolledSystemicHypertension').prop('checked', false).closest('.divSingleLvlRF').show();
//        $('#chkSystemicHypertension').attr('data-hasMarked') == '0' ? $('#chkSystemicHypertension').prop('checked', false).closest('.divSingleLvlRF').show() : $('#chkSystemicHypertension').closest('.divSingleLvlRF').show();
//        $(this).attr('data-hasMarked', '0');
//    }
//});
//$('#chkUncontrolledSystemicHypertension').on('click', function () {
//    ($(this).is(':checked')) ? $('#chkSystemicHypertension, #chkSystemicHypertension2Stage').prop('checked', true).closest('.divSingleLvlRF').hide():
//        ($('#chkSystemicHypertension').attr('data-hasMarked') == '1' && $('#chkSystemicHypertension2Stage').attr('data-hasMarked') == '0') ? ($('#chkSystemicHypertension').prop('checked', true).closest('.divSingleLvlRF').show(), $('#chkSystemicHypertension2Stage').prop('checked', false).closest('.divSingleLvlRF').show()) : ($('#chkSystemicHypertension2Stage').attr('data-hasMarked') == '1') ?
//        $('#chkSystemicHypertension2Stage, #chkSystemicHypertension').prop('checked', true).closest('.divSingleLvlRF').show() :
//        ($('#chkSystemicHypertension2Stage, #chkSystemicHypertension').attr('data-hasMarked') == '0') ? $('#chkSystemicHypertension2Stage, #chkSystemicHypertension').prop('checked', false).closest('.divSingleLvlRF').show() : '';
//});
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
    vCounterObstBleedingRF = 0;
//  Функция countStratRF стратифицирует риск ВТЭО:
function countStratRF(vCounterRF, x) {
let vStratRF = '';
    switch (x) {
        case 'Padua':
            (vCounterRF > 3) ? vStratRF = 'высокий': '';
            return vStratRF;
        case 'IMPROVE':
            (vCounterRF > 7) ? vStratRF = 'высокий': '';
            return vStratRF;
        case 'HAS_BLED':
            (vCounterRF > 2) ? vStratRF = 'высокий': '';
            return vStratRF;
            break;
        case 'CHA2DS2_VASсOrRusSurgOrTraumRF':
            (vCounterRF >= 1 && vCounterRF <= 2) ? vStratRF = 'умеренный' : vStratRF = 'высокий';
            return vStratRF;
        case 'Caprini':
            (vCounterRF >= 1 && vCounterRF <= 2) ? vStratRF = 'умеренный' : (vCounterRF >= 3 && vCounterRF <= 4) ? vStratRF = 'высокий' : vStratRF = 'очень высокий';
            return vStratRF;
        case 'SurgOrTraumBleedingRF':
            (vCounterRF >= 1) ? vStratRF = 'высокий': '';
            return vStratRF;
         case 'GreenTop37aRus':
            (vCounterRF > 2) ? vStratRF = 'высокий': vStratRF = 'умеренный';
            return vStratRF;
    }
}
function countRF() {
    $('#divAllRF').hide();
    ($('input[name=rdoPregnancyOrChildbirth]:checked').val() != undefined) ? $('#chkPostpartum').prop('checked', true): '';
    ($('.chkSumTherRF_1').is(':checked')) ? $('#chkAcuteIschemicStrokeOrMiocardInfarction').prop('checked', true): '';

    ($('.chkPreeclampsia_1').is(':checked')) ? $('#chkSomePreeclampsia').prop('checked', true): '';
    ($('#chkIsRheumaticDiseases, #chkAcuteInfection').is(':checked')) ? $('#chkRheumaticDiseasesOrInfection').prop('checked', true): '';
    ($('.chkThromboemb_1').is(':checked')) ? $('#chkWasSomeVeinThromb').prop('checked', true): '';
    ($('.chkThromboemb_4').is(':checked')) ? $('#chkWasSomeVeinThromb1').prop('checked', true): '';
    //    ($('#chkFamilyAnamnesisVTE').is(':checked')) ? $('#chkFamilyVeinThromb').prop('checked', true): '';
    ($('.chkProvocedVTE_1').is(':checked')) ? $('#chkWasProvocedVTE').prop('checked', true): '';
    ($('.chkTraum_1').is(':checked')) ? $('#chkFracturePpelvisFemurTibiaLess1Month').prop('checked', true): '';
    ($('.chkHighRiskThrombophilia_1').is(':checked')) ? $('#chkIsKnownHighRiskThrombophilia').prop('checked', true): '';
    ($('.chkNeoplasm_1').is(':checked')) ? $('#chkIsActiveNeoplasmOrTherapyOfNeoplasm').prop('checked', true): '';
    //    ($('.chkStroke_1').is(':checked')) ? $('#chkStroke').prop('checked', true): '';
    ($('.chkArterialDisease_1').is(':checked')) ? $('#chkArterialDisease').prop('checked', true): '';
    ($('#chkIsTraum, #chkLargeOperIn30Days').is(':checked')) ? $('#chkTraumOrOperIn30Days').prop('checked', true): '';
    ($('#chkIsPulmonInsuff, #chkIsHeartInsuff').is(':checked')) ? $('#chkPulmonOrHeartInsuff').prop('checked', true): '';
    ($('.chkSevereRenalInsuff_1').is(':checked')) ? $('#chkSevereRenalInsuff').prop('checked', true): '';
    ($('#chkSevereRenalInsuff, #chkIsLiverFailure').is(':checked')) ? $('#chkSevereRenalOrLiverFailure').prop('checked', true):'';
    ($('#chkIsSystemicHypertension').is(':checked')) ? $('#chkIsObstComorbidityRuRF').prop('checked', true):'';
    ($('.chkBurns_1').is(':checked')) ? $('#chkBurnsLess20Percent').prop('checked', true): '';
    ($('.chkBurns_2').is(':checked')) ? $('#chkBurnsMore20Percent').prop('checked', true): '';
    ($('.chkObstComorbidities').is(':checked')) ? $('#chkIsObstComorbidityRF,#chkIsObstComorbidityRuRF').prop('checked', true): '';

    ($('.chkLabourRuRF_1').is(':checked')) ? $('#chkSeverePreeclampsiaOrStillbirth').prop('checked', true): '';
    ($('.chkThromboemb_1, #chkIsStroke').is(':checked')) ? $('#chkVascularAnamnesis').prop('checked', true): '';
    ($('.chkThrombocytopenia_1').is(':checked')) ? $('#chkThrombocytopenia').prop('checked', true): '';
    ($('#chkIsAnemia, #chkIsHemorragicSyndrome, #chkPriorMajorBleeding').is(':checked')) ? $('#chkBleedingOrHemorragicSyndrome').prop('checked', true): '';
    ($('.chkRenalInsuff_1').is(':checked')) ? $('#chkRenalInsuff').prop('checked', true): '';
    ($('.chkLiverFailure_1').is(':checked')) ? $('#chkLiverFailure').prop('checked', true): '';
    ($('.chkThromboemb_3').is(':checked')) ?
    $('#chkThromboembScore4').prop('checked', true): '';

    ($('#chkIsAcuteInflammatoryDiseaseOrInfection').is(':checked') && $('#chkIsRestrictedMobility').is(':checked')) ? $('#chkAcuteInflammatoryDiseaseOrInfectionWithBedRest').prop('checked', true): '';
    ($('.chkSpinalCordInjure_1') && $('#chkPlegia').is(':checked')) ? $('#chkSpinalCordDamageWithPlegia').prop('checked', true): '';
    ($('.chkStroke_1').is(':checked') && $('#chkPlegia').is(':checked')) ? $('#chkStrokeWithPlegia').prop('checked', true): '';
    ($('#chkArthritis').is(':checked') && $('#chkIsRestrictedMobility').is(':checked')) ? $('#chkArthritisWithRestrictedMobility').prop('checked', true): '';
    ($('#chkIsRestrictedMobility, #chkDehydration').is(':checked')) ? $('#chkIsRestrictedMobilityOrDehydration').prop('checked', true): '';
    ($('.chkСoagulopathy_1').is(':checked')) ? $('#chkСoagulopathyWithoutThrombocytopenia').prop('checked', true): '';
    ($('.chkSAPMore160_1').is(':checked')) ? $('#chkSAPMore160').prop('checked', true): '';
    ($('.divTraumOrthOper select').prop('selectedIndex') == 2) ? $('#chkArthroscopicSurgery').prop('checked', true): '';
    ($('.divTraumOrthOper select').prop('selectedIndex') == 5) ? $('#chkShinFractureSurgery').prop('checked', true): '';
    ($('.divTraumOrthOper select').prop('selectedIndex') == 6) ? $('#chkArtroplasty').prop('checked', true): '';
    ($('.divTraumOrthOper select').prop('selectedIndex') == 7) ? $('#chkHipFractureSurgery').prop('checked', true): '';
    ($('.divGenSurgOper select').prop('selectedIndex') == 4) ? $('#chkLiverResection').prop('checked', true): '';
    ($('.divGenSurgOper select').prop('selectedIndex') == 5) ? $('#chkPancreatoDuodResection').prop('checked', true): '';
    ($('.divGenSurgOper select').prop('selectedIndex') == 10) ? $('#chkPulmonectomy').prop('checked', true): '';
    ($('.divGenSurgOper select').prop('selectedIndex') == 13) ? $('#chklaparoscopicIntervention').prop('checked', true): '';
    ($('.divCardiovascOper select').prop('selectedIndex') == 4 || $('.divCardiovascOper select').prop('selectedIndex') == 5) ? $('#chkHeartSurgery').prop('checked', true): '';
    ($('.divNeurosurgOper select').prop('selectedIndex') == 0) ?
    $('#chkBrainOrSpinalCordSurg').prop('checked', true): '';
    ($('.divObsGynOper select').prop('selectedIndex') == 1) ?
    $('#chkElectiveCSection').prop('checked', true): '';
    ($('.divObsGynOper select').prop('selectedIndex') == 2) ?
    $('#chkCSectionInLabour').prop('checked', true): '';
    console.log($('#chkLiverResection').is(':checked'));
    console.log($('.divGenSurgOper select').prop('selectedIndex'));
    //    console.log($('#chkBrainOrSpinalCordSurg').is(':checked'));
    (vAgeOfPatient > 35) ?
    $('#chkAgeMore35').prop('checked', true): '';
    (vAgeOfPatient > 40) ?
    $('#chkAgeMore40').prop('checked', true): '';
    (vAgeOfPatient > 40 && vAgeOfPatient < 61) ?
    $('#chkAge_41_60').prop('checked', true): '';
    (vAgeOfPatient >= 40 && vAgeOfPatient < 85) ?
    $('#chkAge_40_84').prop('checked', true): '';
    (vAgeOfPatient > 60 && vAgeOfPatient < 76) ?
    $('#chkAge_61_75').prop('checked', true): '';
    (vAgeOfPatient > 64 && vAgeOfPatient < 75) ?
    $('#chkAge_65_74').prop('checked', true): '';
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
    });
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
    let i = [],
        vMyArr = [],
        vSetRusSurgRF = [],
        m = 0;
    ($('#divAllRF input:checked')).each(function () {
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
    });
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
    console.log(vSetRusSurgRF);
    if ($('#chkIsOrNoSurg').is(':checked')) {
        if (vGradeOfOper == 3) {
            vCounterRusSurgRF = 3;
            vCounterCapriniRF += 5;
            vCounterRusTraumRF = 3;
        } else {
            vCounterRusSurgRF = estimateSurgRiskGrade(vAgeOfPatient, $('#chkTimeOfSurg').is(':checked'), vGradeOfOper, vSetRusSurgRF.includes('1'));
            (vGradeOfOper == 1 || vGradeOfOper == 2) ? vCounterCapriniRF += 2: vCounterCapriniRF += 1;
            vCounterRusTraumRF = estimateSurgRiskGrade(vAgeOfPatient, $('#chkTimeOfSurg').is(':checked'), vGradeOfOper, vSetRusTraumRF.includes('1'));
        }
    }
    //    if ($('#chkIsOrNoSurg').is(':checked')) {
    //        (vGradeOfOper == 3) ? vCounterRusSurgRF = 3: vCounterRusSurgRF = estimateSurgRiskGrade(vAgeOfPatient, $('#chkTimeOfSurg').is(':checked'), vGradeOfOper, vSetRusSurgRF.includes('1'));
    //    }
    //    if ($('#chkIsOrNoSurg').is(':checked')) {
    //        (vGradeOfOper == 3) ? vCounterCapriniRF += 5: (vGradeOfOper == 1 || vGradeOfOper == 2) ? vCounterCapriniRF += 2 : vCounterCapriniRF += 1;
    //    }
    //
    //    if ($('#chkIsOrNoSurg').is(':checked')) {
    //        (vGradeOfOper == 3) ? vCounterRusTraumRF = 3: vCounterRusTraumRF = estimateSurgRiskGrade(vAgeOfPatient, $('#chkTimeOfSurg').is(':checked'), vGradeOfOper, vSetRusTraumRF.includes('1'));
    //    }
    (vSetRusSurgRF.indexOf('2') != -1 && vCounterRusSurgRF < 3) ? vCounterRusSurgRF = 2: '';
    (vSetRusSurgRF.indexOf('3') != -1) ? vCounterRusSurgRF = 3: '';
    (vSetRusTraumRF.indexOf('2') != -1 && vCounterRusTraumRF < 3) ? vCounterRusTraumRF = 2: '';
    (vSetRusTraumRF.indexOf('3') != -1) ? vCounterRusTraumRF = 3: '';
    (vCounterMajorBleedingScoreRF > 0) ? vCounterMajorBleedingScoreRF = 1: '';
    (vCounterTraumBleedingRF > 0) ? vCounterTraumBleedingRF = 1: '';
    console.log($('#divAllRF input:checked'));
    //    console.log(vAgeOfPatient);
    //    console.log($('#chkTimeOfSurg').is(':checked'));
    //    console.log(vSetRusSurgRF.includes('1'));
    //    console.log(vGradeOfOper, vGradeOfOper == 0);
    //    console.log(vSetRusSurgRF);
    //    console.log(vCounterRusSurgRF);
    //    console.log(vCounterCapriniRF);
    //    console.log(vCounterRusTraumRF);
    let vIsBedRestBMI = $('#divAllRF input[id*="BMIMore"]:checked ').last();
    let vIsBedRestAge = $('#divAllRF input[id*="AgeMore"]:checked ').last();
    $('.chk2_LvlRF, .chk3_LvlRF input:checked').prop('checked', false);
    console.log($('#divAllRF input:checked'));
    vIsBedRestBMI.prop('checked', true);
    vIsBedRestAge.prop('checked', true);
    function getStringOfRF(el) {
        let a = 0,
            b = '';
        $(el).each(function () {
            (a > 0) ? b += ',' + $(this).text(): b += $(this).text();
            a += 1;
        });;
        return b;
    }
    vGeneralListOfRF = getStringOfRF($('#divAllRF input:checked').parent());
    vGeneralListOfOper = getStringOfRF($('#divChooseKindOfOper option:selected'));
    //}
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
    //    $('#btnTwo').on('click', function () {
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
    (vCounterCapriniRF >= 2 && (vAllSurgProfiles == true || $('#rdoGynProfile').is(':checked'))) ? $('<p>', {
        text: ('Caprini: ' + bindBalls(vCounterCapriniRF) + '. Риск ' + countStratRF(vCounterCapriniRF, 'Caprini') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    (vCounterRusSurgRF >= 1 && (vAllSurgProfiles == true || $('#rdoGynProfile').is(':checked'))) ? $('<p>', {
        text: ('Российская риска ВТЭО в хирургии: ' + bindBalls(vCounterRusSurgRF) + '. Риск ' + countStratRF(vCounterRusSurgRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    (vCounterRusTraumRF > 2 && valuesMedPfofile.is('[value = 4]')) ? $('<p>', {
        text: ('Российская риска ВТЭО в травматологии: ' + bindBalls(vCounterRusTraumRF) + '. Риск ' + countStratRF(vCounterRusTraumRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    (vCounterGreenTop37a > 0 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('GreenTopGuideline37a: ' + bindBalls(vCounterGreenTop37a) + '. Риск ' + countStratRF(vCounterGreenTop37a, 'GreenTop37aRus') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    (vCounterObstRuRF  > 0 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('Модифицированная Российская версия GreenTopGuideline37a: ' + bindBalls(vCounterObstRuRF) + '. Риск ' + countStratRF(vCounterObstRuRF, 'GreenTop37aRus') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    ($('#pTextCollector_2').children().length > 0) ? $('#pTextCollector_2').show(): '';

    ($('#pTextCollector_2').children().length == 0) ? $('#pBestConclusion').show(): '';

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
        text: ('... в акушерстве-гинекологии: риск высокий. Медикаментозная профилактика ВТЭО НМГ противопоказана.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';
    ($('#pTextCollector_3').children().length > 0 && $('#chkCalculateRiskOfBleeding').is(':checked')) ? $('#pTextCollector_3').show(): '';

    $('.pTextContainer:contains("высокий")').css({
        'color': 'red'
    });
    $('.pTextContainer:contains("умеренный")').css({
        'color': 'orange'
    });
    console.log(vGeneralListOfRF);
    console.log(vGeneralListOfOper);
    console.log(vAgeOfPatient);
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

    $('#btnOne').unbind('click', countRF).html('Перейти к определению метода профилактики ВТЭО');
};
//$('#btnTwo').on('click', function (
//                 ){
//    $('<p>', { text: 'Гугли!'});.appendTo($('#pTextCollector_1_2'));
//
//});;
