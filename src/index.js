import analyzer from './analyzer.js';



const testo = document.querySelector("textarea");
const boton1 = document.getElementById("limpiar");

testo.addEventListener("keyup", analizador);
boton1.addEventListener("click",limpieza);

// document.getElementsByTagName("textarea")[0].onkeyup = 
function analizador(){
  const text1 = document.getElementsByTagName("textarea")[0].value;
  document.querySelector ('li[data-testid="word-count"]').textContent = 'Recuento de palabras: '+ analyzer.getWordCount (text1);
  document.querySelector('li[data-testid="character-count"]').innerText = 'Recuento de caracteres:'+ analyzer.getCharacterCount (text1);
  document.querySelector ('li[data-testid="character-no-spaces-count"]').innerText = 'Caracteres excluyendo espacios: ' + analyzer.getCharacterCountExcludingSpaces (text1);
  document.querySelector ('li[data-testid="number-count"]').innerText = 'Recuento de números: ' + analyzer.getNumberCount (text1);
  document.querySelector ('li[data-testid="number-sum"]').innerText = 'Suma total de números: ' + analyzer.getNumberSum (text1);
  document.querySelector ('li[data-testid="world-lenght-average"]').innerText = 'Longitud media de las palabras:' + analyzer.getAverageWordLength (text1);
}   


function limpieza(){
  document.getElementsByTagName("textarea")[0].value = ""; 
  document.querySelector('li[data-testid="word-count"]').innerText = 'Recuento de palabras: 0';
  document.querySelector('li[data-testid="character-count"]').innerText = 'Recuento de caracteres: 0';
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerText = 'Recuento de caracteres excluyendo espacios: 0';
  document.querySelector('li[data-testid="number-count"]').innerText = 'Recuento de números: 0';
  document.querySelector('li[data-testid="number-sum"]').innerText = 'Suma total de números: 0';
  document.querySelector('li[data-testid="world-lenght-average"]').innerText = 'Longitud media de las palabras: 0';
}