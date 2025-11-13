// js/ejercicio10.js
export function init_ejercicio10() {
    console.log("Ejercicio 10 listo.");

    const max = 100;

    $("#e10_text").off("input").on("input", function () {
        const restantes = max - $(this).val().length;
        $("#e10_count").text(`Caracteres restantes: ${restantes}`);
    });

    $("#e10_count").text(`Caracteres restantes: ${max}`);
}
