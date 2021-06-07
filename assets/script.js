//Variables
let today = $("#currentDay");
let locStorage = window.localStorage;

//Using moment.js to establish current month/day/year/time
today.text(moment().format('MMMM Do YYYY, h:mm a'));

// Local storage data loaded if applicable
$("#hour-9 .description").val(locStorage.getItem("hour-9"));
$("#hour-10 .description").val(locStorage.getItem("hour-10"));
$("#hour-11 .description").val(locStorage.getItem("hour-11"));
$("#hour-12 .description").val(locStorage.getItem("hour-12"));
$("#hour-13 .description").val(locStorage.getItem("hour-13"));
$("#hour-14 .description").val(locStorage.getItem("hour-14"));
$("#hour-15 .description").val(locStorage.getItem("hour-15"));
$("#hour-16 .description").val(locStorage.getItem("hour-16"));
$("#hour-17 .description").val(locStorage.getItem("hour-17"));

function update() {
    //Using moment.js to establish current time then loop to determine past/current/future slots
    let now = moment().hours();
    $(".time-block").each(function() {
        let slot = parseInt($(this).attr("id").split("-")[1]);
    if ( slot < now) {
        $(this).addClass("past");
    }
    else if ( slot === now) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    });
}

update();

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        let entry = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        locStorage.setItem(time, entry);
    })
})

setInterval(update, 15000);











