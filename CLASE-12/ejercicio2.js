/* Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la
contraseña es incorrecta, debe volver a pedirla hasta que el usuario
ingrese la correcta. La contraseña correcta es "1234". */

const prompt = require('prompt-sync')();

let clave = ''
let claveCorrecta = "1234"

do{
    clave = prompt("ingrese la clave de 4 digitos: ");
    
} while (clave !== claveCorrecta);

let usuario = prompt("ingrese su usuario: ");
let usuarioCorrecto = "pepito";

while( usuario !== usuarioCorrecto ){

    usuario = prompt("ingrese su usuario: ")
}
