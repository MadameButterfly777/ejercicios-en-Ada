// Ejercicio 1:
// Declara dos variables numéricas numero1 y numero2. Pide al usuario
// que ingrese dos números y muestra cuál es mayor o si son iguales.
const prompt = require('prompt-sync')();
 let numero1 = parseFloat(prompt("ingrese un numero"));
 let numero2 = parseFloat(prompt("ingrese un segundo numero"));
  
 if (numero1 > numero2) {
    console.log("el numero " , numero1 ,  " es mayor")
 }
 else if (numero1 < numero2) {
    console.log("el numero " , numero1 , "es menor")
 }
 else { 
    console.log("los numeros son iguales")
 }