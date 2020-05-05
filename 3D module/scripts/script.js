
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

// timer
const countTimer = (deadline) => {
  let timerHours = document.querySelector('#timer-hours');
  let  timerMinutes = document.querySelector('#timer-minutes');
  let timerSeconds = document.querySelector('#timer-seconds');


const getTimeRemaining = () => {
  let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
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

let updateClock = setInterval (() => {
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
countTimer('08 may 2020');
});