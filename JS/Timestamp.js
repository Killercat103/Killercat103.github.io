today = new Date();

var date = String(today.getDate()).padStart(2, "0") + "/" + String(today.getMonth() + 1).padStart(2, "0") + "/" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
timestamp = time + " " + date;
document.getElementById("date").innerHTML = "Timestamp: " + timestamp;
