var tasks = {};


//const moment = require('moment');
var Now = moment().format('LLLL');
var display = document.getElementById('currentDay');
display.innerHTML = Now



/* var createTask = function(taskText, taskDate, taskList) {
    // create elements that make up a task item
    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>")
      .addClass("badge badge-primary badge-pill")
      .text(taskDate);
    var taskP = $("<p>")
      .addClass("m-1")
      .text(taskText);
  
    // append span and p element to parent li
    taskLi.append(taskSpan, taskP);
  
    // check due date
    auditTask(taskLi);
  
    // append to ul list on the page
    $("#list-" + taskList).append(taskLi);
  };

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };


  // save button in modal was clicked
$("#task-form-modal .btn-save").click(function() {
    // get form values
    var taskText = $("#modalTaskDescription").val();
    var taskDate = $("#modalDueDate").val();
  
    if (taskText && taskDate) {
      createTask(taskText, taskDate, "toDo");
  
      // close modal
      $("#task-form-modal").modal("hide");
  
      // save in tasks array
      tasks.toDo.push({
        text: taskText,
        date: taskDate
      });
  
      saveTasks();
    }
  });

$('.myClass').timepicker({defaultTime: 'value'}); */