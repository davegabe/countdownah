// Initialize all input of type date
var calendars = bulmaCalendar.attach('[type="date"]', {
  color: "dark",
  type: "date",
  lang: "en",
  displayMode: "dialog",
  showHeader: false,
  showFooter: false,
  dateFormat: "MM/DD/YYYY",
  showButtons: false,
  weekStart: 1,
  minDate: new Date(),
});

// Loop on each calendar initialized
$(".datetimepicker-clear-button").remove();
