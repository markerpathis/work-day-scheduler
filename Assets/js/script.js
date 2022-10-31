///////////////////////////////////////////////////////////////////////////////////////
// Hooks to the UI
///////////////////////////////////////////////////////////////////////////////////////

var textArea9am = $('textarea[name="task-input-9am"]');
var textArea10am = $('textarea[name="task-input-10am"]');
var textArea11am = $('textarea[name="task-input-11am"]');
var textArea12pm = $('textarea[name="task-input-12pm"]');
var textArea1pm = $('textarea[name="task-input-1pm"]');
var textArea2pm = $('textarea[name="task-input-2pm"]');
var textArea3pm = $('textarea[name="task-input-3pm"]');
var textArea4pm = $('textarea[name="task-input-4pm"]');
var textArea5pm = $('textarea[name="task-input-5pm"]');

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

// const array = [
//   {
//     time: time9AM,
//     textArea: textArea9am
//   }
// ]

///////////////////////////////////////////////////////////////////////////////////////
// Calculate Past, Present, Future for Time Blocks
///////////////////////////////////////////////////////////////////////////////////////

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
} else if (diff12PM < 0) {
  textArea12pm.addClass("future");
} else {
  textArea12pm.addClass("present");
}

var diff1PM = currentHour - time1PM;
if (diff1PM > 0) {
  textArea1pm.addClass("past");
} else if (diff1PM < 0) {
  textArea1pm.addClass("future");
} else {
  textArea1pm.addClass("present");
}

var diff2PM = currentHour - time2PM;
if (diff2PM > 0) {
  textArea2pm.addClass("past");
} else if (diff2PM < 0) {
  textArea2pm.addClass("future");
} else {
  textArea2pm.addClass("present");
}

var diff3PM = currentHour - time3PM;
if (diff3PM > 0) {
  textArea3pm.addClass("past");
} else if (diff3PM < 0) {
  textArea3pm.addClass("future");
} else {
  textArea3pm.addClass("present");
}

var diff4PM = currentHour - time4PM;
if (diff4PM > 0) {
  textArea4pm.addClass("past");
} else if (diff4PM < 0) {
  textArea4pm.addClass("future");
} else {
  textArea4pm.addClass("present");
}

var diff5PM = currentHour - time5PM;
if (diff5PM > 0) {
  textArea5pm.addClass("past");
} else if (diff5PM < 0) {
  textArea5pm.addClass("future");
} else {
  textArea5pm.addClass("present");
}

///////////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////////

function storeTaskList() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function retreiveTaskList() {
  var storedTaskList = JSON.parse(localStorage.getItem("taskList"));
  if (storedTaskList !== null) {
    taskList = storedTaskList;
    textArea9am.val(taskList[0]);
    textArea10am.val(taskList[1]);
    textArea11am.val(taskList[2]);
    textArea12pm.val(taskList[3]);
    textArea1pm.val(taskList[4]);
    textArea2pm.val(taskList[5]);
    textArea3pm.val(taskList[6]);
    textArea4pm.val(taskList[7]);
    textArea5pm.val(taskList[8]);
  }
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
    var buttonClicked = event.currentTarget;
    if (buttonClicked.value == 0) {
      taskList[0] = textArea9am.val();
    } else if (buttonClicked.value == 1) {
      taskList[1] = textArea10am.val();
    } else if (buttonClicked.value == 2) {
      taskList[2] = textArea11am.val();
    } else if (buttonClicked.value == 3) {
      taskList[3] = textArea12pm.val();
    } else if (buttonClicked.value == 4) {
      taskList[4] = textArea1pm.val();
    } else if (buttonClicked.value == 5) {
      taskList[5] = textArea2pm.val();
    } else if (buttonClicked.value == 6) {
      taskList[6] = textArea3pm.val();
    } else if (buttonClicked.value == 7) {
      taskList[7] = textArea4pm.val();
    } else if (buttonClicked.value == 8) {
      taskList[8] = textArea5pm.val();
    }
    storeTaskList();
  });
}

// Calls the init function for when the page is loaded

init();
