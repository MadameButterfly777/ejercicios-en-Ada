/* Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el
método “push” en los Arrays. ¡Este método lo veremos en las próximas
clases, pero si desean pueden investigarlo para resolver este desafío! */

function diagonalRoja(matriz){
    let suma = 0
    for (let indiceFila = 0; indiceFila < matriz.length; indiceFila++){
        for (let indiceColumna = 0; indiceColumna < matriz[indiceFila].length; indiceColumna++){
            if (indiceColumna === indiceFila){
                suma+= matriz[indiceFila][indiceColumna]
            }
        }
    }
    return suma
  
    
    
}
function diagonaVerde(matriz){
    let suma = 0
    for (let indiceFila = 0; indiceFila < matriz.length; indiceFila++){
        for (let indiceColumna = 0; indiceColumna < matriz[indiceFila].length; indiceColumna++){
            if(indiceColumna + indiceFila === 9 ){
                suma += matriz[indiceFila][indiceColumna]
            }
        }
    }
    return suma
    
}

let matriz2 = []
for (let x = 0; x <=9 ; x++){
    let fila = []

    for(let i = 1; i<= 10; i++ ){
        fila.push(i+x*10)
    }
    matriz2.push(fila)
}

let sumaRoja = diagonalRoja(matriz2)
let sumaVerde = diagonaVerde(matriz2)
 console.log(sumaRoja , sumaVerde);
 