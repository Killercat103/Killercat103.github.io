today = new Date();

var date = String(today.getDate()).padStart(2, "0") + "/" + String(today.getMonth() + 1).padStart(2, "0") + "/" + today.getFullYear();

var hours = today.getHours();
var time = hours + ":" + today.getMinutes() + ":" + today.getSeconds();
timestamp = time + " " + date;
if (hours < 12) {
  timestamp = timestamp + " AM";
} else if (hours > 12) {
  hours = hours - 12;
  timestamp = timestamp + " PM";
}
document.getElementById("date").innerHTML = timestamp;
