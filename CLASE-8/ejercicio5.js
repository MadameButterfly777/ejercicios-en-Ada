//Ejercicio 5: Saludo personalizado
//Enunciado:
//Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
//texto y la función prompt(). Escribe un programa que:
//1. Solicite al usuario que ingrese su nombre.
//2. Muestre un saludo personalizado usando el nombre ingresado.
 
const prompt = require('prompt-sync')();

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
 
console.log( "Hola,", nombre , apellido,  "¿como estas? ¿en que podemos ayudarte hoy?");