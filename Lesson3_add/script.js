let str = "урок-3 - был слишком легким";
str = str[0].toUpperCase() + str.slice(1);

str = str.replace(/-/g, ' ');
str = str.replace(/был/, 'было');
str = str.replace(/им/, 'о');

console.log(str);

let arr = [20, 33, 1, "Человек", 2, 3],
    summ = 0;

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        summ = summ + arr[i] ** 3;
    }
}

let sqrt = Math.sqrt(summ);
console.log(sqrt);

function spaces(text) {
    if (typeof (text) != 'string') {
        alert('Перезагрузите страницу и введите текст');
    } else {

        do {
            text = text.replace(/ /, '');
        }
        while (text[0] == ' ');

        do {
            text = text.slice(0, text.length - 1);
        }
        while (text[text.length - 1] == ' ');

        if (text.length > 50) {
            text = text.slice(0, 50) + '...';
        }

        console.log(text);

    }
}

spaces('   22  вв sadsadasdasd dasdsadasdas das dsaasad ds sdsd sdsadsadsadsadsadsdasad dsadsadsad  33 ');