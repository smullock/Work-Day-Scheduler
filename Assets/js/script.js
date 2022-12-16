//Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, DD MMMM YYYY'));
const currentHour = dayjs().format('hh');





//add click event to the save button to accept the text entry
$( ".saveBtn").each(function() {
 $(this).on('click', function(event) {
  event.preventDefault();


  // sets up functionality for local storage
  var task = $(this).siblings(".description").val();
  var hourTime =  $(this).parent().attr("id");

  localStorage.setItem(task,hourTime);
 })
})


$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));



// Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
$(".time-block").each(function () {
  var hourDiv = $(this).attr("Id").split("-")[1];

if (hourDiv == currentHour) {
  $(this).addClass("present");

} else if (hourDiv <= currentHour){
  
  $(this).removeClass("future");

} else if (hourDiv > currentHour) {
  $(this).addClass("future");
 }
}
)

