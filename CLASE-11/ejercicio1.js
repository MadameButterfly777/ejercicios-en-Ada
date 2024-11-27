/* Actividades:

Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
que le pida al usuario un número cualquiera. El programa deberá analizar si el
número ingresado es positivo, negativo o cero. Utiliza estructuras if para
resolverlo y muestra un mensaje explicativo en cada caso. */

const prompt = require('prompt-sync')(); 

let numero = parseFloat(prompt("Escribe un número: "));

if (numero === 0 ){
    console.log("el numero ingresado es 0")
}else if( numero > 0) {
    console.log("el numero ingresado es positivo")
}                                                                    
else {
    console.log( "el numero ingresado es negativo")
} 

