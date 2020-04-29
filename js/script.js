'use strict';
 
const start = document.getElementById("start"); //start
let expensesPlus = document.querySelectorAll(".btn_plus")[1]; //plus расхода
const reset = document.getElementById('cancel');
const incomeItemPlus = document.querySelectorAll(".btn_plus")[0]; // доп зароб плюс
const additionalIncomeItem = document.querySelectorAll(".additional_income-item"); // воз дох ввод
const checkBox = document.querySelector("#deposit-check");
const budgetMonthValue = document.querySelector(".budget_month-value"); // доход за месяц
const budgetDayValue = document.querySelector(".budget_day-value"); // дневной доход
const expensesMonthValue = document.querySelector(".expenses_month-value"); // расход за месяц
const additionalIncomeValue = document.querySelector(".additional_income-value"); // воз дох выв
const additionalEexpensesValue = document.querySelector(".additional_expenses-value"); // воз рас выв
const incomePeriodValue = document.querySelector(".income_period-value"); // накоп за период
const targetMonthValue = document.querySelector(".target_month-value"); // цел достижения мес выв
const salaryAmount = document.querySelector(".salary-amount"); // месячный доход
const incomeAmount = document.querySelector(".income-amount"); //Дополнительный доход сумма ввод
let expensesItems = document.querySelectorAll(".expenses-items"); // обязательные расходы ввод 
const expensesTitle = document.querySelector('.expenses-title');
const additionalIncomeItems = document.querySelectorAll('.additional_income-item'); // воз доход
const cashExpenses = document.querySelector(".expenses-amount");   //обязательный расх
const additionalExpensesItem = document.querySelector(".additional_expenses-item"); // воз расх
const periodSelect = document.querySelector(".period-select"); // ползунок
const periodAmount = document.querySelector(".period-amount"); // вывод ползунка
const targetAmount = document.querySelector(".target-amount"); // цель сумм
let incomeItems = document.querySelectorAll(".income-items"); // доп доход ввод
const incomeTitle = document.querySelector('.income-title');

const isNumber = function (mon) {
      return !isNaN(parseFloat(mon)) && isFinite(mon)
    }
    const isString = function (n) {
      const num = Number(n);
      if (typeof n === 'string' && isNaN(num)) {
        return true;
      }
      return false;
    };
  
const AppData = function (){

    this.budgetDay = 0;
    this.budgetMonth = 0; // месячный доход
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.income = {}; // доп доход
    this.incomeMonth = 0; // доп дох в мес
    this.addIncome = []; // воз дох
    this.expenses = {}; // обязательный расход
    this.addExpenses = []; // возможные расходы
    this.expensesMonth = 0; // расход за месяц
    this.period = 0; // период достижения
    this.budget = 0; // доход

};

AppData.prototype.start = function () {
  const allInput = document.querySelectorAll('.data input[type = text]');
  allInput.forEach((item) => {
    item.setAttribute('disabled', 'true');
  });
  start.style.display = 'none';
  reset.style.display = 'block';
  appData.budget = +salaryAmount.value;
  this.getExpInc();
  this.getAddExrInc();
  this.getBudget();

  this.showResult();
};

AppData.prototype.reset = function () {
    const inputText = document.querySelectorAll('[type="text"]:not(.result-total)');
    const inputAll = document.querySelectorAll('input:not(.period-select)');
    start.disabled = true;
    // reset input All value
    inputAll.forEach(element => {
      element.value = '';
    });
    // reset input All disable
    inputText.forEach(element => {
      element.disabled = false;
    });
    Object.assign(this, new this.constructor());
    start.style.display = 'block';
    reset.style.display = 'none';

    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;

  incomeItems = document.querySelectorAll('.income-items');
  expensesItems = document.querySelectorAll('.expenses-items');

    incomeItems.forEach((item, i) => {
      if (i !== 0) {
        item.remove();
      }
    });
    expensesPlus.style.display = 'block';

    expensesItems.forEach((item, i) => {
      if (i !== 0) {
        item.remove();
      }
    });
    incomeItemPlus.style.display = 'block';
  };
  // вывод результата
AppData.prototype.showResult = function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalEexpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMounth());
  };
// clone Inputs block
AppData.prototype.addExpIncBlock = function() {
  let title = '';
  let amount = '';
  let cloneIncomeItem = '';
  let items = '';
  let btn = '';
  let expenses = '';

  if (this.classList.contains('income_add')) {
    cloneIncomeItem = incomeItems[0].cloneNode(true);
    title = '.income-title';
    amount = '.income-amount';
    items = incomeItems;
    btn = incomeItemPlus;
    expenses = '.income-items';
  } else if (this.classList.contains('expenses_add')) {
    cloneIncomeItem = expensesItems[0].cloneNode(true);
    title = '.expenses-title';
    amount = '.expenses-amount';
    items = expensesItems;
    btn = expensesPlus;
    expenses = '.expenses-items';
  }
  cloneIncomeItem.querySelector(title).value = '';
  cloneIncomeItem.querySelector(amount).value = '';
  items[0].parentNode.insertBefore(cloneIncomeItem, btn);
  items = document.querySelectorAll(expenses);
  if (items.length === 3) {
    btn.style.display = 'none';
  }
};
// input expenses and income
AppData.prototype.getExpInc = function() {

    const count = item => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount;
      }
    }
      incomeItems.forEach(count);
      expensesItems.forEach(count);

      for (const key in this.income) {
        this.incomeMonth += +this.income[key];
      }
      for (const key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
      }
  };
   // воз доход воз расх
AppData.prototype.getAddExrInc = function () {
    this.addIncome = [];
    additionalIncomeItems.forEach((el) => {
      let elValue = el.value.trim();
      if(elValue !== '') {
        this.addIncome.push(elValue);
      }
    });

    this.addExpenses = [];
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(el => {
      el = el.trim();
      if (el !== '') {
        this.addExpenses.push(el);
      }
    });

  };
  // оставшийся бюджет
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  };
AppData.prototype.getTargetMounth = function () {
    return targetAmount.value / this.budgetMonth;
  };
AppData.prototype.statusIncome = function () {
    if (this.targetMounth() > 0) {
      return Math.ceil(this.targetMounth());
    } else if (this.targetMounth() <= 0) {
      return "цель не будет достигнута";
    }
  };
AppData.prototype.getInfoDeposit = function () {
    const _this = this;
    if (this.deposit) {
      const persentDeposit = function () {
        let validPers;
        do {
          validPers = prompt("какой процент депозита?", "10");
        } while (!isNumber(validPers));
        return validPers;
      };
      _this.persentDeposit = persentDeposit();
      const moneyDeposit = function () {
        let validDeposit;
        do {
          validDeposit = prompt("какая сумма у вашего депозита?", 10000);
        } while (!isNumber(validDeposit));
        return validDeposit;
      };
      _this.moneyDeposit = moneyDeposit();
    }
  };
AppData.prototype.calcPeriod = function () {
    const _this = this;
    periodSelect.addEventListener('input', function (e) {
      
      console.log(e.target.value);
      periodAmount.textContent = e.target.value;
      if (salaryAmount.value !== '') {
        _this.period = _this.budgetMonth * e.target.value;
      }
      incomePeriodValue.value = _this.period;
    });
  };
AppData.prototype.eventListener = function(){
  start.addEventListener('click', this.start.bind(this));
  reset.addEventListener('click', this.reset.bind(this));
  expensesPlus.addEventListener('click', this.addExpIncBlock);
  incomeItemPlus.addEventListener("click", this.addExpIncBlock);
  this.getInfoDeposit();
  this.calcPeriod();

  salaryAmount.addEventListener('input', function () {
  if (salaryAmount.value !== '') {
    start.disabled = false;
  } else {
    start.disable = true;
  }
});
  salaryAmount.addEventListener('input', salaryAmount);

  };
const appData = new AppData();
  appData.eventListener();


  