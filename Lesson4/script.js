
'use strict';
let budget, timeData;

function start() {
    budget = +prompt("Ваш бюджет на месяц", '100');
    while (isNaN(budget) || budget == '' || budget == null) {
        budget = +prompt("Ваш бюджет на месяц", '100');
    }
    timeData = prompt("Введите дату в формате YYYY-MM-DD", '2018-10-04');

}

start();

let appData = {
    budget,
    timeData,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let expendName = prompt("Введите обязательную статью расходов в этом месяце", ''),
                expendCost = prompt("Во сколько обойдется?", '');
            if (typeof (expendName) === 'string' && expendName != null && typeof (expendCost) != null &&
                expendName != '' && expendCost != '' && expendName.length < 30) {
                console.log('done');
                appData.expenses[expendName] = expendCost;
            } else {
                alert('Введите верные значения. Попробуйте еще раз');
                if (i > 0) {
                    i--;
                }
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let chosenOptExpenses = prompt('Статья необязательных расходов', '');
            if (chosenOptExpenses != null && chosenOptExpenses !== '') {
                appData.optinalExpenses[i] = chosenOptExpenses;
            } else {
                alert('Попробуйте еще раз. Введено неверное значение');
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? Перечислите через запятую', '');
        while (items === null || items == '' || !isNaN(items)) {
            items = prompt('Что принесет дополнительный доход? Перечислите через запятую', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может, что-то еще?', ''));
        appData.income.sort();
        let title = document.createElement('h4');
        title.innerHTML = 'Способы доп заработка: ';
        document.body.appendChild(title);
        appData.income.forEach(function (item, i) {
            let spanIncome = document.createElement('span');
            spanIncome.style.display = 'block';
            document.body.appendChild(spanIncome);
            spanIncome.innerHTML = `${+i+1}) ${item}`;
        });
    }
};

// appData.detectDayBudget();
// appData.detectLevel();
appData.chooseIncome();

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key);
}

console.log(appData);

