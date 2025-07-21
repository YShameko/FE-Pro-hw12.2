"use strict";

const buttonsSet = document.querySelector('.buttons-set');

if (buttonsSet) {
    buttonsSet.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
        const MessageToShow = 'Клікнуто на кнопці: ' + event.target.textContent;
        alert(MessageToShow);
    }
    });
} 

