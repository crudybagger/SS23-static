// Set the date we're counting down to
var countDownDate = new Date("April 07, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function prependZero(number) {
    if (number <= 9)
      if (number < 0) {
        return "00";
      } else {
        return "0" + number;
      }
    else return number;
  }

  days = prependZero(days);
  hours = prependZero(hours);
  minutes = prependZero(minutes);
  seconds = prependZero(seconds);

  // Display the result in the element with id="demo"

  document.getElementById("days").textContent = days.toString();

  document.getElementById("hours").textContent = hours.toString()

  document.getElementById("minutes").textContent = minutes.toString()

  document.getElementById("seconds").textContent = seconds.toString()

}, 1000);
