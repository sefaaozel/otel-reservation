var acceptToPayBtn = $("#acceptToPayBtn");

$(document).ready(function () {
    reservationComplateBtn.prop("disabled", true);

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

acceptToPayBtn.click(function () {

    if (($("#username").val() == "" || $("#username").val() == null) ||
        ($("#cardNumber").val() == "" || $("#cardNumber").val() == null) ||
        ($("#cardLastDateMonth").val() == "" || $("#cardLastDateMonth").val() == null) ||
        ($("#cardLastDateYear").val() == "" || $("#cardLastDateYear").val() == null) ||
        ($("#cardCVV").val() == "" || $("#cardCVV").val() == null)
    ) {
        $("#creditCardIsInfoNull").fadeIn();
        creditCardInformation();
        return false;
    }


    var username = $("#username").val();
    var cardNum = $("#cardNumber").val();
    var cardLastDateMonth= $("#cardLastDateMonth").val();
    var cardLastDateYear = $("#cardLastDateYear").val();
    var cardCVV = $("#cardCVV").val();

    console.log("Ödeme Bilgileri : " +
        "Adı Soyadı : " + username +
        "\r\n" +
        "Kart Numarası : " + cardNum +
        "\r\n" +
        "Son Kullanım Tarihi : " + cardLastDateMonth + "/" + cardLastDateYear +
        "\r\n" +
        "CVV : " + cardCVV);

    reservationComplateBtn.prop("disabled", false);

});

function creditCardInformation() {
    window.setTimeout(function () {
        $("#creditCardIsInfoNull").fadeOut(300)
    }, 3000);
}