import analyzer from './analyzer.js';
document.getElementsByTagName("textarea")[0].onkeyup = function(){
  const text1 = document.getElementsByTagName("textarea")[0].value;
  analyzer.getWordCount (text1);
  analyzer.getCharacterCount (text1);
  analyzer.getCharacterCountExcludingSpaces (text1);
  analyzer.getNumberCount (text1);
  analyzer.getNumberSum (text1);
  analyzer.getAverageWordLength (text1);
}   
document.getElementById("limpiar").onclick =function(){
  document.getElementsByTagName("textarea")[0].value = "";
  document.querySelector('li[data-testid="word-count"]').innerText = 'Recuento de palabras: 0';
  document.querySelector('li[data-testid="character-count"]').innerText = 'Recuento de caracteres: 0';
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerText = 'Recuento de caracteres excluyendo espacios: 0';
  document.querySelector('li[data-testid="number-count"]').innerText = 'Recuento de números: 0';
  document.querySelector('li[data-testid="number-sum"]').innerText = 'Suma total de números: 0';
  document.querySelector('li[data-testid="world-lenght-average"]').innerText = 'Longitud media de las palabras: 0';
}