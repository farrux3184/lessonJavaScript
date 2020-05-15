const validator = () => {
  const inputs = document.querySelectorAll('input[name]'),
    button = document.querySelectorAll('.btn');
    
  for (let input of inputs){
  input.addEventListener('blur', function(){
        let name = this.name;
        let value = this.value;
        let check;
        // console.log(input.value);  
    switch (name) {
    case 'user_name':
    check = /^[а-яА-ЯёЁa]+$/.test(value);
    // check = /^\w+@\w+\.\w{2,}$/.test(value);
    break;
    case 'user_email':
    // check = /^\d+$/.test(value);
    check = /^\w+@\w+\.\w{2,}$/.test(value);
    break;
    case 'user_phone':
    check = /^\+?[78]([-()]*\d){10}$/.test(value);
    break;
    case 'user_message':
    check = /^[а-яА-ЯёЁa]+$/.test(value);
    break;
    }
  if (check) {
   if (input.nextElementSibling && input.nextElementSibling.classList.contains('validator-error')){
      input.nextElementSibling.remove();
   }else {
     return;
   }
   button.forEach((item) => {
    item.removeAttribute('disabled', 'false');
  });
  } else {
  if (input.nextElementSibling && input.nextElementSibling.classList.contains('validator-error')) {
  return;
  }
  button.forEach((item) => {
    item.setAttribute('disabled', 'true');
  });
  const errorDiv = document.createElement('div');
  errorDiv.textContent = 'Ошибка в этом поле';
  errorDiv.classList.add('validator-error');
  input.insertAdjacentElement('afterend', errorDiv);
          }
  const style = document.createElement('style');
  style.textContent = `
  .validator-error {
  font-size: 12px;
  font-family: sans-serif;
  color: red
  }
  `;
  document.head.appendChild(style);
      });
  }
  
};
export default validator;