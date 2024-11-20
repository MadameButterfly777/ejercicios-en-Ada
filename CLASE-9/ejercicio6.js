/* Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.
 */
const prompt = require('prompt-sync')();

let edad = parseFloat(prompt("ingrese su edad"));

if (edad >= 18) {
    console.log(" Usted es mayor de edad: puede votar, fumar y casarse con su prima si quiere")
} else {
    console.log("raja pa' alla vo'")
}