// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  const area = 0.5 * base * height;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  const wordsSeparated = sentence.split(' ');

  return wordsSeparated;
}

// Desafio 4
function concatName(array) {
  let lastAndFirst = `${array[array.length - 1]}, ${array[0]}`;

  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);

  return totalPoints;
}

// Desafio 6
function highestCount(arr) {
  const higherNumber = Math.max(...arr);

  const higherNumberCounter = arr.reduce((acc, curr) => {
    if (curr === higherNumber) acc += 1;
    return acc;
  }, 0);

  return higherNumberCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const firstDistance = Math.abs(cat1 - mouse);
  const secondDistance = Math.abs(cat2 - mouse);

  if (firstDistance < secondDistance) return 'cat1';
  if (secondDistance < firstDistance) return 'cat2';
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(arrayFB) {
  const result = arrayFB.map((e) => {
    if (e % 3 === 0 && e % 5 === 0) return 'fizzBuzz';
    if (e % 3 === 0) return 'fizz';
    if (e % 5 === 0) return 'buzz';
    return 'bug!';
  });

  return result;
}

// Desafio 9

const mapping = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function encode(message) {
  let encoded = '';

  for (let i = 0; i < message.length; i += 1) {
    encoded += mapping[message[i]] || message[i];
  }

  return encoded;
}

function decode(message) {
  let decoded = '';

  for (let i = 0; i < message.length; i += 1) {
    decoded += mapping[message[i]] || message[i];
  }

  return decoded;
}

// Desafio 10
function techList(arr, name) {
  if (!arr.length || !name) return 'Vazio!';

  const list = arr.sort().reduce((acc, curr) => {
    acc.push({
      tech: curr,
      name,
    });

    return acc;
  }, []);

  return list;
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
