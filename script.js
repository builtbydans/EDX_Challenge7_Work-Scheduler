// DOM elements
var currentDay = $("#currentDay");
var schedule = $('.container');

// Moment.js variables
var now = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();

// Global variables
var workDay = 9;
var tasks = JSON.parse(localStorage.getItem("task")) || [];

// --------------------------------------------------->
// START OF PROGRAM
// --------------------------------------------------->

// Setting Current Day to top of the calendar
$(currentDay.text(now));

// // Adding Rows dynamically using the DOM
for (var i = 0; i < workDay; i++) {
  // Setting time blocks main divs
  var timeBlock = $("<div>").addClass("row time-row");
  timeBlock.attr("id", i + 1);

  // Setting hour column
  var hourCol = $("<div>").addClass("hour col-1");
  hourCol.text(moment().hour(i + workDay).format("hA"));

  // Setting save column
  var saveCol = $("<button>").addClass("saveBtn col-1 fas fa-save");

  // Setting text input area for timeblock/
  var textInput = $("<textarea>").addClass("time-block future");

  /* Appending all columns to timeBlock divs and then
  appending timeBlock div to main Schedule container */
  timeBlock.append(hourCol);
  timeBlock.append(textInput);
  timeBlock.append(saveCol);
  schedule.append(timeBlock);

  // Setting textArea color depending on time as defined by currentHour variable
  if (currentHour === (i + workDay)) {
    textInput.attr("class", "task col-10 present");
  }
  else if (currentHour > (i + workDay)){
    textInput.attr("class", "task col-10 past");
  }

  // Saving work schedule blocks to localStorage()
  $('.saveBtn').on("click", function(event) {
    event.preventDefault();
    var currValue = $(this).siblings(".task").val();
    console.log(currValue)
    localStorage.setItem("tasks", currValue)
  });
};

// --------------------------------------------------->
//  END OF PROGRAM
// --------------------------------------------------->
