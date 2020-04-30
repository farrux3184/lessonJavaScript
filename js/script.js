'use strict';
 
const start = document.getElementById("start"); //start
let expensesPlus = document.querySelectorAll(".btn_plus")[1]; //plus расхода
const reset = document.getElementById('cancel');
const incomeItemPlus = document.querySelectorAll(".btn_plus")[0]; // доп зароб плюс
const additionalIncomeItem = document.querySelectorAll(".additional_income-item"); // воз дох ввод
const depositCheck = document.querySelector("#deposit-check");
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
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPersent = document.querySelector('.deposit-percent');
const inputPercent = document.querySelector('[placeholder="Процент"]');

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
const validateNumber = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer);
  }
  while (!isNumber(res));
  return res;
};
const validateString = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer);
  }
  while (!isString(res));
  return res;
};
function inputRefresh() {
  let inputString = document.querySelectorAll('[placeholder="Наименование"]');
  let inputNumber = document.querySelectorAll('[placeholder="Сумма"]');


  inputString.forEach(el => {
    el.addEventListener('input', () => {
      el.value = el.value.replace(/[^а-яА-Я ,.!, a-zA-Z]/, '');
    });
  });
  inputNumber.forEach(el => {
    el.addEventListener('input', () => {
      el.value = el.value.replace(/[^0-9]/, '');
    });
  });

  inputPercent.addEventListener('input', () => {
  
    inputPercent.value = inputPercent.value.replace(/[^0-9]/, '');
    
  });
}
inputRefresh();
function disabledInputText() {
  let inpitText = document.querySelectorAll('[type="text"]:not(.result-total)');

  inpitText.forEach(element => {
    element.disabled = true;
  });
  start.style.display = 'none';
  reset.style.display = 'block';
}
class AppData {
  constructor (){

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
}

start () {
  if (salaryAmount.value === '') {
    start.disabled = true;
    return;
  }

  if (Number(inputPercent.value) < 0 || Number(inputPercent.value) > 100) {
    alert('Введите корректное значение в поле проценты');
    return;
  }

  appData.budget = +salaryAmount.value;
  this.getExpInc();
  this.getAddExrInc();
  this.getInfoDeposit();
  this.getBudget();
  this.getExpensesMonth();

  this.showResult();
  disabledInputText();
}

reset () {
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
   depositCheck.checked = false;
   this.depositHandler();
  }
  // вывод результата
showResult () {
    incomePeriodValue.value = this.calcPeriod();

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalEexpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMounth());
  }
// clone Inputs block
addExpIncBlock () {
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
  inputRefresh();
}
// input expenses and income
getExpInc () {

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
  }
   // воз доход воз расх
getAddExrInc () {
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

  }
getExpensesMonth() {
     let res = 0;
     for (let key in this.expenses) {
       res += +this.expenses[key];
     }
     this.expensesMonth = res;
   }
  // оставшийся бюджет
getBudget () {
const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = this.budgetMonth / 30;
  }
getTargetMounth () {
    return targetAmount.value / this.budgetMonth;
  }
statusIncome () {
    if (this.targetMounth() > 0) {
      return Math.ceil(this.targetMounth());
    } else if (this.targetMounth() <= 0) {
      return "цель не будет достигнута";
    }
  }
calcPeriod() {
    periodSelect.addEventListener('input', (e) => {
      console.log(e.target.value);
      periodAmount.textContent = e.target.value;
      if (salaryAmount.value !== '') {
        this.period = this.budgetMonth * e.target.value;
      }
      incomePeriodValue.value = this.period;
    });
  }
getInfoDeposit (){
    if(this.deposit) {
      this.persentDeposit = depositPersent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }

changePersent() {
  const valueSelect = this.value;
  if(valueSelect === 'other') {
    depositPersent.style.display = 'inline-block';
  } else {
    depositPersent.value = valueSelect;
    depositPersent.style.display = 'none';
    
  }
 }

depositHandler () {
  if (depositCheck.checked){
    depositBank.style.display = 'inline-block';
    depositAmount.style.display = 'inline-block';
    this.deposit = true;
    depositBank.addEventListener('change', this.changePersent);
  } else {
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositPersent.style.display = 'none';
    depositBank.value = '';
    depositAmount.value = '';
    depositPersent.value = '';
    this.deposit = false;
    depositBank.removeEventListener('change', this.changePersent);
  }
}
eventListener (){
  start.addEventListener('click', this.start.bind(this));
  reset.addEventListener('click', this.reset.bind(this));
  expensesPlus.addEventListener('click', this.addExpIncBlock);
  incomeItemPlus.addEventListener("click", this.addExpIncBlock);
  depositCheck.addEventListener('change', this.depositHandler.bind(this));
  this.getInfoDeposit();
  this.calcPeriod();

  salaryAmount.addEventListener('input', () => {
  if (salaryAmount.value !== '') {
    start.disabled = false;
  } else {
    start.disable = true;
  }
});
}
  }
const appData = new AppData();
  appData.eventListener();


  