/* Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El
programa debe mostrar todos los números pares que se encuentran entre esos
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el
programa debe mostrar un mensaje indicando que los valores son inválidos. */

const prompt = require('prompt-sync')()

 let inicio = parseFloat(prompt("ingrese el primer valor entero: "))
 let fin = parseFloat(prompt("ingrese el segundo valor: "))
 
  if (inicio > fin){
    console.log("lor valores ingresados son invalidos")
  }

 for ( let vuelta = inicio ; vuelta <= fin  ; vuelta++){
    if ( vuelta %2 === 0){
        console.log(vuelta)
    }
 }