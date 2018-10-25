var unAvailableDates = [],
    available = function (date) {
        var dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        if ($.inArray(dmy, unAvailableDates) != -1) {
            return [false, "", "unAvailable"];
        }
        return [true, "", "Available"];
    };
$(function () {
    $('#datetimepicker4').datetimepicker({
        locale: 'it',
        format: 'DD/MM/YYYY',
        minDate: 'now',
        disabledDates: [],
        widgetPositioning: {
            horizontal: "auto",
            vertical: "top"
        }
    });
});