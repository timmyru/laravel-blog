window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Tabs

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2018-10-18';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        if (hours < 10 && hours >= 0) hours = "0" + hours;
        if (minutes < 10 && minutes >= 0) minutes = "0" + minutes;
        if (seconds < 10 && seconds >= 0) seconds = "0" + seconds;

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0 ) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    //Scroll

    let container = [].slice.call(document.querySelectorAll('a[href*="#"]'));

    container.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let coorY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top,
                scroll = setInterval(function() {
                    let scrollBy = coorY / 100;
                    if(scrollBy > window.pageYOffset - coorY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                        window.scrollBy(0, scrollBy);
                    } else {
                        window.scrollTo(0, coorY);
                        clearInterval(scroll);
                    }
            }, 10);
        });
    });
});