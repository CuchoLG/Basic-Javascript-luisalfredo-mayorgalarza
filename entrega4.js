const prompt4 = require("prompt-sync")({siginit: true})

let textInput = prompt4("Introduce los textos--> ")
let cadena = ""
let texto

while (textInput!= "cancelar"){ 
    if (String(textInput)) {
        texto = String(textInput)
        cadena = (cadena + texto + "-" )
    } else {
        prompt4("Introduce los textos--> ")
    }
    textInput = prompt4("Introduce los textos--> ")
}

console.log("Has cancelado el proceso, los textos son: " + cadena);