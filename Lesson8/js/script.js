    window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    for (let i = 1; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    for(let i=0; i<tab.length; i++) {
        tab[i].addEventListener('click', function () {
            for (let j = 0; j < tabContent.length; j++) {
                tabContent[j].style.display = 'none';
            }
            tabContent[i].style.display = 'flex';
        });
    }

    let deadline = '2018-10-18';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000*60*60));
            if (seconds<10) {
                seconds = '0'+seconds;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
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
            
            

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } else {
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }
        }
    }
    
    setClock('timer', deadline);

    let nav = document.getElementsByTagName('ul')[0];
    nav.addEventListener('click', function (event) {
        if (event.target.tagName == 'A') {
            event.preventDefault();
            let link = event.target.getAttribute('href').slice(1);
            link = document.getElementById(link);
            let coordinates = link.getBoundingClientRect().top;
            
            let i = 1;

            function step() {
                let req = requestAnimationFrame(step);
                window.scrollBy(0, coordinates / 30);
                i++;
                if (i == 31) {
                    cancelAnimationFrame(req);
                }
            };

            step();

        }
    })

});


