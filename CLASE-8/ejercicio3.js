//Ejercicio 3: Suma de dos números ingresados por el usuario
//Enunciado:
//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
//aritméticos. Escribe un programa que:
//1. Pida al usuario que ingrese dos números.
//2. Sume ambos números.
//3. Muestre el resultado de la suma.

const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt("ingrese el primer numero"));
let numero2 = parseFloat(prompt("ingrese el segundo numero"));
let resultado = (numero1 + numero2)

console.log("su numero es ", resultado);
