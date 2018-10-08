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
    expenses: {

    },
    optinalExpenses: {

    },
    income: [],
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();


console.log(appData);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();


function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let chosenOptExpenses = prompt('Статья необязательных расходов', '');
        if (chosenOptExpenses != null && chosenOptExpenses !== '') {
            appData.optinalExpenses[i] = chosenOptExpenses;
        } else {
            alert('Попробуйте еще раз. Введено неверное значение');
            i--;
        }
    }
}

chooseOptExpenses();