'use strict';
const isNumber = function (mon) {
  return !isNaN(parseFloat(mon)) && isFinite(mon)
}
let money;
do {
  money = prompt('месячный доход?', 100000);
}
while (!isNumber(money));

let appData = {
  budget:{},
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: [], //обязательных расходов за месяц
  expenses: 0,
  getAccumulatedMonth: {}, //Доходы минус расходы
  getTargetMonth: {}, //какой период будет достигнута цель
  getStatusIncome: {}, //чтота пошло нетак уровень дохода
  asking: function(){
    // let expenses;
    for (let i = 0; i < 2; i++) {
      appData.getExpensesMonth[i] = prompt('Введите обязательную статью расходов', 'еда');
      appData.expenses += +prompt('во сколько это обходится', 2000);
      while (isNaN(parseFloat(appData.expenses))) {
        appData.expenses = prompt('во сколько это обходится', 2000);
      }
      
     }
    }
 }
appData.asking();

for (let key in appData){
  console.log(' ключ: ' + key + ' значение: ' + appData[key]);
}



// console.log('2', appData.expenses);
// console.log(appData.getExpensesMonth);
let mission = 800000;
// let expenses = [];
// console.log('цель для достижения руб: ', mission);
// console.log('месячный доход: ', money);

// appData.getExpensesMonth = function () {
//   let emount = 0;
//   for (let i = 0; i < 2; i++) {
//     expenses[i] = prompt('Введите обязательную статью расходов', 'еда');
//     emount += +prompt('во сколько это обходится', 2000);
//     while (isNaN(parseFloat(emount))) {
//       emount = +prompt('во сколько это обходится', 2000);
//     }
//   }
//   console.log('список расходов:', expenses);
//   console.log('расход за месяц: ', emount);
//   return emount;
// };
// const expensesAmount = appData.getExpensesMonth();
////////////////////////////////////////////////////////////////
// function Amount(money, expensesAmount) {
//   return (money - expensesAmount);
// };
// // appData.getAccumulatedMonth = Amount(money, expensesAmount);
// console.log('остаток за месяц: ', appData.getAccumulatedMonth);

// function Month(mission, getAccumulatedMonth) {
//   return (mission / appData.getAccumulatedMonth);
// };
// appData.getTargetMonth = Month(mission, appData.getAccumulatedMonth);
// const purpose = function () {
//   if (appData.getTargetMonth > 0) {
//     return (Math.ceil(appData.getTargetMonth));
//   } else if (appData.getTargetMonth <= 0) {
//     return ('цель не будет достигнута');
//   }
// };
// console.log(purpose());
// const budgetDay = appData.getAccumulatedMonth / 30;
// console.log('дневной бюджет руб:', Math.floor(budgetDay));
// appData.getStatusIncome = function () {
//   if (budgetDay > 1200) {
//     return ('У вас высокий уровень дохода');
//   } else if (budgetDay > 600 && budgetDay < 1200) {
//     return ('У вас средний уровень дохода');
//   } else if (budgetDay > 0 && budgetDay < 600) {
//     return ('К сожалению у вас уровень дохода ниже среднего');
//   } else if (budgetDay < 0) {
//     return ('Что-то пошло не так!');
//   }
// };
// console.log(appData.getStatusIncome());