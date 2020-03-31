'use strict';


let mission = 800000;
let money = +prompt('ваш месячный доход');
let addExpenses = prompt('Перечислите возможные расходы за месяц');
let deposit = confirm('У вас есть депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let emount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('укажите еще один обязательный расход');
let emount2 = +prompt('во сколько это обходится');
let budgetMonth = emount1 + emount2;
let remains = money - budgetMonth;
let mission2 = mission / remains;
let budgetDay = budgetMonth / 30;
let resul = mission2 > 5;
let result2 = budgetDay > 1200 ? true : false;
console.log('цель для достижения руб: ', mission);
console.log('месячный доход руб: ', money);
console.log(addExpenses.split(','));
switch (deposit) {
  case true:
    console.log('депозит в банке имеется');
    break;
  case false:
    console.log('нет денозита в банке');
    break;
}
console.log('обязательный расход №1 руб: ', emount1);
console.log('обязательный расход №2 руб: ', emount2);
console.log('месячный бюджет руб:', budgetMonth);
console.log('дневной бюджет руб:', Math.floor(budgetDay));
console.log('месяцев до цели: ', Math.ceil(mission2));
if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay < 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay => 0) {
  console.log('Что-то пошло не так!');
}

