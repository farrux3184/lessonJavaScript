  // VALIDATED
  const valid = new Validator({
    selector: '#form1',
    pattern: {
      cirilic: /^[а-яА-ЯёЁa '']+$/,
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
      cirilic: /^[а-яА-ЯёЁa '']+$/,
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
    cirilic: /^[а-яА-ЯёЁa '']+$/,
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
// SEND-ajax-form
  const form1 = document.getElementById('form1'),
    form2 = document.getElementById('form2'),
    form3 = document.getElementById('form3');
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
    
//     let body = {};
//   // for(let val of formData.entries()){
//   //   body[val[0]] = val[1]
//   // }
// formData.forEach((val, key) => {
//       body[key] = val;
//   });
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