const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const contadorPalabras = text.trim();
    const palabras = contadorPalabras.split(" ");
    let total = 0;
    if (palabras[0] === ""){
      total = 0;
    }else{
      total = palabras.length;
    }
    return total;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const contadorCaracteres = text.trim();
    const caracteres = contadorCaracteres.length;
    return caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresSinP = [',', '.', '/', '#', '!', '$', '%', '^', '&', '*', ';', ':', '{', '}', '=', '-', '_', '`', '~', '(', ')', '[', ']', '@', '"', "'", '¡', '¿'];
    let textoFiltrado = '';
    const contadorSinEspaciosExternos= text.trim();
    for (let i=0; i<contadorSinEspaciosExternos.length; i++) {
      const char =text.charAt(i);
      if (char !== ' ' && !caracteresSinP.includes(char)) {
        textoFiltrado += char;
      }
    }
    const longitud = textoFiltrado.length;
    return longitud;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // const promedio = document.querySelector ('li[data-testid="world-lenght-average"]');
    const contadorPalabras2 = text.trim();
    const palabras2 = contadorPalabras2.split(" ");
    const totalPalabras2 = palabras2.length;
    let sumaLongitudes = 0;
    for (let i = 0; i < palabras2.length; i++) {
      sumaLongitudes += palabras2 [i].length;
    }
    let promedioLongitud = 0;
    if (totalPalabras2 > 0 ) {
      promedioLongitud = sumaLongitudes / totalPalabras2;
    }
    return (parseFloat(promedioLongitud.toFixed(2)));
  },

  getNumberCount: (text) => {
    // TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const regex = /\b\d+(\.\d+)?\b/g; //buscar numeros en el texto 
    const matches = text.match(regex); //devuelve las condicionales que se establecieron enla parte superior
    if (!matches)
    {
      return 0;
    }
    return matches.length;
  },
  getNumberSum: (text) => {
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // let sN = 0
    // for (let i = 0; i < text.length; i++) {
    //   const iterar3 = text [i];
    //   if (iterar3 >= '0' && iterar3 <= '9') {
    //     sN += parseInt(iterar3, 10);
    //   }     
    // }
    // return sN
    const cuentaNumerosSuma = /(\d+(\.\d+)?)/g;
    const cuentaConDecimalSuma = text.match(cuentaNumerosSuma);
    const sumaNumeros= cuentaConDecimalSuma.reduce ((resultado,elemento)=> resultado + parseFloat (elemento), 0);
    return sumaNumeros; 
  },
}; 

export default analyzer;

