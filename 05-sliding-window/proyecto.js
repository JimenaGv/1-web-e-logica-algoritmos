// Problema: Encontrar la Palabra Más Larga

function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(" ");

    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {

        //Verificar resultados
        //console.log(words[i], words[i].length)

        // TODO: Comparar la longitud de la palabra actual con la más larga
        if (words[i].length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = words[i];
        }
    };

    // TODO: Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"


// Solución del problema con ventana variable. Recorrer el texto en lugar de dividirlo por palabras.

function palabraMasLarga(texto) {

    // Inicializar variable para la palabra más larga como cadena vacía
    let palabraLarga = '';
    let inicio = 0; // Puntero que indica la posición inicial dentro del texto
    
    // Recorrer cada carácter del texto. Expandir el puntero que indica la posición actual en el texto (fin)
    for (let fin = 0; fin < texto.length; fin ++) {

        // Identificar espacios (final de una palabra) o final del texto
        if (texto[fin] === " " || fin === text.length) {

            // Extraer una parte limitada del texto (palabra) con slice(desde,hasta -no incluido-)
            let palabra = texto.slice(inicio, fin);

            // Comparar la longitud de la palabra que se acaba de recorrer con la longitud de la palabra más larga en el momento
            palabraLarga = palabra.length > palabraLarga.length ? palabra : palabraLarga;

            // Definir inicio de la siguiente palabra
            inicio = fin + 1;

        }

    }

    return palabraLarga // Devolver la palabra más larga encontrada
}

console.log(palabraMasLarga("El desarrollo de software requiere creatividad, lógica y paciencia.")); 

