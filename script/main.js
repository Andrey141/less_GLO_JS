'use strict'
let numRnd,
    numEnter;
// Рандом числа
let randomNumber = function() { 
    return Math.floor(Math.random() * 100);
};

numRnd = randomNumber();
console.log(numRnd);

function start() {
// Ввод числа
let enterNumber = function() {
  
     numEnter = prompt('Введите число');
  /*
     if (!isNaN(parseFloat(numEnter))) {
        return +numEnter;
    } else if (isNaN(parseFloat(numEnter))) {
        console.log('запустить заново')
    } else if (numEnter === null) { 
        console.log('выйти');
        enterNumber();
    }
};
  */  
    if (!isNaN(parseFloat(numEnter))) {
        return +numEnter;
    } else if (numEnter === null) {
        console.log('Выйти из программы');
    } else if (isNaN(parseFloat(numEnter))) {
        console.log('запустить заново');
        enterNumber();
    } 
};

numEnter = enterNumber();
console.log(numEnter);

let guessNumber = function() {
    if (numRnd < numEnter) {
        console.log('Заданное число меньше');
        start();
    }    
    if (numRnd > numEnter) { 
        console.log('Заданное число больше');
        start();
    }
    if (numRnd === numEnter) {
            console.log('Вы угадали число');
            return;
        }       
};
    
    guessNumber(numRnd, numEnter);
}
start();