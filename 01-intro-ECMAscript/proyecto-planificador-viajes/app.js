
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("París", "2024-06-15", "Avión", 6);
    registrarDestino("Londres", "2024-07-01", "Tren", 2);
    registrarDestino("Seúl", "2025-04-20", "Barco", 4);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();
