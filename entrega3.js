const prompt = require("prompt-sync")();

let sumaTotal = 0;

while (true) {
    
    const input = prompt("Ingresa un número o escribe 'cancelar' para salir: ");

    if (input.toLowerCase() === "cancelar") {
        break;
    }

    const numero = parseFloat(input);

    if (!isNaN(numero)) {
        sumaTotal += numero;
    } else {
        
        console.log("No entendido. Por favor, ingresa un número válido.");
    }
}

console.log("La suma total de los números introducidos es: " + sumaTotal);
