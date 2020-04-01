'use strict';
let mission = 800000;
// временна стоят 
// let emount1 =100 25000;
// let emount2 = 60000;
// let money = 1000000;
let money = +prompt('ваш месячный доход');
let addExpenses = prompt('Перечислите возможные расходы за месяц');
// let deposit = confirm('У вас есть депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let emount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('укажите еще один обязательный расход');
let emount2 = +prompt('во сколько это обходится');
const sum = function (a, b) {
  return a + b;
};
const getExpensesMonth = sum(emount1, emount2);
const sum2 = function (a, b) {
  return a - b;
};
const getAccumulatedMonth = sum2(money, getExpensesMonth);
// let mission2 = mission / remains;
// let resul = mission2 > 5;
const accumulatedMonth = getAccumulatedMonth;
const budgetDay = accumulatedMonth / 30;
// let result2 = budgetDay > 1200 ? true : false;
function sum3(a, b) {
  return a / b;
}
const getTargetMonth = sum3(mission, accumulatedMonth);
const showTypeOf = function (data) {
  console.log(data);
};
showTypeOf(mission);
showTypeOf(money);
showTypeOf(getExpensesMonth);
showTypeOf(getAccumulatedMonth);
showTypeOf(Math.floor(budgetDay));
showTypeOf(Math.ceil(getTargetMonth));
// console.log('цель для достижения руб: ', mission);
console.log('расход: ', getExpensesMonth);
// console.log('месячный доход руб: ', money);
console.log(addExpenses.split(','));
console.log('месяцев до цели:', Math.ceil(getTargetMonth));
console.log('дневной бюджет руб:', Math.floor(budgetDay));
let getStatusIncome = function(){
  if (budgetDay > 1200) {
    return('У вас высокий уровень дохода');
  } else if (budgetDay > 600 && budgetDay < 1200) {
    return('У вас средний уровень дохода');
  } else if (budgetDay > 0 && budgetDay < 600) {
    return('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay => 0) {
    return('Что-то пошло не так!');
  }
};
console.log(getStatusIncome());
// switch (deposit) {
//   case true:
//     console.log('депозит в банке имеется');
//     break;
//   case false:
//     console.log('нет денозита в банке');
//     break;
// }
// console.log('обязательный расход №1 руб: ', emount1);
// console.log('обязательный расход №2 руб: ', emount2);
// console.log('месяцев до цели: ', Math.ceil(mission2));
// if (budgetDay > 1200) {
//   console.log('“У вас высокий уровень дохода”');  
// } 
// else if (budgetDay > 600) {
//   console.log('“К сожалению у вас уровень дохода ниже среднего”');
// }
// else  {
// console.log('“Что то пошло не так”');
// }