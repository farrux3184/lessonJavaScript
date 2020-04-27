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
 
let start = document.getElementById("start"); //start
let buttonPlus1 = document.querySelectorAll(".btn_plus")[1], //plus расхода
    reset = document.getElementById('cancel'),
    expensesPlus = buttonPlus1,
    buttonPlus0 = document.querySelectorAll(".btn_plus")[0], // доп зароб плюс
    incomeItemPlus = buttonPlus0,
    additionalIncomeItem = document.querySelectorAll(".additional_income-item"), // воз дох ввод
    checkBox = document.querySelector("#deposit-check"),
    budgetMonthValue = document.querySelector(".budget_month-value"), // доход за месяц
    budgetDayValue = document.querySelector(".budget_day-value"), // дневной доход
    expensesMonthValue = document.querySelector(".expenses_month-value"), // расход за месяц
    additionalIncomeValue = document.querySelector(".additional_income-value"), // воз дох выв
    additionalEexpensesValue = document.querySelector(".additional_expenses-value"), // воз рас выв
    incomePeriodValue = document.querySelector(".income_period-value"), // накоп за период
    targetMonthValue = document.querySelector(".target_month-value"), // цел достижения мес выв
    salaryAmount = document.querySelector(".salary-amount"), // месячный доход
    incomeAmount = document.querySelector(".income-amount"), //Дополнительный доход сумма ввод
    expensesItems = document.querySelectorAll(".expenses-items"), // обязательные расходы ввод 
    cashExpenses = document.querySelector(".expenses-amount"),   //обязательный расх
    additionalExpensesItem = document.querySelector(".additional_expenses-item"), // воз расх
    periodSelect = document.querySelector(".period-select"), // ползунок
    periodAmount = document.querySelector(".period-amount"), // вывод ползунка
    targetAmount = document.querySelector(".target-amount"), // цель сумм
    incomeItems = document.querySelectorAll(".income-items"); // доп доход ввод
    start.disabled = true;
   
  
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
  this.budget = +salaryAmount.value;
  this.getExpenses();
  this.getIncome();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();

  this.showResult();
};

AppData.prototype.reset = function () {
    let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');
    let inputAll = document.querySelectorAll('input:not(.period-select)');
    start.disabled = true;

    inputAll.forEach(element => {
      element.value = '';
    });

    inputText.forEach(element => {
      element.disabled = false;
    });

    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

    start.style.display = 'block';
    reset.style.display = 'none';
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;

    incomeItems.forEach((item, i) => {
      if (i !== 0) {
        item.remove();
      }
    });
    buttonPlus1.style.display = 'block';

    expensesItems.forEach((item, i) => {
      if (i !== 0) {
        item.remove();
      }
    });
    buttonPlus0.style.display = 'block';
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
  // обязательные расходы клон поля
  AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  };
  // обязательные расход и сумма
  AppData.prototype.getExpenses = function () {
    const _this = this;
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value; // обяз расх
      let cashExpenses = item.querySelector(".expenses-amount").value; // сумма
      if (itemExpenses !== "" && cashExpenses !== "") {
        _this.expenses[itemExpenses] = +cashExpenses;
      }
    });
    for (let key in _this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  };
  // клон поля доп зароботок
  AppData.prototype.addIncomeBlock = function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeItemPlus);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      incomeItemPlus.style.display = "none";
    }
  };
  // дополнить заработок
  AppData.prototype.getIncome = function () {
    const _this = this;
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector(".income-title").value; // доп дох ввод
      let cashIncome = item.querySelector(".income-amount").value; // доп дох сумма
      if (itemIncome !== "" && cashIncome !== "") {
        _this.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in _this.income) {
      this.incomeMonth += +this.income[key];
    }
  };
  // возможные расходы
  AppData.prototype.getAddExpenses = function () {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        _this.addExpenses.push(item);
      }
    });
  };
  // воз доход ввод
  AppData.prototype.getAddIncome = function () {
    const _this = this;
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        _this.addIncome.push(itemValue);
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
      if (salaryAmount.value !== "") {
        _this.period = _this.budgetMonth * e.target.value;
      }
      incomePeriodValue.value = _this.period;
    });
  };
  AppData.prototype.eventListener = function(){
start.addEventListener('click', this.start.bind(appData));
reset.addEventListener('click', this.reset.bind(appData));
expensesPlus.addEventListener('click', this.addExpensesBlock);
incomeItemPlus.addEventListener("click", this.addIncomeBlock);
this.getInfoDeposit();
this.calcPeriod();

salaryAmount.addEventListener('input', function () {
  if (salaryAmount.value !== '') {
    start.disabled = false;
  }
});
salaryAmount.addEventListener('input', salaryAmount);

  };
const appData = new AppData();
AppData.prototype.eventListener();

  