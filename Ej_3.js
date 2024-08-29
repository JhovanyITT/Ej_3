// 3.	Palíndromo: Dada una palabra y verifica si es un 
//     palíndromo (es decir, si se lee igual de adelante hacia 
//     atrás que de atrás hacia adelante).

const palabra = "reconocer";
var palabraVolteada = "";

// Volteando la palabra
var i = 0;
for (i = palabra.length; i >= 0; i--) {
    palabraVolteada += palabra.charAt(i);
}

var j = 0;
for (j = 0; j < palabra.length - 1; j++) {
    if (palabra.charAt(j) !== palabraVolteada.charAt(j)) {
        console.log("No es palíndromo");
        return;
    }
}

console.log("Es palíndromo");