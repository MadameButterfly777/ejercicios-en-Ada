
const prompt = require('prompt-sync')(); 

let numero = parseFloat(prompt("Escribe un número"));
let mensaje1 = numero > 0 ? console.log("Es un número positivo") : console.log("El número es negativo") ;
let mensaje2 = numero == 0 ? console.log("'El número es cero'") : mensaje1;
console.log(mensaje2);

if (i === 3 ){
    console.log("bla")
}else if( i === 4) {
    console.log('es cuatro')
}                                                                    
else {
    console.log( "pepito")
} 
switch (i){
    case 3: 
        console.log('bla')
        break
    case 4:
        console.log('es cuatro') 
        break   
    default:
        console.log('pepito')
        break
} 
i === 3 ? console.log('bla'): console.log('pepito')
