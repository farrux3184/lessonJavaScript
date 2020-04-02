'use strict';
const isNumber = function(mon){
  return !isNaN(parseFloat(mon)) && isFinite(mon)
}
let mission = 800000;
let money;
let expenses = [];
do{
 money = prompt('месячный доход?', 100000);
}
while (!isNumber(money));
console.log('цель для достижения руб: ', mission);
console.log('месячный доход: ', money);
const getExpensesMonth = function(){
  let emount = 0;
  for (let i = 0; i < 2; i++) {
         expenses[i] = prompt('Введите обязательную статью расходов', 'еда');
         emount += +prompt('во сколько это обходится', 2000);
          while (isNaN(parseFloat(emount))) {
        emount = +prompt('во сколько это обходится', 2000);
    } 
     }
   console.log('список расходов:',expenses);
  console.log('расход за месяц: ', emount);
  return emount;
};
const expensesAmount = getExpensesMonth();

function Amount(money, expensesAmount){
  return (money - expensesAmount);
};
const remains = Amount(money, expensesAmount);
console.log('остаток за месяц: ', remains);
function targetMonth(mission, remains){
  return (mission / remains);
};
const getTargetMonth = targetMonth(mission, remains);
const purpose = function(){
  if (getTargetMonth > 0) {
    return (Math.ceil(getTargetMonth));
  } else if (getTargetMonth <= 0) {
    return ('цель не будет достигнута');
  }
};
console.log(purpose());
const budgetDay = remains / 30;
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