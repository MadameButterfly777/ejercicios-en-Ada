/* Ejercicio 2 – Usando las variables:
Escribe un programa que pida al usuario que ingrese su nombre, su
edad y su peso, y luego muestre un mensaje personalizado que incluya
toda esta información. */
const prompt = require('prompt-sync')(); 

let nombre = prompt("ingrese su nombre: ");
let edad = parseFloat(prompt("ingrese su edad: "));
let peso = parseFloat(prompt("ingrese su peso "));

console.log(" hola,", nombre," su edad es ", edad, " años y su peso es ", peso ," kilos.");