$(document).ready(function () {
    $('#startingDate').datepicker({
        minDate: 0,
        format: 'dd/mm/yyyy',
        numberOfMonths: 2,
        onSelect: function (selected) {
            $("#endingDate").datepicker("option", "minDate", selected)
        }
    });

    $('#endingDate').datepicker({
        minDate: 0,
        format: 'dd/mm/yyyy',
        numberOfMonths: 2,
        onSelect: function (selected) {
            $("#startingDate").datepicker("option", "maxDate", selected)
        }
    });

});


