/* Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente
hasta que el usuario ingrese un número negativo. Luego, imprime la suma
de todos los números ingresados. */ 

const prompt = require('prompt-sync')();
let numeros = parseFloat(prompt("ingrese un numero positivo, la cuenta se detendra cuando ingrese uno negativo: "));
let suma = 0

while(numeros >= 0) {
   suma += numeros
   numeros = parseFloat(prompt("ingrese un numero positivo, la cuenta se detendra cuando ingrese uno negativo: "));
};
console.log("la suma de los numeros es: " + suma);
