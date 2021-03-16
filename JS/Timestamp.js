today = new Date();
var date = today.getDate() + "/" + (today.getMonth() + 1).padStart(2, "0") + "/" + today.getFullYear();
document.getElementById("date").innerHTML = "Timestamp: " + time + " " + date;
