/* Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas. */

const prompt = require('prompt-sync')();

let condicion1 = prompt('ingrese true o false').toLowerCase() === 'true';
let condicion2 = prompt('ingrese true o false').toLowerCase() === 'true';
console.log(condicion1 && condicion2);
console.log(condicion1 || condicion2);
