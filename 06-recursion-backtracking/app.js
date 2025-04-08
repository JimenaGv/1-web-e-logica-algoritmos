// Problema: Buscar un objeto en una lista de regalos

// Lista de regalos
//const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];
const gifts = JSON.parse(prompt('Escribe la lista de regalos como array, ej. ["objeto1","objeto2","..."]'))

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {

  // TODO: Incluye el caso base donde se llega al final de la lista.
  // Caso base: Si llegamos al final de la lista
  if (index === gifts.length) {
      return `${giftName} no está en la lista.`;
  }

  // TODO: Incluye el caso base donde se encuentra el regalo.
  if (gifts[index] === giftName) {
    return `${giftName} está en la posición ${index} (contando desde 0).`;
  }

  // TODO: Realiza la llamada recursiva para seguir buscando el regalo.
  return findGift(gifts, giftName, index + 1);
  // ⚠️ No olvidar el return para devolver el resultado a la llamada inicial!

}

// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
//let giftToFind = "Lego";
//console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
//let giftToFind = "Camión";
//console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Camión no está en la lista."

let giftToFind = prompt("¿Cuál es el objeto que buscas?");
console.log(findGift(gifts, giftToFind));


//-----------------------------------------------
// NOTAS DE CLASE

// Recursión
// Cuenta regresiva
function  cuentaAtras(num){
  //debugger 
  // Para ver los pasos en la función. Se puede observar la pila de ejecución. Se "almacenan" los valores y luego se devuelven uno por uno (como si se vaciara la pila).
  
  // Caso base // Es OBLIGATORIO 
  if(num === 0){
    return // Se detiene la función
  }

  console.log(num) // Mostrar número
  // Llamada recursiva
  // Para números distintos a 0
  cuentaAtras(num - 1) // Cada vez el número se hace más pequeño

}

//cuentaAtras(5)

// Factorial
function factorial (x) {

  //debugger

  // Caso base
  if (x === 0){
    return 1
  }

  // Llamada recursiva
  return x * factorial(x-1)

}

//console.log( factorial(5) ) //120
// Obtiene todos los valores de x hasta llegar al caso base y resuelve para devolver el resultado final

// También se puede visualizar la ejecución con: https://pythontutor.com/javascript.html#mode=edit ⚠️❗

// Encontrar número par
// Diferente a num % 2 == 0
// 6-2-2-2 = 0 >> Par
// 7-2-2-2 = 1 >> Impar
function encontrarPar(num){

  // Caso base
  if (num === 0) {
    return "par"
  }else if (num === 1){
    return "impar"
  }else{
    // Llamada recursiva
    return encontrarPar(num-2)
  }
 
}

//console.log(encontrarPar(6))
//console.log(encontrarPar(7))


// Backtracking
// Función que encuentre todas las combinaciones de un array
function generarCombinaciones(arr, index=0, nuevaCadena = []) {

  console.log(nuevaCadena)

  for (let i = index; i < arr.length; i++) {
    // Agregar elemento a nuevaCadena
    nuevaCadena.push(arr[i])

    // Llamada recursiva
    generarCombinaciones(arr, i+1, nuevaCadena)

    // Backtracking eliminando el último elemento de nuevaCadena
    // Retrocede para generar las otras combinaciones
    nuevaCadena.pop()

  }

}

// [1,2,3] -> length = 3
// []
// [1]
// [1,2]
// [1,2,3]
// [1,3]

//generarCombinaciones([1,2,3])

