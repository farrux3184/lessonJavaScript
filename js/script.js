'use strict';
let mission = 800000;
let money = +prompt('ваш месячный доход');
let addExpenses = prompt('Перечислите возможные расходы за месяц');
let expenses1 = prompt('Введите обязательную статью расходов');
let emount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('укажите еще один обязательный расход');
let emount2 = +prompt('во сколько это обходится');
let getExpensesMonth = emount2 + emount1;
function expens(emount1, emount2){
  return money - (emount1 + emount2);
};
const getAccumulatedMonth = expens(emount1, emount2)
console.log(getAccumulatedMonth);
let accumulatedMonth  = getAccumulatedMonth;
console.log(accumulatedMonth);
function targetMonth(mission, getAccumulatedMonth){
  return (mission / getAccumulatedMonth);
};
const getTargetMonth = targetMonth(mission, getAccumulatedMonth);
console.log(getTargetMonth);
const budgetDay = accumulatedMonth / 30;
const showTypeOf = function (data) {
  console.log(data);
};
showTypeOf(mission);
showTypeOf(money);
showTypeOf(getAccumulatedMonth);
showTypeOf(Math.floor(budgetDay));
showTypeOf(Math.ceil(getTargetMonth));
console.log('цель для достижения руб: ', mission);
console.log('расход: ', getExpensesMonth);
console.log(addExpenses.split(','));
console.log('месяцев до цели:', Math.ceil(getTargetMonth));
console.log('дневной бюджет руб:', Math.floor(budgetDay));
const getStatusIncome = function(){
  if (budgetDay > 1200) {
    return('У вас высокий уровень дохода');
  } else if (budgetDay > 600 && budgetDay < 1200) {
    return('У вас средний уровень дохода');
  } else if (budgetDay > 0 && budgetDay < 600) {
    return('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
    return('Что-то пошло не так!');
  }
};
console.log(getStatusIncome());
