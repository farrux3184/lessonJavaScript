'use strict';
const isNumber = function(mon){
  return !isNaN(parseFloat(mon)) && isFinite(mon)
}
let mission = 800000;
let money;
// let addExpenses = prompt('Перечислите расходы за месяц');
let expenses = [];
do{
 money = prompt('месячный доход?', 100000);
}
while (!isNumber(money));
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
// typeof
getExpensesMonth();
console.log('money:', money);
const expensesAmount = getExpensesMonth;
console.log('расход за месяц: ', (getExpensesMonth));
function Amount(money, expensesAmount){
  return (money - expensesAmount);
};
const expensesAmount2 = Amount(money, expensesAmount);
console.log('остаток за месяц: ', expensesAmount2);

// let accumulatedMonth  = getAccumulatedMonth;
// // console.log(accumulatedMonth);
// function targetMonth(mission, getAccumulatedMonth){
//   return (mission / getAccumulatedMonth);
// };
// const getTargetMonth = targetMonth(mission, getAccumulatedMonth);
// console.log(Math.ceil(getTargetMonth));

// const budgetDay = accumulatedMonth / 30;

// const showTypeOf = function (data) {
//   console.log(data);
// };
// showTypeOf(mission);
// showTypeOf(money);
// showTypeOf(getAccumulatedMonth);
// showTypeOf(Math.floor(budgetDay));
// showTypeOf(Math.ceil(getTargetMonth));

// console.log('цель для достижения руб: ', mission);
// // console.log('расход: ', expensesAmount);
// console.log(expenses);
// console.log('месяцев до цели:', Math.ceil(getTargetMonth));
// console.log('дневной бюджет руб:', Math.floor(budgetDay));

// const getStatusIncome = function(){
//   if (budgetDay > 1200) {
//     return('У вас высокий уровень дохода');
//   } else if (budgetDay > 600 && budgetDay < 1200) {
//     return('У вас средний уровень дохода');
//   } else if (budgetDay > 0 && budgetDay < 600) {
//     return('К сожалению у вас уровень дохода ниже среднего');
//   } else if (budgetDay < 0) {
//     return('Что-то пошло не так!');
//   }
// };
// console.log(getStatusIncome());