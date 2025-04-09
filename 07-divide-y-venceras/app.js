
// PROYECTO: Búsqueda del Máximo en un Arreglo

const output = document.querySelector("#output")
// Seleccionar div para resultado


function findMax(arr) {
    // TODO: Agregar la condición del caso base
    // Devolver el elemento único del array o undefined si está vacío
    if (arr.length <= 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length/2)/* calcular el punto medio */;
    const left = arr.slice(0, mid)/* obtener la primera mitad */;
    const right = arr.slice(mid)/* obtener la segunda mitad */;

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left)/* llamada recursiva */;
    const rightMax = findMax(right)/* llamada recursiva */;

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax)/* máximo entre leftMax y rightMax */;
}

// Ejemplo de entrada
//const numbers = [3, 8, 2, 10, 5, 7];
//console.log(findMax(numbers)); // Salida esperada: 10

const arreglo = JSON.parse(prompt('Por favor, escribe el array en este formato: [num1,num2,...]')) // Solicitar array

//console.log(findMax(arreglo))

output.innerHTML = findMax(arreglo) // Mostrar resultado en pantalla


// .............................................



// NOTAS DE CLASE:
// Uso de recursión 
// Suma de números en un array
function sumadyv (arr) {

    // Caso base
    // Cuando el array tenga un solo elemento
    if (arr.length === 1) {
        return arr[0]
    }

    // Dividir el array en mitades
    const medio = Math.floor(arr.length/2) // Encontrar la mitad del array, redondeando hacia abajo el número de elementos
    const izq = arr.slice(0, medio) // Copiar los elementos del array desde 0 hasta el medio
    const der = arr.slice(medio) // Copiar desde el medio hasta el final 

    // Conquistar
    // Se dividen a la mitad hasta que el caso base se cumpla (tener un elemento)
    const sumaIzq = sumadyv(izq)
    const sumaDer = sumadyv(der)

    // Combinar
    // Sumar los valores individuales
    return sumaIzq + sumaDer

}

//console.log(sumadyv([1,4,3,5,8,2]))


// Búsqueda binaria
function busquedaBinaria (arr, target, inicio = 0, fin = arr.length - 1) {

    // Caso base
    if (inicio > fin) {
        return -1
    }

    // Calcular índice medio
    const medio = Math.floor( (inicio+fin)/2 )

    // Si el elemento del medio es el que buscamos, entonces lo devolvemos
    if (arr[medio] === target) return medio

    // Si el elemento del medio es mayor al target, buscamos en la mitad izquierda
    if (arr[medio] > target) {
        return busquedaBinaria(arr, target, inicio, medio - 1)
    } else{
        return busquedaBinaria(arr, target, medio + 1, fin) // Si no, se busca en la mitad derecha
    }

}

//console.log(busquedaBinaria([1,3,5,7,9], 7)) // Se encuentra en la posición 3


// Merge Sort
// Ordena una lista o arreglo. Lo divide en partes pequeñas y luego las combina.

// [4,2,1,3]


function mergeSort (arr) {

    // Caso base
    // Retornar el arreglo si este tiene uno o ningún elemento (ya están organizados)
    if (arr.length <= 1) return arr

    // Dividir arreglo en mitades
    const medio = Math.floor(arr.length/2)
    // Llamadas recursivas
    const izq = mergeSort(arr.slice(0, medio))
    const der = mergeSort(arr.slice(medio))

    // Unir ambas mitades ordenadas (Conquista)
    return merge(izq, der)

}

// Función externa para ver cuál elemento es mayor o menor
function merge (izq, der) {

    const result = []

    // variables (punteros) que inician en 0 para cada mitad
    let i = 0
    let j = 0

    while (i < izq.length && j < der.length) {
        // Comparar valores de las mitades mientras se cumpla la condición
        if (izq[i] < der[j]) {
            result.push(izq[i]) // añadir el menor valor
            i ++ // variable control
        } else {
            result.push(der[j])
            j ++
        }
    }

    return result.concat(izq.slice(i)).concat(der.slice(j))

}

//console.log(mergeSort([4,2,1,5]))

