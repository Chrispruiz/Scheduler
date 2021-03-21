var time = moment();



var Now = moment().format('dddd, MMMM Do YYYY');
var display = document.getElementById('currentDay');
display.innerHTML = Now

/* $(document).ready(function () {
  // display current date at top in div id currentDay
  var currentDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(currentDate); */

  $(".saveBtn").on("click", function () {
    //input fields
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });


  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));



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
      });
    }
  hourTracker();
/* }); */








