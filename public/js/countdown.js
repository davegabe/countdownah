function time_remaining(endtime) {
  endtime = new Date(endtime).getTime();
  var t = endtime - Date.now();
  if (t > 0) {
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
  } else {
    var seconds = Math.ceil((t / 1000) % 60);
    var minutes = Math.ceil((t / 1000 / 60) % 60);
    var hours = Math.ceil((t / (1000 * 60 * 60)) % 24);
    var days = Math.ceil(t / (1000 * 60 * 60 * 24));
  }
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    end: endtime,
  };
}

function run_clock(id, endtime) {
  var clock = document.getElementById(id);

  // get spans where our clock numbers are held
  var days_span = clock.querySelector("#days");
  var hours_span = clock.querySelector("#hours");
  var minutes_span = clock.querySelector("#minutes");
  var seconds_span = clock.querySelector("#seconds");

  if (endtime == null) {
    days_span.innerHTML = "0";
    hours_span.innerHTML = "0";
    minutes_span.innerHTML = "0";
    seconds_span.innerHTML = "0";
  } else {
    function update_clock() {
      var t = time_remaining(endtime);
      days_span.innerHTML = t.days;
      hours_span.innerHTML = ("0" + t.hours).slice(-2);
      minutes_span.innerHTML = ("0" + t.minutes).slice(-2);
      seconds_span.innerHTML = ("0" + t.seconds).slice(-2);
    }
    update_clock();
    setInterval(update_clock, 1000);
  }
}
