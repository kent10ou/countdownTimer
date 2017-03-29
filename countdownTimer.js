var endDate = 'March 31 2017';

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
