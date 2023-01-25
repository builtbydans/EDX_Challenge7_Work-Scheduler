  // --------------------------------------------------->
  // START OF PROGRAM
  // --------------------------------------------------->

$(function() {
// DOM elements
  var currentDay = $("#currentDay");
  var schedule = $('.container');

  // Moment.js variables
  var now = moment().format("dddd, MMMM Do YYYY");
  var currentHour = moment().hour();

  // Global variables
  var workDay = 9;

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
    saveCol.attr("data-index", i);

    // Setting text input area for timeblock/
    var textInput = $("<textarea>").addClass("task time-block future");
    var name = 'timeBlock-' + (i + 1);
    var val = localStorage.getItem(name) || '';
    textInput.val(val);

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
    };
  };

  // Saving work schedule blocks to localStorage()
  $('.saveBtn').on("click", function(event) {
    event.preventDefault();
    var name = 'timeBlock-' + $(this).parent().attr("id");
    var val = $(this).siblings(".task").val();
    localStorage.setItem(name, val);
  });
});

// --------------------------------------------------->
//  END OF PROGRAM
// --------------------------------------------------->
