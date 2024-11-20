//Ejercicio 4: Determinar si un número es par o impar
//Enunciado:
//En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
//Debes escribir un programa que:
//1. Solicite al usuario que ingrese un número entero.
//2. Determine si el número es par o impar.
//3. Muestre un mensaje indicando si el número es par o impar

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("ingrese un numero"));
let resultado = "";
let numero2 = (numero % 2);

if (numero2 == 0) {
    resultado = "par"
}
else 
    resultado = "impar"

console.log("el numero ingresado es " , resultado);