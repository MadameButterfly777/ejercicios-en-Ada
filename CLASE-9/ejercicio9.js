/* Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante P */

const prompt = require('prompt-sync')();

const Pi = 3.14159
let radio = parseFloat(prompt("ingrese el radio del circulo "));
let perímetro = 2 * Pi * radio;
let area = Pi * radio * radio; 

console.log("el area del circulo es ", area);
console.log("el perimetro es " , perímetro);





























































































