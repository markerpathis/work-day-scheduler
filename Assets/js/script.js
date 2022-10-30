///////////////////////////////////////////////////////////////////////////////////////
// Hooks to the UI
///////////////////////////////////////////////////////////////////////////////////////

//HOOKS TO FORMS FOR EVENT LISTENERS
var form9AM = $(".task-form-9am");
var form10AM = $(".task-form-10am");

// HOOKS TO TEXT AREAS
var textArea9am = $('textarea[name="task-input-9am"]');
var textArea10am = $('textarea[name="task-input-10am"]');

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
var time12AM = moment("12", format).hour();
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
    }
    storeTaskList();
  });
}

// Calls the init function for when the page is loaded

init();
