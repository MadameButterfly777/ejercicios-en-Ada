/* Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de
gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una
semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana
2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana.
Recordemos que cada fila representa una semana, es decir, si nos
indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar
que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto
nos solicitan dar el total de un día en particular, por ejemplo del día
3, acá también tengamos en cuenta lo que ocurre con las filas, ya
que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el
mes.
✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por
columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el
día que más gastos se realizaron.
✓ Posibles matrices para comprobar los resultados */
let matriz = [
    [1, 2500, 900, 1600, 2800, 3650, 1100],
    [1, 2, 2, 2, 2, 2, 2],
    [1, 1150, 1690, 1900, 1770, 4500, 2560],
    [1, 1250, 1430, 2100, 1980, 1270, 950],
];
function maximo (numero1, numero2){
    let maximo = 0 
    if (numero1 > numero2){
        maximo = numero1
    } else {
        maximo = numero2
    }
    return maximo
}
function buscarSemanaMaxima (){
    let maximoActual = sumarSemana(1)
    for (let indiceSemana = 2; indiceSemana <= 4; indiceSemana++){
        maximoActual = maximo (maximoActual, sumarSemana(indiceSemana))
    }
     return maximoActual
}


function sumarSemana (numeroSemana){
    let indiceFila = numeroSemana - 1;
    let suma = 0
    for (let i = 0 ; i < matriz[indiceFila].length; i++){
      suma+= matriz[indiceFila][i]

    }
    return suma
}
function sumarDia ( numeroDia){
    let indiceColumna = numeroDia - 1;
    let suma = 0
    for (let indiceFila = 0; indiceFila < matriz.length; indiceFila++){
        suma+= matriz[indiceFila][indiceColumna]
    }
    return suma
}
console.log(sumarDia(1));

console.log(sumarSemana(2))

function sumaTotal(){
    let suma = 0
    for (let indiceFila = 0 ; indiceFila < matriz.length; indiceFila++ ){ 
        for (let indiceColumna = 0 ; indiceColumna < matriz[indiceFila].length ; indiceColumna++){
            suma+= matriz[indiceFila][indiceColumna]
        }
    }
    return suma
}

console.log(sumaTotal());
console.log(buscarSemanaMaxima());
