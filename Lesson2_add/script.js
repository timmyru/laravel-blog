function getWeekDay(date) {
    date = date || new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = date.getDay();
    return days[day];
}

let date = new Date();
alert('Привет, бро. Сейчас ты увидишь дни недели. И курсивом тебе покажется именно сегодяшний день'); 


let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let j = 0;
let arrSpan = [];
for (let k=0; k < week.length; k++) {
    arrSpan[k] = document.createElement('span');
    arrSpan[k].style.display = 'block';
}

console.log(arrSpan);


while (j < week.length) {
    document.body.appendChild(arrSpan[j]);
    arrSpan[j].innerHTML = week[j];
	if (week[j] == getWeekDay(date)) {
        arrSpan[j].style.fontStyle = 'italic';
	}
	else if (j==5 || j==6) {
        arrSpan[j].style.fontWeight = 'bold';        
	}
	j++;
}

let arr = ['123', '234', '345', '456', '567', '618', '789'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
        console.log(arr[i]);
    }
}