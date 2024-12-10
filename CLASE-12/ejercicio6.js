/* Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén
por encima o sean iguales a 10, pero menores que 1000.
 */
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];
let suma = 0
for (let indiceFila = 0 ; indiceFila < matriz.length; indiceFila++){

    for(let indiceColumna = 0; indiceColumna < matriz[indiceFila].length; indiceColumna++){
        let elemento = matriz[indiceFila][indiceColumna]
        if (elemento >= 10 && elemento <= 1000){
            suma += elemento
            
        }
    }
}
console.log(suma);
