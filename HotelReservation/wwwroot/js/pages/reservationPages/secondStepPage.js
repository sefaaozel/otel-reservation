var backToFirstStepBtn = $("#backToFirstStepBtn");
var passToThirdStepBtn = $("#passToThirdStepBtn");

$(document).ready(function () {
    $('.selectRoomView').click(function () {
        $('.selectRoomView').not(this).prop('checked', false);
    });

    $('.selectRoomType').click(function () {
        $('.selectRoomType').not(this).prop('checked', false);
    });
});


backToFirstStepBtn.click(function () {
    startingDate.prop("disabled", false);
    endingDate.prop("disabled", false);
    passToSecondStepBtn.prop("disabled", false);

    $("#dateMenuLink").removeClass("disabled");
    $("#dateMenuLink").addClass("active");

    $("#roomMenuLink").removeClass('active');
    $("#roomMenuLink").addClass("disabled");


    secondStepDiv.hide();
});

passToThirdStepBtn.click(function () {
    debugger;
    if ($('input[name="roomTypes"]:checked').val() == "" || $('input[name="roomTypes"]:checked').val() == null) {
        $("#checkIsNullAlert").fadeIn();
        selectedRoomIsNullAlert();

        return false;
    }

    if ($('input[name="viewTypes"]:checked').val() == "" || $('input[name="viewTypes"]:checked').val() == null) {
        $("#checkIsNullAlert").fadeIn();
        selectedRoomIsNullAlert();
        return false;
    }


    passToThirdStepBtn.prop("disabled", true);

    $("#roomMenuLink").removeClass("active");
    $("#roomMenuLink").addClass("disabled");

    $("#payMenuLink").removeClass('disabled');
    $("#payMenuLink").addClass("active");

    backToFirstStepBtn.hide();

    thirdStepDiv.show();

    $('input[name="roomTypes"]:checked').each(function () {
        console.log(this.value);
    });

    selectedRoomType();
    selectedViewType();

    console.log("Rezervasyon 3.Adım : ");
});



function selectedRoomType() {
    if ($('#standartRoom').is(":checked")) {
        console.log("Oda Tipi : Standart")

    }
    if ($('#deluxRoom').is(":checked")) {
        console.log("Oda Tipi : Delux")

    }
    if ($('#suitRoom').is(":checked")) {
        console.log("Oda Tipi : Suit")

    }


    //if ($("input[type=checkbox]").prop(":checked")) {
    //    return true;
    //} else {
    //    $("#checkIsNullAlert").fadeIn();
    //    selectedRoomIsNullAlert();
    //    return false;
    //} 
}


function selectedViewType() {
    if ($('#seaViewRoom').is(":checked")) {
        console.log("Manzara Seçimi : Deniz")

    }
    if ($('#ovarlandViewRoom').is(":checked")) {
        console.log("Manzara Seçimi : Kara")

    }
}

function selectedRoomIsNullAlert() {
    window.setTimeout(function () {
        $("#checkIsNullAlert").fadeOut(300)
    }, 3000);
} 