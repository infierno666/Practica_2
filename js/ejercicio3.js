// js/ejercicio3.js
export function init_ejercicio3() {
    console.log("Ejercicio 3 listo.");

    // Estilos para el Título 1: Metal/Heavy - Usando la fuente extravagante
    const newStyles = {
        'color': '#FFFFFF',             // Color de fuente: Blanco
        'background-color': '#EF4444', // Color de fondo: Rojo (Tailwind red-500)
        'font-family': 'Georgia, serif', // Tipo de fuente: Serif
        'border-color': '#B91C1C',      // Borde lateral: Rojo oscuro
        'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)' // Sombra ligera
    };

    // Estilos para el Título 2: Black Metal/Terror - Usando la fuente extravagante
    const secondaryStyles = {
        'color': '#374151',             // Gris oscuro
        'background-color': '#34D399', // Verde brillante (Tailwind emerald-400)
        'font-family': 'monospace',     // Fuente monoespaciada
        'border-color': '#065F46'
    };

    // Propiedades a resetear
    const propertiesToReset = {
        'color': '',
        'background-color': '',
        'font-family': '',
        'border-color': '',
        'box-shadow': ''
    };


    // 1. Manejador de clic para el Título 1
    $('#titulo1').on('click', function () {
        $(this).stop(true, true).css(newStyles);
    });

    // 2. Manejador de clic para el Título 2
    $('#titulo2').on('click', function () {
        $(this).stop(true, true).css(secondaryStyles);
    });

    // 3. Manejador de clic para el botón de Reset
    $('#reset-btn').on('click', function () {
        // Aplica el reset de estilos a ambos títulos
        $('#titulo1, #titulo2').stop(true, true).css(propertiesToReset);
    });

}
