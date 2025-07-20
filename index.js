"use strict";

const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const buttonsSet = document.querySelector('.buttons-set');

if (buttonsSet) {
    buttonsSet.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
        const MessageToShow = 'Клікнуто на кнопці: ' + event.target.textContent;
        alert(MessageToShow);
    }
    });
} 

