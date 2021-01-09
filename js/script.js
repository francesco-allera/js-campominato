// 16 numeri univoci generati randomicamente

// while (arrayRandomNumbers.length < 16) {
//   var randomNumber = Math.floor(Math.random() * (100 + 1 - 1) + 1);
//   if(arrayRandomNumbers.indexOf(randomNumber) === -1) {
//     arrayRandomNumbers.push(randomNumber);
//   }
// }

function creatingArrayOfRandomNumbers(array, arrayLength, min, max) {
  while (array.length < arrayLength) {
    var randomNumber = Math.floor(Math.random() * (100 + 1 - 1) + 1);
    if(array.indexOf(randomNumber) === -1) {
      array.push(randomNumber);
    }
  }
}

// Funzione che verifica se un numero è effettivamente un numero compreso
// tra 1 e 100, sennò: o blocca il while con alert game over; o il while va avanti.
// Se il while continua, verifica se: non sia presente tra i precedenti numeri
// scelti dall'utente, aggiungendo un numero al counter delle scelte; E se il numero
// scelto fa parte della lista dei numeri proibiti, il while termina e alert con
// count di tentativi

// while (checker) {
//   var userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
//   if (isNaN(userNumber) || 1 > userNumber > 100) {
//     checker = false;
//     alert('Game over! Inserisci solo numeri da 1 a 100');
//   } else {
//     if (arrayUserNumbers.indexOf(userNumber) === -1) {
//       arrayUserNumbers.push(userNumber);
//       counter += 1;
//     }
//     if (arrayRandomNumbers.indexOf(userNumber) !== -1) {
//       checker = false;
//       alert('Game over! I tuoi tentativi sono stati ' + counter);
//     }
//   }
// }

function numberValidator(flag, arrayMadeFromUniqueUserNumber, counterOfUsedNumbers, arrayUsedFromRandomNumbers) {
  while (flag) {
    var userNumber = parseInt(prompt('Inserisci un numero tra 1 e 100'));
    if (isNaN(userNumber) || 1 > userNumber > 100) {
      flag = false;
      alert('Game over! Inserisci solo numeri tra 1 e 100');
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


var arrayRandomNumbers = [];
var checker = true;
var counter = 0;
var arrayUserNumbers = [];

// var difficulty = prompt('Scegli una difficoltà: 0 = facile; 1 = media; 2 = difficile');
//
// switch (difficulty) {
//   case '0':
//
//     break;
//   case '1':
//
//     break;
//   case '2':
//
//     break;
//   default:
//   checker = false;
//   alert('Per Favore scegli solo un numero tra 0, 1 o 2');
// }


creatingArrayOfRandomNumbers(arrayRandomNumbers, 16, 1, 100);

arrayRandomNumbers.sort(function (a, b) {
  return a - b;
})

console.log(arrayRandomNumbers);

numberValidator(checker, arrayUserNumbers, counter, arrayRandomNumbers);

console.log(arrayUserNumbers);
