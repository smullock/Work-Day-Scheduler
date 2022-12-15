// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, DD MMMM YYYY'));
const currentHour = dayjs().format('hh');
// var saveBtn = document.getElementsByClassName("saveBtn");

  
 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.     




// $(window).onload(function() {


$( ".saveBtn").each(function() {
 $(this).on('click', function(event) {
  event.preventDefault();
  console.log($(this));

  // set up your functionality for local storage
  // look at how to get the textarea that is in the same div as the button 
  // look at how to target the clicked button's sibling textarea
  
 })
})
// make a function to use localStorage.getItem(), $('').val(WHATEVER IS IN LOCAL STORAGE)
// $('#hour-09 )

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));




// var task=$(this).textarea(".description").value
// localStorage.setItem(task,value);
// });
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


// Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
$(".time-block").each(function () {
  var hourDiv = $(this).attr("Id").split("-")[1];

if (hourDiv == currentHour) {
  $(this).addClass("present");
} else if (hourDiv <= currentHour){
  $(this).addClass("past");

} else if (hourDiv > currentHour) {
  $(this).addClass("future");
 
}
})
