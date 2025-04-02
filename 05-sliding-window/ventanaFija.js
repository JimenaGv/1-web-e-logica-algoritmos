// NOTAS DE CLASE

const array = [-4,-1,-3,0,5,12]

const k = 3 // Tamaño de la ventana

// Opción 1:

/* function maxSum (arr, k) {
    // Almacenar resultados de suma
    let izq = 0
    let der = izq + k - 1

    // Verificar que la ventana está bien definida
    //console.log(arr[izq], arr[der])

    let sum = 0

    for (let i = izq; i <= der; i++) {
        sum += arr[i]
    }

    console.log(sum) // Verificar suma de los elementos

} */


// Opción 2:
function maxSum (arr, k) {

    // Obtener la sección del array determinada por la ventana
    let initialWindow = arr.slice(0,k)

    //console.log(initialWindow) // Verificar la ventana

    // Reducir la ventana a un elemento
    // acc = acumulador, val = valor actual
    let sum = initialWindow.reduce( (acc, val) => acc + val )

    //console.log(sum) // Verificar suma de los elementos

    let maxSum = sum

    for (let i = k; i < arr.length; i ++) {
        // Se suma el número siguiente y se resta el anterior
        sum += arr[i] - arr[i-k]

        // Si maxSum es mayor que sum, entonces se deja el valor de maxSum; si no, se deja el valor de sum
        maxSum = maxSum > sum ? maxSum : sum 
        
        // También se puede usar Math.max; ofrece la ventaja de poder comparar más de dos valores.
        //maxSum = Math.max(maxSum, sum)

    }

    return maxSum

}

console.log( maxSum(array,k) )
