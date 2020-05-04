window.addEventListener('DOMContentLoaded', function() {
  'use strict';

// timer
function countTimer(deadline){
  let timeHours = document.querySelector('#timer-hours'),
      timeMinutes = document.querySelector('#timer-minutes'),
      timeSeconds = document.querySelector('#timer-seconds');


function getTimeRemaining(){
  let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60) % 24,
      day = Math.floor(timeRemaining / 60 / 60 / 24);
      return {timeRemaining, hours, minutes, seconds};
      }

      function updateClock(){
        let timer = getTimeRemaining();
        if (timer.timeRemaining > 0) {
          if (timer.hours > 9){
          timeHours.textContent = timer.hours;
          } else {
            timeHours.textContent = '0' + timer.hours;
          }
          if (timer.minutes > 9){
          timeMinutes.textContent = timer.minutes;
          } else {
            timeMinutes.textContent = '0' + timer.minutes;
          }
          if (timer.seconds > 9){
          timeSeconds.textContent = timer.seconds;
          } else {
            timeSeconds.textContent = '0' + timer.seconds;
          }
        } else {
          timeHours.textContent = '0' + 0;
          timeMinutes.textContent = '0' + 0;
          timeSeconds.textContent = '0' + 0;
        }

         if (timer.timeRemaining > 0) {
          setInterval(updateClock, 1000);
        }

      }
      updateClock()
}
countTimer('06 may 2020');
});