// months and days array to display user friendly days and months coz date functions returns months and days in numbers
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var timerr = setInterval(timer, 1000);
function timer() {
    var displayTime = new Date();
    var t = displayTime.toLocaleTimeString();
    document.getElementById('displayTime').innerHTML = t;
}
document.getElementById('displayTime').innerHTML = timerr;
document.getElementById('displayDay').innerHTML = days[d.getDay()];
document.getElementById('displayMonth').innerHTML = months[d.getMonth()];
document.getElementById('displayYear').innerHTML = d.getFullYear();