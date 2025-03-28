// Problema: Invitados que Pueden Sentarse Juntos

// Lista ordenada alfabéticamente
//const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

// Elementos
const btnResultado = document.getElementById("verResultado")
const cuadroResultado = document.getElementById("resultado")

// Función
function encontrarPareja() {

    //Solicitar array
    const input = prompt('Lista en el formato: ["invitado1","invitado2","..."]');

    // Convertir el string en un array
    const array = JSON.parse(input);


    let inicio = 0;
    let siguiente = 1;

    while (siguiente < array.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
        if(array[inicio].charAt(0) === array[siguiente].charAt(0)){
            return cuadroResultado.innerHTML =  `✦. ── ${array[inicio]} y ${array[siguiente]} ── .✦`
        };

        // TODO: Avanza los punteros si no coinciden
        inicio ++
        siguiente ++;

    }

    return cuadroResultado.innerHTML = `No hay invitados con la misma inicial en su nombre.`
    //null; // Si no se encuentra ningún par
}

//console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]

// Evento
btnResultado.addEventListener("click",encontrarPareja)


/* ---------------------------------------------- */

// NOTAS DE CLASE
// Ejemplos de uso Algoritmo de los dos punteros

//1. Par de números que sumen el objetivo
function encontrarPar(array, objetivo){

    let izquierda = 0
    let derecha = array.length-1

    while(izquierda < derecha){
        let suma = array[izquierda] + array[derecha]

        if(suma === objetivo){
            return [array[izquierda], array[derecha]]
        }
        else if (suma < objetivo){
            izquierda ++
        }
        else{
            derecha --
        }
    }

    return null //o false
}

/* let array = [2,5,7,8,11,15,18]
let objetivo = 16

let resultado = encontrarPar(array, objetivo)
console.log(resultado) */


//2. Detectar palíndromo
function esPalindromo(palabra){

    let izquierda = 0
    let derecha = palabra.length-1

    while(izquierda < derecha){
        if(palabra[izquierda] !== palabra[derecha]){
            return false
        }

        izquierda ++
        derecha --

    }

    return true

}

/* console.log(esPalindromo([1,2,3,4,3,2,1]))
console.log(esPalindromo("aibofobia")) */

//3. Encontrar usuarios duplicados basado en el ID

const listaUsuarios = [
    {id:1, nombre: "ana"},
    {id:2, nombre: "carlos"},
    {id:2, nombre: "carmen"},
    {id:3, nombre: "daniel"},
    {id:4, nombre: "elena"},
    {id:4, nombre: "eduardo"},
    {id:5, nombre: "fernando"},
]

function encontrarDuplicados(usuarios){

    let izquierda = 0
    let derecha = 1
    let duplicados = []

    while(derecha < usuarios.length){
        if(usuarios[izquierda].id === usuarios[derecha].id){
            duplicados.push(usuarios[izquierda].id)
        }
        izquierda ++
        derecha ++
    }

    return duplicados.length > 0 ? duplicados : false
}

/* console.log(encontrarDuplicados(listaUsuarios)) */

