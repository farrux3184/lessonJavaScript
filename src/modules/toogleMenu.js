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

    export default toogleMenu;