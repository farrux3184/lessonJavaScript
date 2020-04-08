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
  expensesMonth: 0,
  getExpensesMonth: [], 
  getTargetMonth: {},
  asking: function () {
     for (let i = 0; i < 2; i++) {
      appData.getExpensesMonth[i] = prompt(
        "Введите обязательную статью расходов", "еда");
      appData.expensesMonth += +prompt("во сколько это обходится", 2000);
      while (isNaN(parseFloat(appData.expensesMonth))) {
        appData.expensesMonth = prompt("во сколько это обходится", 2000);
      }
    }
   },
   getBudget: function () {  
    return money - appData.expensesMonth;  
   },
  targetMounth: function () {  
    return appData.mission / appData.getBudget(); 
  },
   budgetDay: function (){ 
     return appData.expensesMonth / appData.day; 
  },
   statusIncome: function () {
     if (appData.targetMounth() > 0) {  
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
for (let key in appData){
  console.log(' ключ: ' + key + ' значение: ' + appData[key]);
}
console.log('обязательный расход за месяц:', appData.expensesMonth);
console.log( appData.statusIncome());
console.log(appData.getStatusIncome());

