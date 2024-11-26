/* Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación
matemática a realizar: suma, resta, multiplicación o división. Según la operación
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
ingresa una operación inválida, el programa debe mostrar un mensaje de error.
Usa switch para resolverlo. */
const prompt = require('prompt-sync')()
let numero1 = parseFloat(prompt("ingrese el primer numero: "));
let numero2= parseFloat(prompt("ingresel segundo numero: "));
let operacionNumerica = prompt("ingrese una operacion numerica: ");

switch (operacionNumerica){
    case "suma":
        console.log (numero1 + numero2)
        break 
    case "resta":
            console.log (numero1 - numero2)
            break 
    case "division":
                console.log (numero1 / numero2)
                break 
    case "multiplicacion":
                    console.log (numero1 * numero2)
                    break 
    default:
        console.log("operacion invalida")
}