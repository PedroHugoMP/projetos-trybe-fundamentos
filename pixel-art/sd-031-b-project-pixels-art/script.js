// Variaveis não dinamicas
const colores = document.getElementsByClassName('color');
const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const cor4 = document.getElementById('cor4');
const botaoCor = document.getElementById('button-random-color');
const botaoLimpar = document.getElementById('clear-board');
const bntVQV = document.getElementById('generate-board')
const quadro = document.getElementById('pixel-board');
const catPixels = document.querySelectorAll('.pixel');
const palete = document.getElementById('color-palette')
const tamanho = document.getElementById('board-size');
// =======
const geradorDeColores = () => {
    let r = Math.random() * 225;
    let g = Math.random() * 225;
    let b = Math.random() * 225;
    return `rgb(${r}, ${g}, ${b})`;
}
const inserindoColores = () => {
     let color1 = cor1.style.backgroundColor = 'black';
     let color3 = cor3.style.backgroundColor = geradorDeColores();
     let color2 = cor2.style.backgroundColor = geradorDeColores();
     let color4 = cor4.style.backgroundColor = geradorDeColores();
};
const guardarColores = () => {
    localStorage.setItem('color2', 'color2');
    localStorage.setItem('color3', 'color3');
    localStorage.setItem('color4', 'color4');
     color2 = localStorage.getItem('color2');
     color3 = localStorage.getItem('color3');
     color4 = localStorage.getItem('color4');
};
const criaPixel = (t) =>{
for (let index = 0; index < t; index += 1) {
  for (let indice = 0; indice < t; indice += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    quadro.appendChild(pixel);
  }
};
};
cor1.classList.add('selected');
palete.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected) selected.classList.remove('selected');
    event.target.classList.add('selected');
  });
  
  quadro.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  });
botaoLimpar.addEventListener('click', () => {
  const limparPixel = document.querySelectorAll('.pixel');
  for (let pixel of limparPixel){
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  }
});
const mudarTamanho = () => {
  criaPixel(tamanho)
};


const tamanhoLimite = () => {
  const contPixel = document.querySelector('.pixel');
  for (let index of contPixel){
  if(contPixel[index] <= 5 || contPixel[index] >= 50){
      criaPixel(5);
      window.alert("tamanho não aceito"); 
    }
  }
};

// chamando funções
 // tamanhoLimite();
 inserindoColores();
 bntVQV.addEventListener('click', mudarTamanho);
 botaoCor.addEventListener('click', inserindoColores);
 guardarColores();
 console.log(localStorage.length);
 criaPixel(5);