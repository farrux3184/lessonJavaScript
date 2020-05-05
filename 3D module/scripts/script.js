window.addEventListener('DOMContentLoaded', function() {
  'use strict';

// timer
const countTimer = (deadline) => {
  let timeHours = document.querySelector('#timer-hours'),
      timeMinutes = document.querySelector('#timer-minutes'),
      timeSeconds = document.querySelector('#timer-seconds');

const getTimeRemaining = () => {
  let dateStop = new Date(deadline),
      dateNow = new Date(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
      return {timeRemaining, hours, minutes, seconds};
      }

      const updateClock = () => {
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
      // updateClock()
}
countTimer('15 may 2020');
// menu
const toogleMenu = () => {
const menuBtn = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItem = menu.querySelectorAll('ul>li');

    menuBtn.addEventListener('click', () => {
       if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
          menu.style.transform = `translate(0)`;
       }else{
         menu.style.transform = `translate(-100%)`;
       }
    });
    closeBtn.addEventListener('click', () => {
      menu.style.transform = `translate(-100%)`;
    });
    menuItem.forEach.addEventListener('click', () => {
      menu.style.transform = `translate(-100%)`;
    });

};
toogleMenu();


});

