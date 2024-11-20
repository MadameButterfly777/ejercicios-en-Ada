/* Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres. */

const prompt = require('prompt-sync')();

let numero1 = prompt("ingrese el primer numero");
let numero2 = prompt("ingrese el segundo numero");
let numero3 = prompt("ingrese el tercer numero");

if (numero1 > numero2 && numero3) {
    console.log(numero1 , " es el numero mayor")
} else if (numero2 > numero1 && numero3) {
    console.log(numero2 , " es el numero mayor")
}else {
    console.log(numero3 , " es el numero mayor")
}