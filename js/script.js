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
   // targetMount2: 0,
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
   getBudget: function (money, expensesMonth) {
    return money - appData.expensesMonth;
   },
  targetMounth: function (mission, getBudget) {
    return appData.mission / appData.getBudget;
  },
  //  budgetDay: function (){
    //  for (let  )
    // return appData.day / appData.expensesMonth
  // },
   statusIncome: function () {
    if (appData.targetMonth > 0) {
    return (Math.ceil(appData.targetMonth));
    } else if (appData.targetMonth <= 0) {
    return ('цель не будет достигнута');
    }
},
getStatusIncome: function () {
  if (budgetDay > 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay > 600 && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay > 0 && budgetDay < 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
    return ('Что-то пошло не так!');
  }
 }
};
appData.asking();
appData.getBudget();
appData.targetMounth ();
appData. statusIncome();
// targetMounth = month(appData.mission, appData.getBudget)

for (let key in appData){
  console.log(' ключ: ' + key + ' значение: ' + appData[key]);
}
console.log('обязательный расход за месяц:', appData.expensesMonth);
console.log(appData in appData.targetMounth);
// console.log('месяцев до цели', purpose());
