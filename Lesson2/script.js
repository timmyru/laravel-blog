let budget = +prompt("Ваш бюджет на месяц", '100');
let timeData = prompt("Введите дату в формате YYYY-MM-DD", '2018-10-04');
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

for (let i = 0; i < 2 ; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if (typeof(a)==='string' && typeof(a) != null && typeof(b) !=null &&
    a != '' && b != '' && a.length < 30) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        alert('Введите верные значения. Попробуйте еще раз');
        if (i>0) {
             i--;
         } 
    }
}

// let i = 0;
// while (i<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
//         a != '' && b != '' && a.length < 30) {
//         console.log('done');
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         alert('Введите верные значения. Попробуйте еще раз');
//         if (i>0) {
//             i--;
//         } 
//     }
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
//         a != '' && b != '' && a.length < 30) {
//         console.log('done');
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         alert('Введите верные значения. Попробуйте еще раз');
//         if (i > 0) {
//             i--;
//         }
//     }
// } while (i<2);

console.log(appData);
appData.moneyPerDay = appData.budget / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}