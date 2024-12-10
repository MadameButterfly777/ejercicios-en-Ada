/* • Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)  */
 const prompt = require('prompt-sync')();

 let nombres = []
 for( vuelta = 1; vuelta <= 5; vuelta++){
    let nombre = (prompt("ingrese un nombre: "));
    nombres.push(nombre)
}
console.log("Los nombres ingresados son: " + nombres);
