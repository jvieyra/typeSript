"use strict";
var esSuperman = true;
var esBatman;
var esAquaman = true;
if (esSuperman) {
    console.log('estamos salvados');
}
else {
    console.log('Oooops ohh!');
}
esSuperman = convertirClark();
function convertirClark() {
    return false;
}
//numbers
var avengers = 5;
var villanos;
var otros = 2;
if (avengers > villanos) {
    console.log('estamos salvados');
}
else {
    console.log('estamos muertos');
}
//string
var batman = 'Batman';
var linternaVerde = 'Linterna Verde';
var volcanNegro = "Volcan Negro";
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
var concatenar = "Los heros son " + batman + ",\n    " + linternaVerde + ", " + volcanNegro;
console.log(concatenar);
//any
var vengador = 123;
var existe;
var derrotas;
vengador = "Dr Strange";
console.log(vengador.charAt(0));
vengador = 150.99230;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
//arrays
var arreglo = [1, 2, 2, 3, 2, 3];
var villanos1 = ['a', 'b', 'c'];
//tuplas
var heroe = ["Dr strange", 100];
//enumeraciones
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
//void
function llamarBatman() {
    console.log("Mostrar la batiseñal");
}
var mensaje = llamarBatman();
//never nunca puede suceder
function error(mensaje) {
    throw new Error(mensaje);
}
error("error critico");
//aserciones de tipo
var cualquierValor = "Supongo";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
//NULL UNDEFINED
var nada = undefined;
nada = null;
var ironman;
ironman = "tony";
ironman = undefined;
