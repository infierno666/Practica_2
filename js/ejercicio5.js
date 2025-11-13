// js/ejercicio5.js
export function init_ejercicio5() {
    console.log("Ejercicio 5 listo.");

    $("#e5_run").off("click").on("click", function () {
        const lista = $("#e5_list");

        lista.append("<li>Nuevo item (append)</li>");
        lista.prepend("<li>Nuevo item (prepend)</li>");
        lista.children().last().fadeOut(400).fadeIn(400);
    });
}
