'use strict';
const isNumber = function (mon) {
  return !isNaN(parseFloat(mon)) && isFinite(mon)
}
let isString = function (n) {
  let num = Number(n);
  if (typeof n === 'string' && isNaN(num)) {
    return true;
  }
  return false;
};
let money;
const additionalIncomeItem0 = document.querySelectorAll('.additional_income-item')[0];
const additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[1];
const checkBox = document.querySelector('#deposit-check')
const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const additionalEexpensesValue = document.querySelector('.additional_expenses-value');
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const periodSelect = document.querySelector('.period-select');
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
  expensesMonth2: 0,
  expensesMonth3: [],
  getTargetMonth: {},
  asking: function () {
    if(confirm('есть ли у вас дополнительный зароботок?')){
    const itemIncome = function () {
    let validateIncome;
    do {
    validateIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
    }
    while (!isString(validateIncome));
     return validateIncome;
    };
    const cashIncome = function () {
      let validIncome;
    do {
    validIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
    }
    while (!isNumber(validIncome));
    return validIncome;
    };
    appData.income[itemIncome()] = cashIncome();
  }
    const addExpenses = function () {
    let validExpenses;
    do {
    validExpenses = prompt('введите возможные расходы в месяц через запятую', 'интернет, лекарства, квартплата');
    }
    while (!isString(validExpenses));
    return validExpenses;
    };
    
    appData.addExpenses = addExpenses().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
    let validMonth
    const getExpensesMonth = function () {
    do {
    validMonth = prompt("Введите обязательную статью расходов", "еда");
    }
    while (!isString(validMonth));
    return validMonth;
    };
    appData.expensesMonth3 = getExpensesMonth();

    const expenses = function () {
      let validExpenses;
    do {
    validExpenses = +prompt("во сколько это обходится", 2000);
    }
    while (!isNumber(validExpenses));
    return validExpenses;
    };
    appData.expensesMonth2 += expenses();
    appData.expensesMonth[appData.expensesMonth3] = appData.expensesMonth2;
    
    }
    },
  getBudget: function () {  
    return money - appData.expensesMonth2;  
    },
  targetMounth: function () {  
    return appData.mission / appData.getBudget(); 
    },
  budgetDay: function (){ 
    return appData.expensesMonth2 / appData.day; 
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
      const persentDeposit = function () {
      let validPers;
        do {
           validPers = prompt('какой процент депозита?', '10');
        }
       while (!isNumber(validPers));
       return validPers;
      };
      appData.persentDeposit = persentDeposit();
      const moneyDeposit = function () {
        let validDeposit;
        do {
          validDeposit = prompt('какая сумма у вашего депозита?', 10000);
        }
        while (!isNumber(validDeposit));
        return validDeposit;
      };
      appData.moneyDeposit = moneyDeposit();
    }
    },
  calcSavedMoney: function(){
    return appData.getBudget() * appData.period;
    },
  buttonPlus0: function() {
    let butPlus0;
    butPlus0 = document.getElementsByTagName('button')[0];
    return butPlus0;
    appData.buttonPlus0 = butPlus0;
  },
  buttonPlus1: function () {
    let butPlus1;
    butPlus1 = document.getElementsByTagName('button')[0];
    return butPlus1;
    appData.buttonPlus1 = butPlus1;
  },
  buttonCalculate: function () {
    let buttonCalc;
    buttonCalc = document.getElementById('start');
    return buttonCalc;
    appData.buttonCalculate = buttonCalc;
  },

 };

appData.asking();
appData.getBudget();
appData.targetMounth();
appData.budgetDay();
appData.getStatusIncome();
appData.calcSavedMoney();
appData.getInfoDeposit();
appData.buttonCalculate();
for (let key in appData){
  console.log(' ключ: ' + key + ' значение: ' + appData[key]);
}
console.log('обязательный расход за месяц:', appData.expensesMonth);
console.log(appData.statusIncome());
console.log(appData.getStatusIncome());
console.log(appData.calcSavedMoney());
let str = appData.addExpenses;
str.forEach((el, i) => {
  let res;
  el = el.trim();
  res = el.replace(el[0], el[0].toUpperCase());
  str[i] = res;
});
console.log('возможные расходы за месяц', str.join(', ').split(', '));
console.log('сумма депозита:', appData.moneyDeposit, 'руб');
console.log('процент депозита:', appData.persentDeposit, '%');
console.log('кнопка расчёта:', appData.buttonCalculate());
console.log('кнопка +0', appData.buttonPlus0());
console.log('кнопка +1', appData.buttonPlus1());
console.log('checkBox', checkBox);
console.log('возможный доход0', additionalIncomeItem0);
console.log('возможный доход1', additionalIncomeItem1);
console.log('budgetMonthValue', budgetMonthValue);
console.log('budgetDayValue: ', budgetDayValue);
console.log('expensesMonthValue: ', expensesMonthValue);
console.log('additionalIncomeValue: ', additionalIncomeValue);
console.log('additionalEexpensesValue: ', additionalEexpensesValue);
console.log('incomePeriodValue: ', incomePeriodValue);
console.log('targetMonthValue: ', targetMonthValue);
console.log('Месячный доход:', salaryAmount);
console.log('Дополнительный доход:', incomeTitle);
console.log('Сумма Дохода', incomeAmount);
console.log('Обязательные расходы', expensesTitle);
console.log('Сумма расхода', expensesAmount);
console.log('Возможные расходы', additionalExpensesItem);
console.log('Период расчета:', periodSelect);

