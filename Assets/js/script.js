var inputGroupEl = $(".task-form");
var taskInputEl = $('textarea[name="task-input"]');
var nineAmEl = $("#time-block-9am");
var taskList = [
  {
    time: "9AM",
    taskDescription: "",
  },
];

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function handleTaskSubmit(event) {
  event.preventDefault();
  var taskItem = taskInputEl.val();
  taskList[0].taskDescription = taskItem;
  storeTaskList();
}

function storeTaskList() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function retreiveTaskList() {
  var storedTaskList = JSON.parse(localStorage.getItem("taskList"));
  if (storedTaskList !== null) {
    taskList = storedTaskList;
    $("#time-block-9am").val(taskList[0].taskDescription);
    console.log("retreived!");
  }
}

function init() {
  retreiveTaskList();
}

///////////////////////////////////////////////////////////////////////////////////////
// Event Listeners
///////////////////////////////////////////////////////////////////////////////////////

inputGroupEl.on("submit", handleTaskSubmit);

init();
