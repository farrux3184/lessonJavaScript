window.addEventListener('DOMContentLoaded', function() {
  'use strict';

// TIMER
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
// MENU
const toogleMenu = () => {
const menu = document.querySelector('menu'),
    header = document.querySelector('header');
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
  menu.classList.toggle('active-menu');
}

header.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.menu');
  if (target){
     handlerMenu();
  } else {
    if (!target){
    menu.classList.remove('active-menu');
    }
    }
});
menu.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('close-btn')) {
    handlerMenu();
  } else {
     target = target.closest('ul>li');
     if (target){
      handlerMenu();
     }
  }
});
};
toogleMenu();

// POPUP
const togglePopUp = () => {
const popup = document.querySelector('.popup'),
  popupCont = document.querySelector('.popup-content'),
  popupBtn = document.querySelectorAll('.popup-btn');

  let widthWin = document.documentElement.clientWidth;
  window.onresize = () => {
   widthWin = document.documentElement.clientWidth;
}

popupBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
    popup.style.display = 'block'; 
    if (widthWin > 768) { 
      let start = Date.now(); 
      let timer = setInterval(() => {
        let timePassed = Date.now() - start; 
        if (timePassed >= 800) {
          clearInterval(timer);
        }
        draw(timePassed); 
      });
      let draw = (timePassed) => {
        let wContent = +getComputedStyle(popupCont).width.split('px')[0]; 
        wContent = -wContent / 2 + 50 + 'px'; 
        popupCont.style.left = timePassed / 16 + '%'; 
        popupCont.style.marginLeft = wContent; 
      };
    }
  });
}); 

popup.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('popup-close')){
    popup.style.display = 'none';
  } else {
     target = target.closest('.popup-content');
     if (!target) {
       popup.style.display = 'none';
     }
  }
});
};
togglePopUp();
// TABS
const tabs = () => {
const tabHeader = document.querySelector('.service-header'),
  tab = tabHeader.querySelectorAll('.service-header-tab'),
  tabContent = document.querySelectorAll('.service-tab');

  const toogleTabContent = (index) => {
    for(let i = 0; i < tabContent.length; i++){
      if(index === i){
        tab[i].classList.add('active');
        tabContent[i].classList.remove('d-none');
      }else {
        tab[i].classList.remove('active');
        tabContent[i].classList.add('d-none');
      }
    }
  };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target){
        tab.forEach((item, i) => {
          if (item === target){
            toogleTabContent(i)
          }
        });
      }
    });
};
tabs();
// SLIDER
const slider = () => {
  const slide = document.querySelectorAll('.portfolio-item'),
    btn = document.querySelectorAll('.portfolio-btn'),
    slider = document.querySelector('.portfolio-content'),
    newDots = document.querySelector('.portfolio-dots');

  slide.forEach((elem) => {
     let liFirst = document.createElement('li');
      liFirst.classList.add('dot');
      newDots.prepend(liFirst);
    });
  const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active')
    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);

    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);

    };
    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length){
          currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
      };
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')){
        dot.forEach((elem, index) => {
          if (elem === target){
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length){
        currentSlide = 0;
      }
      if (currentSlide < 0){
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });
    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') ||
       event.target.matches('.dot')){
         stopSlide();
       }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
        startSlide();
      }
    });
    startSlide(2000);
};
slider();
// CALCULATED
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
      inputNumber = calcBlock.querySelectorAll('input'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');

  inputNumber.forEach(el => {
    el.addEventListener('input', () => {
      el.value = el.value.replace(/[^0-9]/);
    });
  });
  const countSum = () => {
    let total = 0,
    countValue = 1,
    dayValue = 1;
    const tapeValue = calcType.options[calcType.selectedIndex].value,
     squareValue = +calcSquare.value;

     if(calcCount.value > 1){
       countValue += (calcCount.value -1) / 10;
      }

      if(calcDay.value && calcDay.value < 5){
        dayValue  *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

     if (tapeValue && squareValue){
       total = price * tapeValue * squareValue * countValue * dayValue;
     } 
    totalValue.textContent = Math.floor(total);
  };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      // if (target.matches('.calc-type') || target.matches('.calc-square') ||
      // target.matches('.calc-day') || target.matches('.calc-count')){
      //   countSum();
      // }

      // if (target === calcType || target === calcSquare ||
      //    target ===  calcDay || target === calcCount){
      //      countSum();
      //    }

      if(target.matches('select') || target.matches('input')){
        countSum();
      }
    });
};
calc(100);
// COMMANDS
const command = () => {
  const command = document.querySelector('.command'),
    comPhoto = command.querySelectorAll('img');
let att;
  comPhoto.forEach((elem, i) => {
    
    elem.addEventListener('mouseover', (event) => {
      att = elem.getAttribute('src');
    if (event.target.matches('.command__photo')) {
     event.target.src = event.target.dataset.img;
    }
    })
    });
  comPhoto.forEach((elem, index) => {
    elem.addEventListener('mouseout', (event) => {
      if (event.target.matches('.command__photo')) {
        event.target.src = att;
      }
    })
  });
};
  command();

  // VALIDATED
  const valid = new Validator({
    selector: '#form1',
    pattern: {
      cirilic: /^[а-яА-ЯёЁa]+$/,
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'form1-name': [
         ['notEmpty'],
         ['pattern', 'cirilic']
       ],
       'form1-phone': [
         ['notEmpty'],
         ['pattern', 'phone']
       ],
       'form1-email': [
         ['notEmpty'],
         ['pattern', 'email']
       ]
    }
  });
  valid.init();
  const valid2 = new Validator({
    selector: '#form2',
    pattern: {
      cirilic: /^[а-яА-ЯёЁa]+$/,
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'form2-name': [
        ['notEmpty'],
        ['pattern', 'cirilic']
      ],
        'form2-message': [
          ['notEmpty'],
          ['pattern', 'cirilic']
        ],
        'form2-phone': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'form2-email': [
          ['notEmpty'],
          ['pattern', 'email']
        ]
    }
  });
  valid2.init();
const valid3 = new Validator({
  selector: '#form3',
  pattern: {
    cirilic: /^[а-яА-ЯёЁa]+$/,
    phone: /^\+?[78]([-()]*\d){10}$/,
    email: /^\w+@\w+\.\w{2,}$/
  },
  method: {
    'form3-name': [
      ['notEmpty'],
      ['pattern', 'cirilic']
    ],
    'form3-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form3-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ]
  }
});
valid3.init();
});

