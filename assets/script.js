//Variables
let today = $("#currentDay");
let content = $("content");
//let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let timeSlot = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
let userStorage = window.localStorage;

//Using moment.js to establish current day/time
today.text(moment().format('MMMM Do YYYY, h:mm a'));


//Creating colors for time slots past/present/future










