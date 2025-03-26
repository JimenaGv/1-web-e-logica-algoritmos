// Proyecto: Filtro y Orden de Productos de una Tienda Online

//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa", imagen: "img/camisetas.png" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica", imagen: "img/laptop.png" },
    { nombre: "Libro", precio: 12, categoria: "Educación", imagen: "img/libros.png" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa", imagen: "img/zapatos.png" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica", imagen: "img/celular.png" },
];


// ELEMENTOS
let productosFiltrados = [...productos]; //El operador spread (...productos) se usa para copiar el contenido del array productos en productosFiltrados. Evita cambios no deseados en el array original.

const container = document.querySelector(".container");
const categoriaSelect = document.getElementById("categoria");
const filtrarBaratosBtn = document.getElementById("filtrarBaratos");
const ordenarBtn = document.getElementById("ordenarAlfabetico");
const precioTotalSpan = document.getElementById("precioTotal");


// FUNCIONES

/* // Usar filter() para obtener los productos que cuesten menos de $100

const productosMenosDe100 = productos.filter(producto => producto.precio < 100);
//console.log(productosMenosDe100)


// Usar sort() para ordenar esos productos alfabéticamente por su nombre

const ordenAlfabetico = productos.sort((a,b) => a.nombre.localeCompare(b.nombre));
// localeCompare sirve para comparar cadenas de texto según las reglas de idioma específico.
// Se puede aplicar sort directamente
//console.log(ordenAlfabetico)


// Usar map() para generar un nuevo arreglo que contenga solo los nombres de los productos

const nombresProductos = productos.map(producto => producto.nombre);
// console.log(nombresProductos)


// Filtro por categoría
let categoriaSeleccionada = "Ropa"
const productosCategoria = productos.filter(producto => producto.categoria === categoriaSeleccionada);
//console.log(productosCategoria)


// Precio total
const precioTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
 */

// Mostrar nombres
/* const mostrarProductos = () => {
 for (let i = 0; i < productos.length; i++){
    container.innerHTML += `<p>${productos[i].nombre} <br> $${productos[i].precio}.00 </p>`
 }   
} */

function mostrarProductos() {
    container.innerHTML = "";
    productosFiltrados.forEach((producto, index) => {
        container.innerHTML += `
            <div class="card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}.00</p>
                <div class="cantidad-control">
                    <input type="number" value="0" min="0" max="10" id="cantidad-${index}">
                </div>
            </div>
        `;
    });

    // Asignar eventos de cambio a cada input. Cuando el usuario cambia la cantidad, se ejecuta la función actualizarTotal() (para cada <input type="number">). _ es un placeholder que indica que no nos interesa el primer parámetro (el producto), solo el index.
    productosFiltrados.forEach((_, index) => {
        document.getElementById(`cantidad-${index}`).addEventListener("change", actualizarTotal);
    });
}


function actualizarTotal() {
    let total = 0;
    productosFiltrados.forEach((producto, index) => {
        const cantidad = parseInt(document.getElementById(`cantidad-${index}`).value);
        total += producto.precio * cantidad;
    });
    precioTotalSpan.textContent = total.toFixed(2);

    // Convierte el valor del input a un número entero (parseInt). Actualiza el elemento precioTotalSpan con el total, mostrando dos decimales (.toFixed(2)).
}


// EVENTOS

categoriaSelect.addEventListener("change", () => {
    const categoria = categoriaSelect.value;
    productosFiltrados = categoria === "Todos" ? [...productos] : productos.filter(producto => producto.categoria === categoria);
    mostrarProductos();
    actualizarTotal();


    // Si el usuario selecciona "Todos", se copian todos los productos ([...productos]).Si elige otra categoría, se filtran los productos que pertenezcan a esa categoría.
    // El signo ? es parte de un operador llamado operador ternario o condicional ternario. Es una forma abreviada de escribir una sentencia if-else. "condición ? valor_si_verdadero : valor_si_falso;"

});


filtrarBaratosBtn.addEventListener("click", () => {
    productosFiltrados = productos.filter(producto => producto.precio < 100);
    mostrarProductos();
    actualizarTotal();
});


ordenarBtn.addEventListener("click", () => {
    productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarProductos();
});



mostrarProductos()
