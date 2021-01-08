// 16 numeri univoci generati randomicamente
var arrayRandomNumbers = [];

while (arrayRandomNumbers.length < 8) {

  var randomNumber = Math.floor(Math.random() * (100 + 1 - 1) + 1);

  if(arrayRandomNumbers.indexOf(randomNumber) === -1) arrayRandomNumbers.push(randomNumber);

}

console.log(arrayRandomNumbers);


// chiedere all'utente di inserire un numero tra 1 e 100 univoco (non ripetibile)
var arrayUserNumbers = [];
var userNumber = parseInt(prompt('Inserisci un numero tra 1 a 100 (possibilmente non ripetuto prima)'));

if (isNaN(userNumber) /* && 1 <= x <= 100 */) {
  alert('Inserisci solo numeri tra 1 e 100 (e non ancora utilizzati)');
}


// se numero è nella lista, si finisce
else if (arrayRandomNumbers.indexOf(userNumber) !== -1) {
  alert('Hai perso!');
}

else {
  alert('Mi spiace, ma devo fare una visita. Riprenderò il codice più tardi. Buon weekend! :)')
}


// partita finisce se c'è un numero vietato o finiscono i numeri


// software dice il punteggio (numeri scritti prima di prendere un numero vietato)
