///////////////////////////////////////////////////////////////////////////////////////
// Hooks to the UI
///////////////////////////////////////////////////////////////////////////////////////

//HOOKS TO FORMS FOR EVENT LISTENERS
var form9AM = $(".task-form-9am");
var form10AM = $(".task-form-10am");

// HOOKS TO TEXT AREAS
var textArea9am = $('textarea[name="task-input-9am"]');
var textArea10am = $('textarea[name="task-input-10am"]');
var textArea11am = $('textarea[name="task-input-11am"]');
var textArea12pm = $('textarea[name="task-input-12pm"]');

// var buttonsEl = document.querySelector("button");
var buttonsEl = document.getElementsByClassName("btn");

var taskList = [];

///////////////////////////////////////////////////////////////////////////////////////
// Moment
///////////////////////////////////////////////////////////////////////////////////////

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var format = "HH";
var currentHour = today.hour();
var time9AM = moment("9", format).hour();
var time10AM = moment("10", format).hour();
var time11AM = moment("11", format).hour();
var time12PM = moment("12", format).hour();
var time1PM = moment("13", format).hour();
var time2PM = moment("14", format).hour();
var time3PM = moment("15", format).hour();
var time4PM = moment("16", format).hour();
var time5PM = moment("17", format).hour();

var diff9AM = currentHour - time9AM;
if (diff9AM > 0) {
  textArea9am.addClass("past");
} else if (diff9AM < 0) {
  textArea9am.addClass("future");
} else {
  textArea9am.addClass("present");
}

var diff10AM = currentHour - time10AM;
if (diff10AM > 0) {
  textArea10am.addClass("past");
} else if (diff10AM < 0) {
  textArea10am.addClass("future");
} else {
  textArea10am.addClass("present");
}

var diff11AM = currentHour - time11AM;
if (diff11AM > 0) {
  textArea11am.addClass("past");
} else if (diff11AM < 0) {
  textArea11am.addClass("future");
} else {
  textArea11am.addClass("present");
}

var diff12PM = currentHour - time12PM;
if (diff12PM > 0) {
  textArea12pm.addClass("past");
} else if (diff12AM < 0) {
  textArea12pm.addClass("future");
} else {
  textArea12pm.addClass("present");
}

///////////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////////

function storeTaskList() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function retreiveTaskList() {
  var storedTaskList = JSON.parse(localStorage.getItem("taskList"));
  taskList = storedTaskList;
  textArea9am.val(taskList[0]);
  textArea10am.val(taskList[1]);
  textArea11am.val(taskList[2]);
  textArea12pm.val(taskList[3]);
}

function init() {
  retreiveTaskList();
}

/////////////////////////////////////////////////////////////////////////////////////
//Event Listeners
/////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", function (event) {
    event.preventDefault();
    var buttonClicked = event.target;
    console.log(buttonClicked.value);
    if (buttonClicked.value == 0) {
      taskList[0] = textArea9am.val();
    } else if (buttonClicked.value == 1) {
      taskList[1] = textArea10am.val();
    } else if (buttonClicked.value == 2) {
      taskList[2] = textArea11am.val();
    } else if (buttonClicked.value == 3) {
      taskList[3] = textArea12pm.val();
    }
    storeTaskList();
  });
}

// Calls the init function for when the page is loaded

init();
