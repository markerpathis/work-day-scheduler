//HOOKS TO FORMS FOR EVENT LISTENERS
var form9AM = $(".task-form-9am");
var form10AM = $(".task-form-10am");

// HOOKS TO TEXT AREAS
var textArea9am = $('textarea[name="task-input-9am"]');
var textArea10am = $('textarea[name="task-input-10am"]');

// var buttonsEl = document.querySelector("button");
var buttonsEl = document.getElementsByClassName("btn");

console.log(buttonsEl.length);

var taskList = [];

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

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
      console.log(taskList);
      storeTaskList();
    } else if (buttonClicked.value == 1) {
      taskList[1] = textArea10am.val();
      storeTaskList();
    }
  });
}

init();
