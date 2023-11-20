const pt = require("prompt-sync")({ sigint: true})

const edad = pt("¿Cual es tu edad? => ");

if ( (edad)  >= 18 ){
        console.log("Tienes edad para conducir")
    } else {
        console.log("No tienes edad para conducir")
    }