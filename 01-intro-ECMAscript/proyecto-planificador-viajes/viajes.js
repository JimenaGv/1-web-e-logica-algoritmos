
// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, personas) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        personas: personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, personas) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "París") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "Nueva York") {
        costoBase = 600;
    } else if (destino === "Tokio") {
        costoBase = 800;
    } else if (destino === "Seúl") {
        costoBase = 700;
    } else if (destino === "Berlín") {
        costoBase = 500;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Barco") {
        costoBase += 300;
    } else if (transporte === "Autobús") {
        costoBase += 150;
    }


    // Aplicar descuento según el número de personas
    const descuento = calcularDescuento(personas);

    return Math.round(costoBase * personas * (1 - descuento));
};


// Función para calcular el descuento
const calcularDescuento = (personas) => {
    if (personas >= 5) {
        return 0.20; // 20% de descuento
    } else if (personas >= 3) {
        return 0.10; // 10% de descuento
    }
    return 0; // Sin descuento para parejas o personas que viajan solas
};


// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Número de personas: ${viaje.personas}`);
        console.log(`Costo total: $${viaje.costo}`);
        console.log("---------------------------");
    }
};
