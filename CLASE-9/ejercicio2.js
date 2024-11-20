/* Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes. */

const prompt = require('prompt-sync')();

const RANGO_MINIMO = 10
const RANGO_MAXIMO = 20
let numero = parseFloat(prompt("ingrese un numero "));

if (RANGO_MINIMO <= numero && RANGO_MAXIMO >= numero) {
    console.log("el numero esta en rango ")
}else {
    console.log("el numero no esta en rango ")
}
