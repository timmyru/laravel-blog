let menuLi = document.querySelectorAll('.menu-item'),
    elementLi = document.createElement('li'),
    menuUl = document.getElementsByClassName('menu'),
    adv = document.getElementsByClassName('adv'),
    title = document.getElementById('title'),
    promptApple = document.getElementById('prompt');

elementLi.innerHTML = "Пятый пункт";
elementLi.className = "menu-item";
menuUl[0].appendChild(elementLi);
menuUl[0].insertBefore(menuLi[2], menuLi[1]);

document.body.style.background = "url(./img/apple_true.jpg) center no-repeat";

title.innerHTML = "Мы продаем только <strong>подлинную</strong> технику Apple";

adv[0].remove();

let answer = prompt('Как вы относитесь в технике Apple?', '');
promptApple.innerHTML = answer;