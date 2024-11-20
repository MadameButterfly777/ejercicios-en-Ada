//Ejercicio 2: Verificar si un número es positivo, negativo o cero
//Enunciado:
//En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
//programa en JavaScript que:
//1. Pida al usuario que ingrese un número.
//2. Verifique si el número es positivo, negativo o igual a cero.
//3. Muestre un mensaje indicando cuál es el caso.
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("ingrese un numero"));
let resultado = ''

if (numero > 0) {
 resultado = "positivo"
}
else if (numero < 0) {
    resultado = "negativo"
}
else resultado = "cero"
 console.log("el numero es :" , resultado);