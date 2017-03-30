
function timeRemaining (endTime) {
  var timeLeft = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor((timeLeft / 1000) % 60);
  var minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  var hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  //console.log(days, hours, minutes, seconds)
  return {
    'timeLeft': timeLeft,
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
    'days': days
  }
}

function initializeClock(endtime) {

  function updateTimer() {
    var time = timeRemaining(endtime);

    $('.days').html(time.days);
    $('.hours').html(('0' + time.hours).slice(-2));
    $('.minutes').html(('0' + time.minutes).slice(-2));
    $('.seconds').html(('0' + time.seconds).slice(-2));

    // clearInterval when time expires
    if (time.timeLeft <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateTimer();
  // refresh countdown timer
  var timeinterval = setInterval(updateTimer, 1000);
}

var endDate = 'March 31 2017';

initializeClock(endDate);
