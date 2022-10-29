//HOOS TO FORMS FOR EVENT LISTENERS
var form9AM = $(".task-form-9am");
var form10AM = $(".task-form-10am");

// HOOKS TO TEXT AREAS
var textArea9am = $('textarea[name="task-input-9am"]');
var textArea10am = $('textarea[name="task-input-10am"]');

var taskList = [];

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function handleTaskSubmit(event) {
  event.preventDefault();
  taskList[0] = textArea9am.val();
  taskList[1] = textArea10am.val();
  storeTaskList();
}

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

///////////////////////////////////////////////////////////////////////////////////////
// Event Listeners
///////////////////////////////////////////////////////////////////////////////////////

form9AM.on("submit", handleTaskSubmit);
form10AM.on("submit", handleTaskSubmit);

init();
