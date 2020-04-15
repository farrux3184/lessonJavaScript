'use strict';
const advertising = document.querySelector('.adv'),
      books = document.querySelector('.books'),
      book0 = document.querySelectorAll('.book')[0],
      book1 = document.querySelectorAll('.book')[1],
      book2 = document.querySelectorAll('.book')[2],
      book3 = document.querySelectorAll('.book')[3],
      book4 = document.querySelectorAll('.book')[4],
      book5 = document.querySelectorAll('.book')[5],
      book6 = document.querySelectorAll('.book')[6],
      backgr = document.querySelector('html'),
      book3Text = document.querySelectorAll('a')[4],
      book02 = document.querySelectorAll('ul')[0],
      book02List = book02.querySelectorAll('li'),
      book04 = document.querySelectorAll('ul')[5],
      book04List = book04.querySelectorAll('li'),
      book05 = document.querySelectorAll('ul')[2],
      book05List = book05.querySelectorAll('li'),
      newLi = document.createElement('li'),
      
      // bodyBg = document.querySelector('body');
     bodyBg = document.body.style.background = "url('../image/you-dont-know-js.jpg')";
      // bodyBg.setAttribute('style', 'background:red');
      newLi.textContent = 'Глава 8: За пределами ES6';
      book3Text.textContent = 'Книга 3. this и Прототипы Объектов';

          
book02List[1].after(book02List[3]);
book02List[3].after(book02List[6]);
book02List[6].after(book02List[8]);
book02List[9].after(book02List[2]);
book04List[1].after(book04List[9]);
book04List[7].after(book04List[5]);
book04List[4].after(book04List[2]);
book05List[9].before(newLi);
book0.before(book1);
book2.remove();
book4.after(book3);
books.append(book2);
backgr.append();
advertising.remove();
// console.log(bodyBg);
