// DOM elements
var currentDay = $("#currentDay");
var hourBlock = $("#hour");
var timeBlock = $("#timeBlock");
var saveBlock = $("#save");

// Moment.js variables
var now = moment().format("dddd, MMMM Do YYYY");

// Global Variables

// --------------------------------------------------->
// START OF PROGRAM
// --------------------------------------------------->

// Setting Current Day to top of the calendar
$(currentDay.text(now));

// Adding Rows dynamically using the DOM
for (var i = 0; i < 8; i++) {
  var hourCol = $("<div>").addClass("row hour").text("hour");
  var blockCol = $("<div>").addClass("row").text("timeblock");
  var saveCol = $("<div>").addClass("row saveBtn").text("save")

  $(hour).append(hourCol);
  $(timeBlock).append(blockCol);
  $(saveBlock).append(saveCol);
}
