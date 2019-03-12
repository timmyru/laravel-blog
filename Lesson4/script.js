'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    datatime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let item = prompt("Введите обязательную статью расходов в этом месяце?", ''),
                price = prompt("Во сколько обойдется?", '');
            if ((typeof (item)) === 'string' && item != null && price != null
                && item != '' && price != '' && item.length < 50) {
                console.log("done");
                appData.expenses[item] = price;
            } else {
                console.log("Smth wrong! Check your input!");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Low income!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Normal income!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High income!");
        } else {
            console.log("Error!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let question = prompt("Статья необязательных расходов?", '');
            if (typeof (question) === 'string' && question != null
                && question != '' && question.length < 50) {
                console.log("done");
                appData.expenses[i] = question;
            } else {
                console.log("Smth wrong! Check your input!");
                i--;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислить через запятую!)", "");
            if (isNaN(items) && items != '' && items != null) {
                console.log('done');
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-то ещё?"));
                appData.income.sort();
            } else {
                console.log("Ошибка! Неверный ввод!");
                i--;
            }
        }
        console.log("Способы доп. заработка: ");
        appData.income.forEach(function (item, i, income) {
            console.log((i + 1) + ' : ' + item);
        });
    }
};

appData.chooseIncome();

let data = [];
for (let key in appData) {
    data.push(key);
}
console.log("Наша программа включает в себя данные: " + data);