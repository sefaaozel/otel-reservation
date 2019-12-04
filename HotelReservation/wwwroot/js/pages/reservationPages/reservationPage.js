var secondStepDiv = $("#secondStepDiv");
var thirdStepDiv = $("#thirdStepDiv");
var startingDate = $("#startingDate");
var endingDate = $("#endingDate");

var passToSecondStepBtn = $("#passToSecondStep");

$(document).ready(function () {
    console.log("Rezervasyon 1.Adım :");

    $("#dateMenuLink").addClass("active");

    secondStepDiv.hide();
    thirdStepDiv.hide();
});


$("#passToSecondStep").click(function () {
    debugger;
    if ((startingDate.val() === "" || endingDate.val() === "") || (startingDate.val() == null || endingDate.val() == null)) {
        $("#dateIsNullAlert").fadeIn();
        selectedDateIsNullAlert();
        return false;
    }


    startingDate.prop("disabled", true);
    endingDate.prop("disabled", true);
    passToSecondStepBtn.prop("disabled", true);

    $("#dateMenuLink").removeClass("active");
    $("#dateMenuLink").addClass("disabled");

    $("#roomMenuLink").removeClass('disabled');
    $("#roomMenuLink").addClass("active");

    secondStepDiv.show();

    console.log("Otele Giriş - Çıkış Tarihleri : " + startingDate.val() + " - " + endingDate.val());
    console.log("Rezervasyon 2.Adım : ")
});

function selectedDateIsNullAlert() {
    window.setTimeout(function () {
        $("#dateIsNullAlert").fadeOut(300)
    }, 3000);
} 