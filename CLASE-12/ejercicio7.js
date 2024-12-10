/* Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros
números enteros y positivos. Luego, escribe un algoritmo para sumar
todos los números en la matriz.
 */

let matriz = [
    [15, 36, 7, 13, 17],
    [356, 25, 11, 6, 24],
    [23, 45, 67, 87,98],
    [67, 78,9,10, 12],
    [56, 66, 345,6789, 456],
]
let suma = 0
for (let indiceFila = 0 ; indiceFila < matriz.length; indiceFila++ ){ 
    for (let indiceColumna = 0 ; indiceColumna < matriz[indiceFila].length ; indiceColumna++){
        suma+= matriz[indiceFila][indiceColumna]
    }
}
console.log(suma);
6