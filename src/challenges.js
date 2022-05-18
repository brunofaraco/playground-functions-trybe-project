// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = 0.5 * base * height;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let wordsSeparated = sentence.split(' ');
  return wordsSeparated;
}

// Desafio 4
function concatName(array) {
  let lastAndFirst = array[array.length - 1] + ", " + array[0];
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let higherNumberCounter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (higherNumber < array[index]) {
      higherNumber = array[index];
    };
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (higherNumber === array[index2]) {
      higherNumberCounter += 1;
    };
  };
  return higherNumberCounter;
} 

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
