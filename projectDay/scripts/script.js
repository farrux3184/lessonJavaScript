  'use strict';

const dataYear = (deadline) => {
  let today = document.querySelector('.day'),
    weekday = document.querySelector('.weekday'),
    time = document.querySelector('.time'),
    remained = document.querySelector('.remained');
  
const timing = () => {
  let dateNewYear = new Date(deadline),
    dateNow = new Date(),
    hoursNow = dateNow.getHours(),
    dayNow = dateNow.getDay(),
    minutesNow = dateNow.getMinutes(),
    secondsNow = dateNow.getSeconds(),
    timeRemaining = (dateNewYear - dateNow) / 1000,
    day = Math.floor(timeRemaining / 60 / 60 / 24);
    return { dateNow, dayNow, hoursNow, minutesNow, secondsNow, day};
}

let exitScreen = setInterval (() => {
  let times = timing();
  // приветствие
  if (times.hoursNow >= 6 && times.hoursNow <= 17){
    today.textContent = 'день';
  } else if (times.hoursNow >= 18 && times.hoursNow <= 20) {
    today.textContent = 'вечер';
  } else if (times.hoursNow <= 5 && times.hoursNow >= 21) {
    today.textContent = 'ночи';
  }
  // день недели
  if (times.dayNow === 0) {
    weekday.textContent = 'Воскресенье';
  } else if (times.dayNow === 1){
    weekday.textContent = 'Понедельник';
  } else if (times.dayNow === 2) {
    weekday.textContent = 'Вторник';
  } else if (times.dayNow === 3) {
    weekday.textContent = 'Среда';
  } else if (times.dayNow === 4) {
    weekday.textContent = 'Четверг';
  } else if (times.dayNow === 5) {
    weekday.textContent = 'Пьятница';
  } else if (times.dayNow === 6) {
    weekday.textContent = 'Субота';
  }
  time.textContent = times.dateNow.toLocaleTimeString();
  remained.textContent = times.day;
  }, 1000)
   
}
  dataYear('31 December 2020');
