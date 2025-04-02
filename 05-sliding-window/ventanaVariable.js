
const array = [2,3,1,2,4,3]
const target = 7

function ventanaVariable(arr, target) {

    let sumaActual = 0
    let inicio = 0
    
    let longitudMinima = Infinity

    for (let fin = 0; fin < array.length; fin ++) {
        
        sumaActual += arr[fin]

        while (sumaActual >= target) {

            longitudMinima = Math.min(longitudMinima, fin - inicio + 1)

            sumaActual -= arr[inicio]

            inicio ++

        }

    }

    return longitudMinima === Infinity ? 0 : longitudMinima
}

console.log( ventanaVariable(array,target) )
