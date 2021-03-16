today = new Date();

var date = String(today.getDate()).padStart(2, "0") + "/" + String(today.getMonth() + 1).padStart(2, "0") + "/" + today.getFullYear();

var hours = today.getHours();
var time = hours + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
if (hours < 12) {
  timestamp = time + " " + date;
  timestamp = timestamp + " AM";
} else if (hours > 12) {
  hours = hours - 12;
  timestamp = time + " " + date;
  timestamp = timestamp + " PM";
}
document.getElementById("date").innerHTML = timestamp;
