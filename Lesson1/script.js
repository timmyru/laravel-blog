let budget = +prompt("Ваш бюджет на месяц", '100');
let timeData = +prompt("Введите дату в формате YYYY-MM-DD", '2018-10-04');
let appData = {
    budget,
    timeData,
    expenses: {

    },
    optinalExpenses: {

    },
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;
console.log(appData.expenses);

alert('Ваш бюджет: ' + budget / 30 + ' рублей');
