let today = $("#today");

//Using moment.js to establish current day/time
function showDate() {
    let date = moment().format("dddd, MMMM Do, YYYY");
    today.text(date);
}

function showTime() {
    let time = Number.parseInt(moment().format("H"));
    today.text(time);
}

showDate();
showTime();











