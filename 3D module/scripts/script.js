window.addEventListener('DOMContentLoaded', function() {
  'use strict';

// timer
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
countTimer('15 may 2020');
// menu
const toogleMenu = () => {
const menuBtn = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li');
    
    
 // первый вариант
// const handlerMenu = () => {
//  if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
//    menu.style.transform = `translate(0)`;
//  } else {
//    menu.style.transform = `translate(-100%)`;
//  }
// };

// второй вариант
const handlerMenu = () => {
  menu.classList.toggle('active-menu')
}

menuBtn.addEventListener('click', handlerMenu )
closeBtn.addEventListener('click', handlerMenu);
 // menu list v1 
menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
 // menu list v2 
// for(let i = 0; i < menuItems.length; i++){
//   menuItems[i].addEventListener('click', handlerMenu);
// }

};
toogleMenu();

// popUp
const togglePopUp = () => {
const popup = document.querySelector('.popup'),
  popupCont = document.querySelector('.popup-content'),
  popupBtn = document.querySelectorAll('.popup-btn'),
  popupClose = popup.querySelector('.popup-close');

  let widthWin = document.documentElement.clientWidth;
  window.onresize = () => {
   widthWin = document.documentElement.clientWidth;
}

popupBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
    popup.style.display = 'block'; // показать попап
    if (widthWin > 768) { // если ширина экрана больше заданного числа, то запустить анимацию
      let start = Date.now(); // получить стартовое время анимации (в момент клика)
      let timer = setInterval(() => {
        let timePassed = Date.now() - start; // запуск таймера, отнять от текущего реального времени стартовое время, после клика
        if (timePassed >= 800) {
          clearInterval(timer); // если время достигло определенного числа удалить setInterval 
          return;
        }
        draw(timePassed); // отрисовка анимации 
      });
      let draw = (timePassed) => {
        let wContent = +getComputedStyle(popupCont).width.split('px')[0]; // получить стили попап контента (блок с самой формой, а не вся обёртка, с попап )
        wContent = -wContent / 2 + 50 + 'px'; // данные для центрирования по горизонтали
        popupCont.style.left = timePassed / 16 + '%'; // центрирование по горизонтали
        popupCont.style.marginLeft = wContent; // центрирование по горизонтали
      };
    }
  });
}); 
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
  popupCont.style = 'none';
});
};
togglePopUp();


});

