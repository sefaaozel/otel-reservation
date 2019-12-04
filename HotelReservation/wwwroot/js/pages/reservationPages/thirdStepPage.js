var backToSecondStep = $("#backToSecondStep");

var reservationComplateBtn = $("#reservationComplateBtn");

backToSecondStep.click(function () {
    passToThirdStepBtn.prop("disabled", false);

    $("#roomMenuLink").removeClass("disabled");
    $("#roomMenuLink").addClass("active");

    $("#payMenuLink").removeClass('active');
    $("#payMenuLink").addClass("disabled");

    $("#backToFirstStepBtn").show();

    thirdStepDiv.hide();
});

passToThirdStepBtn.click(function () {
    $("#roomMenuLink").removeClass("active");
    $("#roomMenuLink").addClass("disabled");

    $("#payMenuLink").removeClass('disabled');
    $("#payMenuLink").addClass("active");

});

reservationComplateBtn.click(function () {

    $("#reservationIsSuccess").fadeIn();
    reservationCompleteSuccessMessage();
    return true;

});


function reservationCompleteSuccessMessage() {
    window.setTimeout(function () {
        $("#reservationIsSuccess").fadeOut(300)
    }, 4000);
} 