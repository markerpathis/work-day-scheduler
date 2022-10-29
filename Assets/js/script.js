var inputGroupEl = $(".task-form");
var taskInputEl = $('textarea[name="task-input"]');

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function handleTaskSubmit(event) {
  event.preventDefault();
  var taskItem = taskInputEl.val();
  if (!taskItem) {
    console.log("task not entered");
    return;
  } else {
    console.log(taskItem);
  }
}

inputGroupEl.on("submit", handleTaskSubmit);
