// PROYECTO: LISTA DE COMPRAS

// Ya tienes ese elemento en la lista
// Volver visualmente más complejo


// CAPTURAR ELEMENTOS HTML
const btnAgregar = document.getElementsByTagName("button")[0]
const btnEliminar = document.getElementsByTagName("button")[1]
const btnMostrar = document.getElementsByTagName("button")[2]
const listaOutput = document.querySelector("#listaOutput")
const btnCopiar = document.querySelector("#btnCopiar")


// ARREGLO VACÍO
// let para que pueda sobreescribirse
let listaDeCompras = [];

// FUNCIONES
// Se pueden omitir los () cuando solo hay un parámetro
const agregarProducto = () => {
    let nombreProducto = prompt("Escribe el nombre del producto:")

    // Verificar si ya existe un producto con el mismo nombre
    const productoExistente = listaDeCompras.some(
        elemento => elemento.nombre.toLowerCase() === nombreProducto.toLowerCase()
    )

    if (productoExistente) {
        alert(`El producto "${nombreProducto}" ya está en la lista de compras.`);
        return; // Salir de la función si el producto ya existe
    };


    let precioProducto = prompt("¿Cuál es el precio del producto? (Sólo el valor)")
    let tamanioProducto = prompt("Escribe el peso [g] o volumen [mL] del producto (Sólo el valor):")
    let cantidadProducto = prompt("¿Cuántas unidades se requieren? (Sólo el valor)");

    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        tamanio: tamanioProducto,
        cantidad: cantidadProducto
    };

    listaDeCompras.push(producto)
};

const eliminarProducto = () => {
    let productoAEliminar = prompt("Escribe el nombre del producto que quieres eliminar:");

    const listaSinProducto = listaDeCompras.filter(elemento => elemento.nombre !== productoAEliminar)
    listaDeCompras = listaSinProducto;
};

const mostrarLista = () => {
    // Verifica que la lista no esté vacía
    if (listaDeCompras.length === 0) {
        listaOutput.innerHTML = "La lista de compras está vacía."
        return;
    }


    // Convierte la lista de compras en un formato legible
    let textoLista = listaDeCompras
        .map(producto => 
            `‣ Nombre: ${producto.nombre}, Precio: $${producto.precio}, Tamaño [g o mL]: ${producto.tamanio}, Cantidad [piezas]: ${producto.cantidad}`
        )
        .join("<br><br>")

    // Muestra el texto en un input de solo lectura
    listaOutput.innerHTML = textoLista; 

    // Para mostrar en Consola los objetos de la lista
    /* listaDeCompras.forEach(elemento => console.log(elemento)) */
};


const copiarLista = () => {
    if (listaOutput.innerHTML === "" || listaOutput.innerHTML === "La lista de compras está vacía.") return

    const listaCopia = listaOutput.innerHTML
    navigator.clipboard.writeText(listaCopia)
};



// PRUEBAS
/* agregarProducto("manzana")
agregarProducto("sandía")
agregarProducto("pera")
agregarProducto("piña")
agregarProducto("fresa")

eliminarProducto("sandía") */

//console.log(listaDeCompras)

//mostrarLista()



// VINCULACIONES
btnAgregar.addEventListener("click",agregarProducto)
btnEliminar.addEventListener("click",eliminarProducto) 
btnMostrar.addEventListener("click",mostrarLista) 

btnCopiar.addEventListener("click",copiarLista)
