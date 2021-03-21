var time = moment();



var Now = moment().format('dddd, MMMM Do YYYY');
var display = document.getElementById('currentDay');
display.innerHTML = Now

$(".saveBtn").on("click", function () {
    //get from input fields
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });


$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));



function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour(); 
    // go over the time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      //color code the hours on the planner
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
      console.dir(blockHour);
    });
  }
hourTracker();








