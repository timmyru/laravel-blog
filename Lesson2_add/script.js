'use strict';

var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD?");


console.log(money);
console.log(time);

var whatyoubuy = prompt("Введите обязательную статью расходов в этом месяце?"),
    priceofthis = prompt("Во сколько обойдется?");

console.log(whatyoubuy);
console.log(priceofthis);

var appData = {
    budjet: money,
    datatime: time,
    general_expenses: expenses,
    optionalExpenses: "",
    income: "",
    savings: false
};

var expenses = {
    whatyoubuy: priceofthis,
};

console.log(appData);

var budjet_day = money / 30;
alert("Ваш бюджет на день в этом месяце " + budjet_day);