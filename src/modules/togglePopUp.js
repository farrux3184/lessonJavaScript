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

export default togglePopUp;