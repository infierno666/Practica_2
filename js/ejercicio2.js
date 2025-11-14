// js/ejercicio2.js
export function init_ejercicio2() {
    console.log("Ejercicio 2 listo.");

    // Selector eficiente: apunta a todos los <li> dentro de cualquier elemento con la clase 'target-list'
    const $listItems = $('.target-list li');

    // Función para Ocultar con efecto de deslizamiento
    $('#hide-btn').on('click', function () {
        // Detiene animaciones pendientes (.stop) y las desliza hacia arriba
        $listItems.stop(true, true).slideUp(800, function () {
            console.log("Todos los items ocultados.");
        });
    });

    // Función para Mostrar con efecto de deslizamiento
    $('#show-btn').on('click', function () {
        // Detiene animaciones pendientes y las desliza hacia abajo
        $listItems.stop(true, true).slideDown(800, function () {
            console.log("Todos los items mostrados.");
        });
    });


}
