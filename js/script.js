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

  let start = document.getElementById('start'),
      buttonPlus1 = document.querySelectorAll('.btn_plus')[1],
      
      expensesPlus = buttonPlus1,
      additionalIncomeItem0 = document.querySelectorAll('.additional_income-item')[0],
      additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[1],
      checkBox = document.querySelector('#deposit-check'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      budgetDayValue = document.querySelector('.budget_day-value'),
      expensesMonthValue = document.querySelector('.expenses_month-value'),
      additionalIncomeValue = document.querySelector('.additional_income-value'),
      additionalEexpensesValue = document.querySelector('.additional_expenses-value'),
      incomePeriodValue = document.querySelector('.income_period-value'),
      targetMonthValue = document.querySelector('.target_month-value'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeAmount = document.querySelector('.income-amount'),
      expensesTitle = document.querySelector('.expenses-title'),
      
      expensesItems = document.querySelectorAll('.expenses-items'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      periodSelect = document.querySelector('.period-select');
let appData = {
  mission: 800000,
  period: 6,
  day: 30,
  
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  income: {},
  expenses: {},   // обязательный расход
  addExpenses: [],
  expensesMonth: {},
  expensesMonth2: 0,
  expensesMonth3: [],
  getTargetMonth: {},
  budget: 0, // доход
  start: function () {
      if (salaryAmount.value === ''){
        alert('Ошибка, поле "Месячный доход" должно быть заполнино!');
        return;
      }
    appData.budget = salaryAmount.value;
    appData.getExpenses();
    appData.budgetMonth();
   
    appData.showResult();
    console.log();
    console.log('budget', appData.budget);
  },
  console.log('budget', appData.budget);

  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth();
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
  },
  addExpensesBlock: function() {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
      }
  },
  getExpenses: function(){
      expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !== ''){
           appData.expenses[itemExpenses] = +cashExpenses;
         }
      });
  },
  budgetMonth: function () {
    return appData.budget - appData.expenses;
    
  },
  // asking: function () {
  //   if(confirm('есть ли у вас дополнительный зароботок?')){
  //   const itemIncome = function () {
  //   let validateIncome;
  //   do {
  //   validateIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
  //   }
  //   while (!isString(validateIncome));
  //    return validateIncome;
  //   };
  //   const cashIncome = function () {
  //     let validIncome;
  //   do {
  //   validIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
  //   }
  //   while (!isNumber(validIncome));
  //   return validIncome;
  //   };
  //   appData.income[itemIncome()] = cashIncome();
  // }
  //   const addExpenses = function () {
  //   let validExpenses;
  //   do {
  //   validExpenses = prompt('введите возможные расходы в месяц через запятую', 'интернет, лекарства, квартплата');
  //   }
  //   while (!isString(validExpenses));
  //   return validExpenses;
  //   };
    
  //   appData.addExpenses = addExpenses().split(', ');
  //   appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
  //   },
  targetMounth: function () {  
    return appData.mission / appData.budgetMonth;
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
    return appData.budgetMonth * appData.period;
    },
  // buttonPlus0: function() {
  //   let butPlus0;
  //   butPlus0 = document.getElementsByTagName('button')[0];
  //   return butPlus0;
  //   appData.buttonPlus0 = butPlus0;
  // },
  // buttonPlus1: function () {
  //   let butPlus1;
  //   butPlus1 = document.getElementsByTagName('button')[0];
  //   return butPlus1;
  //   appData.buttonPlus1 = butPlus1;
  // },
  // buttonCalculate: function () {
  //   let buttonCalc;
  //   buttonCalc = document.getElementById('start');
  //   return buttonCalc;
  //   appData.buttonCalculate = buttonCalc;
  // },

 };
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);

// appData.budgetMonth();
appData.targetMounth();
appData.budgetDay();
appData.getStatusIncome();
appData.calcSavedMoney();
appData.getInfoDeposit();
appData.buttonCalculate();
 console.log('appData.expenses: ', appData.expenses);
 console.log('budget', appData.budget);

// console.log('expenses', appData.expenses);
// for (let key in appData){
//   console.log(' ключ: ' + key + ' значение: ' + appData[key]);
// }
// console.log('обязательный расход за месяц:', appData.expensesMonth);
// console.log(appData.statusIncome());
// console.log(appData.getStatusIncome());
// console.log(appData.calcSavedMoney());
// let str = appData.addExpenses;
// str.forEach((el, i) => {
//   let res;
//   el = el.trim();
//   res = el.replace(el[0], el[0].toUpperCase());
//   str[i] = res;
// });
// console.log('возможные расходы за месяц', str.join(', ').split(', '));
// console.log('сумма депозита:', appData.moneyDeposit, 'руб');
// console.log('процент депозита:', appData.persentDeposit, '%');
// console.log('кнопка расчёта:', appData.buttonCalculate());
// console.log('кнопка +0', appData.buttonPlus0());
// console.log('кнопка +1', appData.buttonPlus1());
// console.log('checkBox', checkBox);
// console.log('возможный доход0', additionalIncomeItem0);
// console.log('возможный доход1', additionalIncomeItem1);
// console.log('budgetMonthValue', budgetMonthValue);
// console.log('budgetDayValue: ', budgetDayValue);
// console.log('expensesMonthValue: ', expensesMonthValue);
// console.log('additionalIncomeValue: ', additionalIncomeValue);
// console.log('additionalEexpensesValue: ', additionalEexpensesValue);
// console.log('incomePeriodValue: ', incomePeriodValue);
// console.log('targetMonthValue: ', targetMonthValue);
// console.log('Месячный доход:', salaryAmount);
// console.log('Дополнительный доход:', incomeTitle);
// console.log('Сумма Дохода', incomeAmount);
// console.log('Обязательные расходы', expensesTitle);
// console.log('Сумма расхода', expensesAmount);
// console.log('Возможные расходы', additionalExpensesItem);
// console.log('Период расчета:', periodSelect);

