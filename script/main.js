'use strict'

function start(target) {
    target = Math.floor(Math.random() * 100);
    console.log(target);

    function repiat() {
        let question = prompt('Введите число');

        if (question === null) {
        return false;
        } else if (isNaN(question)) {
            repiat();
        } else {
            question = Number(question);
            console.log(question);
            if (target > question) {
                console.log('Ваше число меньше');
                repiat();
            } else if (target < question) {
                console.log('Ваше число больше');
                repiat();
            } else {
                console.log('Ты угадал');
            }
        }
    }    
    repiat(target);
}
let target = start();
