import analyzer from './analyzer.js';



const testo = document.querySelector("textarea");
const boton1 = document.getElementById("limpiar");

testo.addEventListener("keyup", analizador);
boton1.addEventListener("click",limpieza);

// document.getElementsByTagName("textarea")[0].onkeyup = 
function analizador(){
  const text1 = document.getElementsByTagName("textarea")[0].value;
  document.querySelector ('li[data-testid="word-count"]').textContent = 'Palabras: '+ analyzer.getWordCount (text1);
  document.querySelector('li[data-testid="character-count"]').innerText = 'Caracteres: '+ analyzer.getCharacterCount (text1);
  document.querySelector ('li[data-testid="character-no-spaces-count"]').innerText = 'Caracteres sin espacios: ' + analyzer.getCharacterCountExcludingSpaces (text1);
  document.querySelector ('li[data-testid="number-count"]').innerText = 'Números: ' + analyzer.getNumberCount (text1);
  document.querySelector ('li[data-testid="number-sum"]').innerText = 'Suma números: ' + analyzer.getNumberSum (text1);
  document.querySelector ('li[data-testid="world-lenght-average"]').innerText = 'Promedio longitud: ' + analyzer.getAverageWordLength (text1);
}   


function limpieza(){
  document.getElementsByTagName("textarea")[0].value = ""; 
  document.querySelector('li[data-testid="word-count"]').innerText = 'Palabras: 0';
  document.querySelector('li[data-testid="character-count"]').innerText = 'Caracteres: 0';
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerText = 'Caracteres sin espacios: 0';
  document.querySelector('li[data-testid="number-count"]').innerText = 'Números: 0';
  document.querySelector('li[data-testid="number-sum"]').innerText = 'Suma números: 0';
  document.querySelector('li[data-testid="world-lenght-average"]').innerText = 'Promedio longitud: 0';
}