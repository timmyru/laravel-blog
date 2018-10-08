'use strict';

var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD?");


console.log(money);
console.log(time);

var whatyoubuy1 = prompt("Введите обязательную статью расходов в этом месяце?"),
    priceofthis1 = prompt("Во сколько обойдется?");

var whatyoubuy2 = prompt("Введите обязательную статью расходов в этом месяце?"),
    priceofthis2 = prompt("Во сколько обойдется?");

console.log(whatyoubuy1);
console.log(priceofthis1);
console.log(whatyoubuy2);
console.log(priceofthis2);

var appData = {
    budjet: money,
    datatime: time,
    expenses: {},
    optionalExpenses: "",
    income: "",
    savings: false
};

appData.expenses.whatyoubuy1 = priceofthis1;
appData.expenses.whatyoubuy2 = priceofthis2;

var budjetday = money / 30;
alert("Ваш бюджет на день в этом месяце " + budjetday);