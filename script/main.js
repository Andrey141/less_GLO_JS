'use strict'

function f1(target) {
    target = Math.floor(Math.random() * 100);
    console.log(target);

    function f2() {
        let question = prompt('Введите число');

        if (question === null) {
        return false;
        } else if (isNaN(question)) {
        f2();
        } else {
            question = Number(question);
            console.log(question);
            if (target > question) {
                console.log('Ваше число меньше');
                f2();
            } else if (target < question) {
                console.log('Ваше число больше');
                f2();
            } else {
                console.log('Ты угадал');
            }
        }
    }    
    f2(target);
}

f1();
