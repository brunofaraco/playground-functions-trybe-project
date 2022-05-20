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

  for (let index6 = 0; index6 < array.length; index6 += 1) {
    if (higherNumber < array[index6]) {
      higherNumber = array[index6];
    };
  }
  for (let index62 = 0; index62 < array.length; index62 += 1) {
    if (higherNumber === array[index62]) {
      higherNumberCounter += 1;
    };
  };
  return higherNumberCounter;
} 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstDistance = Math.abs(cat1 - mouse);
  let secondDistance = Math.abs(cat2 - mouse);
  
  if (firstDistance < secondDistance) {
    return 'cat1'
  } else if (secondDistance < firstDistance) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(arrayFB) {
  let answerFB = [];
  let pointsSum = 0;

  for (let index8 = 0; index8 < arrayFB.length; index8 += 1) {
    if (arrayFB[index8] % 3 === 0 && arrayFB[index8] % 5 === 0) {
        pointsSum = (pointsSum * 0) + 8;
    } else if (arrayFB[index8] % 5 === 0) {
        pointsSum = (pointsSum * 0) + 5;
    } else if (arrayFB[index8] % 3 === 0) {
        pointsSum = (pointsSum * 0) + 3
    } else {
        pointsSum = pointsSum * 0;
    };

    if (pointsSum === 8) {
      answerFB.push('fizzBuzz');
    } else if (pointsSum === 5) {
      answerFB.push('buzz');
    } else if (pointsSum === 3) {
      answerFB.push('fizz');
    } else {
      answerFB.push('bug!')
    };
  };
  return answerFB;
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
