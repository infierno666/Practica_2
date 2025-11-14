// js/ejercicio10.js
export function init_ejercicio10() {
    console.log("Ejercicio 10 listo.");

    const max = $("#campoTexto").attr("maxlength");

    $("#campoTexto")
        .off("input")
        .on("input", function () {
            const usados = $(this).val().length;
            const restantes = max - usados;
            $("#contador").text(restantes);
        });

    $("#contador").text(max);
}
