const prompt = require("prompt-sync")({siginit: true});

let numInput = prompt ("Introduce los numeros--> ")
let suma = 0

while (numInput !== "cancelar"){ 
    if (Number(numInput)) {
        numeros = Number(numInput)
        suma = (suma + numeros)
    } else {
        console.log("Eso no son números" )         
    }

    numInput = prompt("Introduce los numeros--> ")
}

console.log("Has cancelado el proceso, la suma es: " + suma);