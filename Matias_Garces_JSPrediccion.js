function miEdad() {

    console.log("Tengo: " + 25 + " años");
 
 }
 // imprimiria el mensaje "Tengo 25 años", en este mensaje imprimido tenemos dos tipos de datos, de cadena y numerico, al agregar "+" los concatenaria para mostrarlos como un solo mensaje proveniente de dos tipos de informacion (var) distintas.

 function miEdad(edad) {

    console.log("Tengo: " + edad + " años");
 
 }
 // Si hubiera una variable con el nombre edad y tuviera en ella 25, el mensaje mostraria "Tengo 25 años" ya que la var edad es numerica, no necesita estar dentro de "", a pesar de ser texto, la function sabe que edad es una var numerica con un valor y el valor es el q muestra en su campo.

 function restar(primerNumero, segundoNumero) {

   console.log("¡Restemos los números!");

   console.log("primerNumero es:" + primerNumero);

   console.log("segundoNumero es:" + segundoNumero);

   var resultado = primerNumero - segundoNumero;

   console.log(resultado);

}

// Lo que console.log mostraria es esto: "¡Restemos los números! primerNumero es:50 segundoNumero es:27 23 (cada uno de los console.log en su propia linea, no uno al lado del otro)"