let li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт'),
    menu = document.querySelector('.menu');

li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';

//second
document.body.style.background = 'url(img/apple_true.jpg)';

// third
document.getElementById("title").innerHTML = "Мы продаем только подлинную технику Apple";

// fourth
let adv = document.getElementsByClassName('adv');

adv[0].parentNode.removeChild(adv[0]);

//fifth
let question = prompt('Что Вы думаете по поводу продукции компании Apple?', '');

document.getElementById("prompt").innerHTML = question;

// order
let sec = document.getElementsByClassName('menu-item');
sec[1].parentNode.removeChild(sec[1]);

let f = document.querySelector('.menu'),
    third = document.createElement('li');

third.classList.add('menu-item')
third.innerHTML = 'Третий пункт';
f.insertBefore(third, sec[2]);
