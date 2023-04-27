// Desafio 1 - Crie a função compareTrue
const compareTrue = (val1, val2) => val1 && val2 === true;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (str) => {
  let word = str.split(' ');
  return word;
};
// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array.slice(-1)}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (win, ties) => {
  let winPoint = win * 3;
  let tiesPoit = ties * 1;
  let totalPoint = winPoint + tiesPoit;
  return totalPoint;
};

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  const max = Math.max.apply(null, array);
  let soma = 0;
  for (let index of array) {
    if (max === index) {
      soma += 1;
    }
  }
  return soma;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => {
  let calcTri = (base * height) / 2;
  return calcTri;
};
const calcRectangleArea = (base, height) => {
  let calcRe = base * height;
  return calcRe;
};
const calcAllAreas = (base, height, form) => {
  let results = null;
  if (form === 'triângulo') {
    results = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    results = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    results = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return results;
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => array.map((number) => {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzBuzz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
});
// Desafio 9 - Crie a função encode e a função decode
function encode(string) {
  const vogais = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return string.replace(/[aeiou]/g, m => vogais[m]);
}

function decode(string) {
  const numeros = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return string.replace(/[12345]/g, (m) => numeros[m]);
}
// Desafio 10 - Crie a função techList
const techList = (array, name) => {
  let result = [];
  let ordenar = array.sort()
  for (let index in array) {
    const tech = ordenar[index];
    result.push({ tech, name });
  }
  return result;
};
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
