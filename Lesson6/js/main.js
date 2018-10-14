"use strict";

let buttonStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpenesesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    buttonExpensesItem = document.getElementsByTagName('button')[0],
    buttonOptionalExpenses = document.getElementsByTagName('button')[1],
    buttonCountBudget = document.getElementsByTagName('button')[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

buttonStart.addEventListener('click', function () {
    time = new Date();
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    buttonCountBudget.removeAttribute('disabled');
    buttonExpensesItem.removeAttribute('disabled');
    buttonOptionalExpenses.removeAttribute('disabled');
});

buttonExpensesItem.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let answerExpenses = expensesItem[i].value,
            answerExpensesBudget = expensesItem[++i].value;

        if (typeof (answerExpenses) === 'string' && answerExpenses != null && answerExpensesBudget != null && answerExpensesBudget != '' && answerExpenses != '' && answerExpenses.length < 50) {
            appData.expenses[answerExpenses] = answerExpensesBudget;
            sum += +answerExpensesBudget;
        }
    }
    expensesValue.textContent = sum;
});

buttonOptionalExpenses.addEventListener('click', function () {
    optionalExpenesesValue.innerHTML = '';

    for (let i = 0; i < optionalExpenses.length; i++) {
        let answerOptExpenses = optionalExpenses[i].value;
        appData.optionalExpenses[i] = answerOptExpenses;
        optionalExpenesesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

buttonCountBudget.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expensesValue.innerHTML) / 30).toFixed(1);
        if (appData.moneyPerDay < 0) {
            alert('Умерьте свои аппетиты или заработайте побольше!');
        } else {
            dayBudgetValue.textContent = appData.moneyPerDay;
        }

        if (appData.moneyPerDay >= 0 && appData.moneyPerDay < 400) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 400 && appData.moneyPerDay < 3000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 3000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else if (appData.moneyPerDay < 0) {
            levelValue.textContent = "Должник";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// function validate() {
//     if (expensesItem[0].value != '' && expensesItem[1].value != ''  || expensesItem[2].value != '' && expensesItem[3].value != '') {
//         buttonExpensesItem.removeAttribute('disabled');
//     } else if (optionalExpenses[0].value != '' || optionalExpenses[1].value != '' || optionalExpenses[2].value != '') {
//         buttonOptionalExpenses.removeAttribute('disabled');
//     }
// }

for (let i = 0; i < optionalExpenses.length; i++) {
    optionalExpenses[i].addEventListener('keyup', function () {
        optionalExpenses[i].value = optionalExpenses[i].value.replace(/[^а-яА-ЯёЁ]/ig, '');
    })
}