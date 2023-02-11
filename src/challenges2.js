// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) return 'Array com tamanho incorreto.';

  const otherAnswer = 'não é possível gerar um número de telefone com esses valores';

  let error = false;

  arr.forEach((e) => {
    const timesEAppers = arr.filter((number) => number === e).length;
    if ((e > 9) || (e < 0) || (timesEAppers >= 3)) error = true;
  });

  if (error) return otherAnswer;

  const [a, b, c, d, e, f, g, h, i, j, k] = arr;

  return `(${a}${b}) ${c}${d}${e}${f}${g}-${h}${i}${j}${k}`;
}

// Desafio 12
function checkSidesSize(a, b, c) {
  const sideA = a < (b + c);
  const sideB = b < (a + c);
  const sideC = c < (a + b);

  if (sideA && sideB && sideC) return true;

  return false;
}

function checkAbsolutes(a, b, c) {
  const sideA = a > Math.abs(b - c);
  const sideB = b > Math.abs(a - c);
  const sideC = c > Math.abs(a - b);

  if (sideA && sideB && sideC) return true;

  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  const sizesChecked = checkSidesSize(lineA, lineB, lineC);
  const absolutesChecked = checkAbsolutes(lineA, lineB, lineC);

  if (sizesChecked && absolutesChecked) return true;

  return false;
}

// Desafio 13
function hydrate(string) {
  const numbersArr = string.match(/\d/g);

  const sum = numbersArr.reduce((acc, curr) => {
    acc += +curr;
    return acc;
  }, 0);

  return sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
