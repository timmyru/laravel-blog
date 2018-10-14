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
});