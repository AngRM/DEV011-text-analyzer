const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabra = document.querySelector ('li[data-testid="word-count"]');
    const contadorPalabras = text.trim();
    const palabras = contadorPalabras.split(" ");
    let total = 0;
    if (palabras[0] === ""){
      total = 0;
    }else{
      total = palabras.length;
    }
    palabra.innerText = 'Recuento de palabras: ' + total;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracter = document.querySelector ('li[data-testid="character-count"]');
    const contadorCaracteres = text.trim();
    const caracteres = contadorCaracteres.length;
    caracter.innerText= 'Recuento de caracteres:' + caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const sinEspacios = document.querySelector ('li[data-testid="character-no-spaces-count"]');
    const contadorSinEspaciosExternos= text.trim();
    const sinEspaciosSplit = contadorSinEspaciosExternos.split(" ");
    const sinEspaciosJoin = sinEspaciosSplit.join ("");
    let longSinEspacios = sinEspaciosJoin.length;
    sinEspacios.innerText = 'Recuento de caracteres excluyendo espacios: ' + longSinEspacios++;

  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const promedio = document.querySelector ('li[data-testid="world-lenght-average"]');
    const contadorPalabras2 = text.trim();
    const palabras2 = contadorPalabras2.split(" ");
    const totalPalabras2 = palabras2.length;
    let sumaLongitudes = 0;

    for (let i = 0; i < palabras2.length; i++) {
      sumaLongitudes += palabras2 [i].length;
    }
    let promedioLongitud = 0
    if (totalPalabras2 > 0 ) {
      promedioLongitud = sumaLongitudes / totalPalabras2;
    }
    promedio.innerText = 'Longitud media de las palabras: ' +  promedioLongitud.toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const cuentaNumeros = document.querySelector ('li[data-testid="number-count"]');
    let cN = 0;

    for (let i = 0; i < text.length; i++) 
    {
      const iterar2 = text [i];
      if (iterar2 >= '0' && iterar2 <= '9') {
        cN++;
      }
      if (iterar2[0] === ""){
        cN = 0;
      }
    }
    cuentaNumeros.innerText = 'Recuento de números: ' + cN;  
  },
  getNumberSum: (text) => {
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const sumaNumeros = document.querySelector ('li[data-testid="number-sum"]');
    let sN = 0
    for (let i = 0; i < text.length; i++) {
      const iterar3 = text [i];
      if (iterar3 >= '0' && iterar3 <= '9') {
        sN += parseInt(iterar3, 10);
      }     
    }
    sumaNumeros.innerText = 'Suma total de números: ' + sN;  
  },
};

export default analyzer;

