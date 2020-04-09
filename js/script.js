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
  period: 6,
  day: 30,
  budget: {},
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  income: {},
  addExpenses: [],
  expensesMonth: {},
  // getExpensesMonth: {}, 
  getTargetMonth: {},
  asking: function () {
      
    if(confirm('есть ли у вас дополнительный зароботок?')){
      let itemIncome;
      do {
      itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
      }
      while (string(itemIncome) || itemIncome === '' || itemIncome === null);

      let cashIncome;
      do {
      cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      }
      while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
      appData.income[itemIncome] = cashIncome;
   }
        let addExpenses = prompt('введите возможные расходы в месяц через запятую', 'интернет, лекарства, квартплата');
        appData.addExpenses = addExpenses.split(', ');

        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        for (let i = 0; i < 2; i++) {
        let getExpensesMonth = prompt("Введите обязательную статью расходов", "еда");
        let expenses;
        do {
         expenses = prompt("во сколько это обходится", 2000);
        }
        while (isNaN(expenses) || expenses === '' || expenses === null);
        appData.expensesMonth[getExpensesMonth] = expenses;
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
 },
  getInfoDeposit: function(){
      if(appData.deposit){
        appData.persentDeposit = prompt('какой процент депозита?', '10');
        appData.moneyDeposit = prompt('какая сумма у вашего депозита?', 10000);
      }
  },
  calcSavedMoney: function(){
    return appData.getBudget() * appData.period;
  },
 };

appData.asking();
appData.getBudget();
appData.targetMounth();
appData.budgetDay();
appData.statusIncome();
appData.getStatusIncome();
// appData.getInfoDeposit();
appData.calcSavedMoney();
for (let key in appData){
  console.log(' ключ: ' + key + ' значение: ' + appData[key]);
}
console.log('обязательный расход за месяц:', appData.expensesMonth);
console.log( appData.statusIncome());
console.log(appData.getStatusIncome());
console.log(appData.calcSavedMoney());
console.log('возможные расходы за месяц', appData.addExpenses);
// s = s[0].toUpperCase() + s.substr(1).toLowerCase();
console.log(appData.expensesMonth);
console.log(appData.income);