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

  export default command;