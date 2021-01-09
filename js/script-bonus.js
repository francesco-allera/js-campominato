function creatingArrayOfRandomNumbers(array, arrayLength, min, max) {
  while (array.length < arrayLength) {
    var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    if(array.indexOf(randomNumber) === -1) {
      array.push(randomNumber);
    }
  }
}

function numberValidator(flag, arrayMadeFromUniqueUserNumber, counterOfUsedNumbers, arrayUsedFromRandomNumbers) {
  while (flag) {
    var userNumber = parseInt(prompt('Inserisci un numero tra 1 e ' + maxNumber));
    if (isNaN(userNumber) || 1 > userNumber > 100) {
      flag = false;
      alert('Game over! Inserisci solo numeri tra 1 e ' + maxNumber);
    } else {
      if (arrayMadeFromUniqueUserNumber.indexOf(userNumber) === -1) {
        arrayMadeFromUniqueUserNumber.push(userNumber);
        counterOfUsedNumbers += 1;
      }
      if (arrayUsedFromRandomNumbers.indexOf(userNumber) !== -1) {
        flag = false;
        alert('Game over! I tuoi tentativi sono stati ' + counterOfUsedNumbers);
      }
    }
  }
}

var numberOfBombs = 16;
var minNumber = 1;
var maxNumber = 100;
var arrayRandomNumbers = [];
var checker = true;
var counter = 0;
var arrayUserNumbers = [];

var difficulty = prompt('Scegli una difficoltà: 0 = facile; 1 = media; 2 = difficile');

switch (difficulty) {
  case '0':
  maxNumber = 100;
    break;
  case '1':
  maxNumber = 80;
    break;
  case '2':
  maxNumber = 50;
    break;
  default:
  checker = false;
  alert('Per Favore scegli solo un numero tra 0, 1 o 2');
}

creatingArrayOfRandomNumbers(arrayRandomNumbers, numberOfBombs, minNumber, maxNumber);

arrayRandomNumbers.sort(function (a, b) {
  return a - b;
})

console.log(arrayRandomNumbers);

numberValidator(checker, arrayUserNumbers, counter, arrayRandomNumbers);

console.log(arrayUserNumbers);
