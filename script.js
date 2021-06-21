// These are the let statements for the program which will let the computer know what stands for what.
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// This is where the clock functions.
const clock = setInterval(
  function time () {
    var date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    // The if statements lets the computer know what to do in. certain situations.
    if (hr < 10) {
      hr = '0' + hr
    }
    if (min < 10) {
      min = '0' + min
    }
    if (sec < 10) {
      sec = '0' + sec
    }

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
  }, 1000
)
