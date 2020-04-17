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

  let start = document.getElementById("start"), //start
    buttonPlus1 = document.querySelectorAll(".btn_plus")[1], //plus расхода
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
    incomePeriodValue = document.querySelector(".income_period-value"),
    targetMonthValue = document.querySelector(".target_month-value"), // цел дос мес выв
    salaryAmount = document.querySelector(".salary-amount"), // месячный доход
    incomeTitle = document.querySelector(".income-title"),
    expensesTitle = document.querySelector(".expenses-title"),
    expensesItems = document.querySelectorAll(".expenses-items"), // обязательные расходы
    additionalExpensesItem = document.querySelector(".additional_expenses-item"), // воз расх
    periodSelect = document.querySelector(".period-select"), // ползунок
    periodAmount = document.querySelector(".period-amount"), // вывод ползунка
    targetAmount = document.querySelector(".target-amount"), // цель сумм
    incomeItems = document.querySelectorAll(".income-items"); // доп доход ввод
  let appData = {
    budgetDay: 0,
    budgetMonth: 0, // месячный доход
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    income: {}, // доп доход
    incomeMonth: 0, // доп дох в мес
    addIncome: [], // воз дох
    expenses: {}, // обязательный расход
    addExpenses: [],
    expensesMonth: 0, // расход за месяц
    getTargetMonth: {},
    budget: 0, // доход
    start: function () {
      if (salaryAmount.value === "") {
        alert('Ошибка, поле "Месячный доход" должно быть заполнино!');
        return;
      }
      appData.budget = +salaryAmount.value;
      appData.getExpenses();
      appData.getIncome();
      // appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();

      appData.showResult();
    },
    // вывод результата
    showResult: function () {
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = Math.floor(appData.budgetDay);
      expensesMonthValue.value = appData.expensesMonth;
      additionalEexpensesValue.value = appData.addExpenses.join(", ");
      additionalIncomeValue.value = appData.addIncome.join(", "); /////
      targetMonthValue.value = Math.ceil(appData.getTargetMounth());
      incomePeriodValue.value = appData.calcPeriod();
    },
    // обязательные расходы клон поля
    addExpensesBlock: function () {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll(".expenses-items");
      if (expensesItems.length === 3) {
        expensesPlus.style.display = "none";
      }
    },
    // обязательные расход и сумма
    getExpenses: function () {
      expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector(".expenses-title").value; // обяз расх
        let cashExpenses = item.querySelector(".expenses-amount").value; // сумма
        if (itemExpenses !== "" && cashExpenses !== "") {
          appData.expenses[itemExpenses] = +cashExpenses;
        }
      });
      for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
      }
    },
    // клон поля доп зароботок
    addIncomeBlock: function () {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeItemPlus);
      incomeItems = document.querySelectorAll(".income-items");
      if (incomeItems.length === 3) {
        incomeItemPlus.style.display = "none";
      }
    },
    // дополнить заработок
    getIncome: function () {
      incomeItems.forEach(function (item) {
        let itemIncome = item.querySelector(".income-title").value; // доп дох ввод
        let cashIncome = item.querySelector(".income-amount").value; // доп дох сумма
        if (itemIncome !== "" && cashIncome !== "") {
          appData.income[itemIncome] = +cashIncome;
        }
      });
      for (let key in appData.income) {
        appData.incomeMonth += +appData.income[key];
      }
    },
    // обязател расх сумир в расх в месяц
    // getExpensesMonth: function () {
    //   for (let key in appData.expenses) {
    //     appData.expensesMonth += +appData.expenses[key];
    //   }
    // },
    // возможные расходы
    getAddExpenses: function () {
      let addExpenses = additionalExpensesItem.value.split(",");
      addExpenses.forEach(function (item) {
        item = item.trim();
        if (item !== "") {
          appData.addExpenses.push(item);
        }
      });
    },
    // воз доход ввод
    getAddIncome: function () {
      additionalIncomeItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== "") {
          appData.addIncome.push(itemValue);
        }
      });
    },

    // оставшийся бюджет
    getBudget: function () {
      appData.budgetMonth =
        appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMounth: function () {
      return targetAmount.value / appData.budgetMonth;
    },

    statusIncome: function () {
      if (appData.targetMounth() > 0) {
        return Math.ceil(appData.targetMounth());
      } else if (appData.targetMounth() <= 0) {
        return "цель не будет достигнута";
      }
    },
    getInfoDeposit: function () {
      if (appData.deposit) {
        const persentDeposit = function () {
          let validPers;
          do {
            validPers = prompt("какой процент депозита?", "10");
          } while (!isNumber(validPers));
          return validPers;
        };
        appData.persentDeposit = persentDeposit();
        const moneyDeposit = function () {
          let validDeposit;
          do {
            validDeposit = prompt("какая сумма у вашего депозита?", 10000);
          } while (!isNumber(validDeposit));
          return validDeposit;
        };
        appData.moneyDeposit = moneyDeposit();
      }
    },
    
    calcPeriod: function () {
      return appData.budgetMonth * periodSelect.value;
    },
    // periodAmount цифра под ползунком

    calcValue: function (calcValue) {
      periodAmount.value = periodSelect.value;
    
    },
  };
  start.addEventListener('click', appData.start);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomeItemPlus.addEventListener("click", appData.addIncomeBlock);
  appData.getInfoDeposit();

periodSelect.addEventListener('input', function () {
  incomePeriodValue.value = appData.calcPeriod();
  console.log(incomePeriodValue.value);
});
 
