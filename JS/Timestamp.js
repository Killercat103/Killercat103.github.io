function calctime {
   today = new Date();

   var date = String(today.getDate()).padStart(2, "0") + "/" + String(today.getMonth() + 1).padStart(2, "0") + "/" + today.getFullYear();

   var hours = today.getHours();
   var time = hours + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
   hours = parseInt(hours);
   if (hours < 12) {
      time = time + " AM";
   } else if (hours > 12) {
      hours = hours - 12;
      time = time + " PM";
   }
   hours = toString(hours);
   timestamp = time + " " + date;
   document.getElementById("date").innerHTML = timestamp;
}

var counter=setInterval(calctime, 1000);
