/* Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.
 */
const prompt = require('prompt-sync')();

let name = prompt("ingrese su nombre").toLowerCase();
let myName = 'georgina'.toLowerCase() ;

if (name == myName){
    console.log("Tocaya!! ")
}else {
    console.log("quien te conoce,gato? ")
}