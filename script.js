var currentDay = $('#currentDay');
var now = moment().format("dddd, MMMM Do YYYY");

$(currentDay.text(now));
