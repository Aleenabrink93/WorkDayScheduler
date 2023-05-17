// current date/day
var currentDayEL = dayjs();
$('#currentDay').text(currentDayEL.format('dddd MMM D, YYYY'));

//

var currentTimeEL = dayjs().hour();

//if split number from ID so that I can compare with the current time, then use conditions to apply .css attributes
function tracker() {
  $(".time-block").each(function(){
    var hours =$(this).attr("id").split("hour")[1];
      console.log("currentHour"+ currentTimeEL);
      console.log("scheduledHour" + hours);

      if (hours<currentTimeEL){
        $(this).addClass("past");
      }

      else if (hours==currentTimeEL){
        $(this).addClass("present");
      }

      else {
        $(this).addClass("future");
      }

  })
}

tracker();

// save input to local storage
function savedEvents(){
  var input = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, input);
}

//activate save button
// clear values for past events
$(".saveBtn").on("click",function(event){
  event.preventDefault();
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    if (9<currentTimeEL<17){
    localStorage.setItem(time, input);}
    
    else {
    localStorage.clear();
    }
  });

// print events
$('#hour9 .description').val(localStorage.getItem("hour9"));
$('#hour10 .description').val(localStorage.getItem("hour10"));
$('#hour11 .description').val(localStorage.getItem("hour11"));
$('#hour12 .description').val(localStorage.getItem("hour12"));
$('#hour13 .description').val(localStorage.getItem("hour13"));
$('#hour14 .description').val(localStorage.getItem("hour14"));
$('#hour15 .description').val(localStorage.getItem("hour15"));
$('#hour16 .description').val(localStorage.getItem("hour16"));
$('#hour17 .description').val(localStorage.getItem("hour17"));
