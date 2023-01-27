// check if an input is a valid number (min/max optional)
function isAValidNumber(num, min, max) {
    var numParsed = parseInt(num);

    if (isNaN(numParsed))
        return false;
    if (min && numParsed < min)
        return false;
    if (max && numParsed > max)
        return false;

    return true;
}

// get random integer between min and max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// sort array of numbers
function sortingNumbers(array) {
   return array.sort(function (a, b) { return a - b });
}


/* variables */
var results = document.querySelector('#result');
var scores = document.querySelector('#points');
var starter = document.querySelector('#starter');
var radios = document.querySelectorAll('input[type="radio"]');


// setting the values of the radio inputs
var easy = '0', medium = '1', hard = '2';

document.querySelector('#easy').value = easy;
document.querySelector('#medium').value = medium;
document.querySelector('#hard').value = hard;


// setting the bombs value
var bombsNum = 16, bombsEasy = 100, bombsMedium = 80, bombsHard = 50;

document.querySelector('#bombs').innerText = bombsNum;
document.querySelector('#easy-bombs').innerText = bombsEasy;
document.querySelector('#medium-bombs').innerText = bombsMedium;
document.querySelector('#hard-bombs').innerText = bombsHard;


// clicking on button '#starter'
var multiplier = maxScore = bombsValueMax = 0;
var bombsValueMin = 1;

starter.addEventListener('click', function() {
    var difficulty = false;
    var flag = false;
    var bombsArray = [], pickedNumbers = [];
    var result = 'perso';

    // check for a difficulty
    for (var i = 0; i < radios.length && !difficulty; i++) {
        if (radios[i].checked)
            difficulty = radios[i].value;
    }

    // stop the flow if a difficulty wasn't choose
    if (!difficulty) {
        alert('Scegli una difficoltà');

    // if there is a difficulty
    } else {
        // setting the bombs values based on 'difficulty'
        switch (difficulty) {
            case easy:
                bombsValueMax = bombsEasy;
                multiplier = 1;
                break;
            case medium:
                bombsValueMax = bombsMedium;
                multiplier = 2;
                break;
            case hard:
                bombsValueMax = bombsHard;
                multiplier = 3;
                break;
        }

        // randomize + sorting the 'bombsArray'
        while (bombsArray.length < bombsNum) {
            var randomBomb = randomNumber(bombsValueMin, bombsValueMax);

            if (!bombsArray.includes(randomBomb))
                bombsArray.push(randomBomb);
        }
        sortingNumbers(bombsArray);
        console.log(bombsArray);

        // asking for a number until flag = true
        do {
            var userNumber = parseInt(prompt('Inserisci un numero tra ' + bombsValueMin + ' e ' + bombsValueMax));

            // stop the flow if 'userNumber' isn't a valid number
            if (!isAValidNumber(userNumber, bombsValueMin, bombsValueMax)) {
                alert('Inserire un numero valido');

            // checking 'userNumber'
            } else {
                // flag = true (lose) if 'userNumber' is in 'bombsArray'
                if (bombsArray.includes(userNumber)) {
                    flag = true;

                } else {
                    // skip if 'userNumber' was already inserted
                    if (pickedNumbers.includes(userNumber)) {
                       alert(userNumber + ' è già stato inserito!');

                    // if 'userNumber' is new and not a bomb, push it in 'pickedNumbers'
                    } else {
                        pickedNumbers.push(userNumber);
                        console.log(pickedNumbers);

                        // flag = true (victory) if the user got all the correct numbers
                        if (pickedNumbers.length === (bombsValueMax - bombsArray.length)) {
                            result = 'vinto';
                            flag = true;
                        }
                    }
                }
            }
        } while (!flag);

        // calculating points, highest score, and print everything
        var points = pickedNumbers.length * multiplier;

        if (points > maxScore) maxScore = points;

        scores.innerText = maxScore;
        results.innerHTML = '<h3>Hai ' + result + ' totalizzando ' + points + ' punti.</h3>';
    }
});