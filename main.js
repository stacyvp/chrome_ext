var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*function slideshow() {
    var i;
    var x = document.getElementsByClassName("body");
    for (i = 0; i < x.length) { 
        myIndex = 1
    }
    x[myIndex-1].style.display = "block";
    setTimeout(slideshow, 2000);
}

// trigger adding an event to a list with the enter button
document.getElementById("id_of_textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("id_of_button").click();
    }
});

*/

function startTime() {
    var currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth();
    var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();

    for (i = 0; i < 12; i++) {
        if (i == month) {
            month = months[i];
            break;
        }
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var suffix = "AM";
    if (hours >= 12) {
        suffix = "PM";
        hours = hours-12;
    }

    if (hours == 0) {
        hours = 12;
    }
    document.getElementById('time').innerHTML = month + " " + day + " " + hours + ":" + minutes + suffix;

    t = setTimeout(function() { startTime()}, 500);
}
startTime();
