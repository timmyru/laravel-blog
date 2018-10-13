let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, flag=0;

// Начать расчет
startBtn.addEventListener('click', function () {
  flag=1;
  time = prompt("Введите дату в формате YYYY-MM-DD", '2018-10-04');
  money = +prompt("Ваш бюджет на месяц", '100');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц", '100');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

// Только русские буквы и цифры в обязательные расходы
for (let i = 0; i < expensesItem.length; i++) {
  if (i%2 == 0) {
  expensesItem[i].addEventListener('input', function () {
    expensesItem[i].value = expensesItem[i].value.replace(/[^а-яА-ЯёЁ -]/ig, '');
  });
} else {
  expensesItem[i].addEventListener('input', function () {
    expensesItem[i].value = expensesItem[i].value.replace(/[^0-9 -]/ig, '');
  });
}
}

// Обязательные расходы
expensesBtn.addEventListener('click', function () {
  if (flag != 0) {
  let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
    let expendName = expensesItem[i].value,
      expendCost = expensesItem[++i].value;
    if (typeof (expendName) === 'string' && expendName != null && typeof (expendCost) != null &&
      expendName != '' && expendCost != '' && expendName.length < 30) {
      appData.expenses[expendName] = expendCost;
      sum += +expendCost;
    } else {
      if (i > 0) {
        i--;
      }
    }
  }
  expensesValue.textContent = sum;
  console.log(expensesValue.textContent);
}
});

// Необязательные расходы = ввод только кириллицы
for (let i = 0; i < optionalExpensesItem.length; i++) {
  optionalExpensesItem[i].addEventListener('input', function () {
    optionalExpensesItem[i].value = optionalExpensesItem[i].value.replace(/[^а-яА-ЯёЁ -]/ig, '');
  });
}

// Необязательные расходы клик
optionalExpensesBtn.addEventListener('click', function () {
  optionalExpensesValue.textContent = '';
  if (flag != 0) {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let chosenOptExpenses = optionalExpensesItem[i].value;
      appData.optinalExpenses[i] = chosenOptExpenses;
      optionalExpensesValue.textContent += appData.optinalExpenses[i] + ' ';
  } 
} else {
  alert('Начните расчет бюджета');
}
});

// Расчет дневного бюждета за вычетом обязательных расходов
countBtn.addEventListener('click', function () {
  if (flag != 0) {
  if (appData.budget != undefined) {
  appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
  if (appData.moneyPerDay < 0) {
    alert('Дневной бюджет не может быть отрицательным. Сокращайте расходы');
    for (let i = 0; i < expensesItem.length; i++) {
      expensesItem[++i].value = 'Чудовищно большие расходы';
      expensesValue.textContent = 0;
    }
  } else {
    dayBudgetValue.textContent = appData.moneyPerDay;
  }

  // Определение уровня достатка
  if (appData.moneyPerDay < 100) {
    levelValue.textContent = 'Минимальный уровень достатка';
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    levelValue.textContent = 'Средний уровень достатка';
  } else if (appData.moneyPerDay > 2000) {
    levelValue.textContent = 'Высокий уровень достатка';
  } else {
    levelValue.textContent = 'Произошла ошибка';
  }
  } else {
    dayBudgetValue.textContent = 'Ошибка';
  }
}
});

// Возможные доходы

incomeItem.addEventListener('input', function () {
  incomeItem.value = incomeItem.value.replace(/[^а-яА-ЯёЁ, -]/ig, '');
  
  if (flag != 0) {
  let items = incomeItem.value;
  appData.income = items;
  incomeValue.textContent = appData.income;
  } else {
    alert('Начните расчет бюджета');
    incomeItem.value = '';
  }
});

// Смена тру/фолс есть ли накопления
checkSavings.addEventListener('click', function () {
  if (flag != 0) {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  } 
}
});

// Вывод накоплений
sumValue.addEventListener('input', function () {
  sumValue.value = sumValue.value.replace(/[^0-9 -]/ig, '');
  if (flag != 0) {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

  } else {
    alert('Если есть накопления, поставьте соответствующую галочку');
    sumValue.value = '';
  }
} else {
  alert('Начните расчет бюджета');
  sumValue.value = '';
}
});


percentValue.addEventListener('input', function () {
  percentValue.value = percentValue.value.replace(/[^0-9 -]/ig, '');

  if (flag != 0) {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

  } else {
    alert('Если есть накопления, поставьте соответствующую галочку');
    percentValue.value = '';
  }
} else {
  alert('Начните расчет бюджета');
  percentValue.value = '';
}
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optinalExpenses: {},
  income: [],
  savings: false
};

