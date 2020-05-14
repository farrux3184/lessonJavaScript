const countTimer = (deadline) => {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
  
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline),
        dateNow = new Date(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
        return {timeRemaining, hours, minutes, seconds};
    }
  
  const formatTime = (data) => {
    if (data < 10) {
      data = '0' + data;
    }
    return data;
  }
  let updateClock = setInterval(() => {
    let timer = getTimeRemaining();
    timerHours.textContent = formatTime(timer.hours);
    timerMinutes.textContent = formatTime(timer.minutes);
    timerSeconds.textContent = formatTime(timer.seconds);
  
    if (timer.timeRemaining < 0) {
      clearInterval(updateClock);
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  }, 1000);
  }
  export default countTimer; 