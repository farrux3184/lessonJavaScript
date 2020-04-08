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
  mission: 800000,
  period: 0,
  day: 30,
  budget: {},
  // budgetDay: 0,
  // budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: [], //обязательных расходов за месяц
  //  statusIncome: 0,
  //  targetMount: 0,
   // getBudget: {}, //Доходы минус расходы
  getTargetMonth: {}, //какой период будет достигнута цель
   // getStatusIncome: {}, //чтота пошло нетак уровень дохода
  asking: function () {
    // let expenses;
    for (let i = 0; i < 2; i++) {
      appData.getExpensesMonth[i] = prompt(
        "Введите обязательную статью расходов", "еда");
      appData.expensesMonth += +prompt("во сколько это обходится", 2000);
      while (isNaN(parseFloat(appData.expensesMonth))) {
        appData.expensesMonth = prompt("во сколько это обходится", 2000);
      }
    }
   },
   getBudget: function () {  // остаток
    return money - appData.expensesMonth;  // зарп - рас
   },
  targetMounth: function () {  // месяцы
    return appData.mission / appData.getBudget(); // миссия \ остаток
  },
   budgetDay: function (){ // днев буд
     return appData.expensesMonth / appData.day; // 30 д \ рас
  },
   statusIncome: function () {
     if (appData.targetMounth() > 0) {  // месяц
       return (Math.ceil(appData.targetMounth()));
     } else if (appData.targetMounth() <= 0) {
    return ('цель не будет достигнута');
    }
},
getStatusIncome: function () {
  if (appData.budgetDay() > 1200) {
    return ('У вас высокий уровень дохода');
  } else if (appData.budgetDay() > 600 && appData.budgetDay() < 1200) {
    return ('У вас средний уровень дохода');
  } else if (appData.budgetDay() > 0 && appData.budgetDay() < 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (appData.budgetDay() < 0) {
    return ('Что-то пошло не так! ');
  }
 }
};
appData.asking();
appData.getBudget();
appData.targetMounth();
appData.budgetDay();
appData.statusIncome();
appData.getStatusIncome();
// targetMounth = month(appData.mission, appData.getBudget)

for (let key in appData){
  console.log(' ключ: ' + key + ' значение: ' + appData[key]);
}
console.log('обязательный расход за месяц:', appData.expensesMonth);
// console.log('getBudget ', appData.getBudget());
console.log( appData.statusIncome());
console.log(appData.getStatusIncome());
// console.log('месяцев до цели: ', Math.ceil (appData.targetMounth()));
// console.log('budgetDay: ', Math.floor(appData.budgetDay()));


// console.log('mission ', appData.mission);
