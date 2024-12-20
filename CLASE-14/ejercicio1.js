/* • Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos
parámetros: la base y la altura de un triángulo. La función debe devolver el
área del triángulo.
Pista: Usa la fórmula: Area = base x altura sobre 2 */
const prompt = require('prompt-sync')();

let base = parseFloat(prompt("Ingresa la base: "));
let altura = parseFloat(prompt("Ingrese la altura: "));

function calcularAreaTriangulo(base, altura){
    let Area = (base * altura ) / 2;
    return Area;
}
console.log("el area del triangulo es ", calcularAreaTriangulo(base, altura));
