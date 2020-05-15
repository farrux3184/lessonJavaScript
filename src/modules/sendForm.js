// SEND-ajax-form
const sendForm = (form) => {
  const errorMessag = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы с вами свяжемся!';
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
    
  postData(formData).then((response) => {
    if(response.status !== 200){
      throw new Error('status network not 200')
    }
    statusMessage.textContent = successMessage;
  }).catch(error => {
    statusMessage.textContent = errorMessag;
    console.error(error);
  });
});
const postData = (formData) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(body)
    body: formData

  });
};
};

export default sendForm;