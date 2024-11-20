/* Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula) */

const prompt = require('prompt-sync')();

let longitud1 = parseFloat(prompt("ingrese la primer longitud"));
let longitud2 = parseFloat(prompt("ingrese la segunda longitud"));
let longitud3 = parseFloat(prompt("ingrese ña tercer longitud"));

if (longitud1 === longitud2 && longitud1 === longitud3 && longitud2 === longitud1 && longitud2 === longitud3) {
    console.log("el triangulo es equilatero")
}else if (longitud1 === longitud2 || longitud1 === longitud3 || longitud2 === longitud1 || longitud2 === longitud3) {
    console.log("el triangulo es isosceles")
}else{
    console.log("el triangulo es escaleno")
}