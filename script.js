// The app should:
// * Display the current day at the top of the calender when a user opens the planner.
// * Present timeblocks for standard business hours when the user scrolls down.
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// * Allow a user to enter an event when they click a timeblock
// * Save the event in local storage when the save button is clicked in that timeblock.
// * Persist events between refreshes of a page

// DOM elements
var currentDay = $("#currentDay");
var schedule = $('.container');

// Moment.js variables
var now = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();

// Global Variables
var workDay = 9;

// --------------------------------------------------->
// START OF PROGRAM
// --------------------------------------------------->

// Setting Current Day to top of the calendar
$(currentDay.text(now));

// // Adding Rows dynamically using the DOM
for (var i = 0; i < 9; i++) {
  var timeBlock = $("<div>").addClass("row time-row");
  timeBlock.attr("id", "hour" + i);

  var hourCol = $("<div>").addClass("hour col-1");
  hourCol.text(moment().hour(i + workDay).format("hA"));

  var saveCol = $("<button>").addClass("saveBtn col-1 fas fa-save");
  var textInput = $("<textarea>").addClass("col-10 time-block future");

  timeBlock.append(hourCol);
  timeBlock.append(textInput);
  timeBlock.append(saveCol);

  schedule.append(timeBlock);
};
