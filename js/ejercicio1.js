// js/ejercicio1.js
export function init_ejercicio1() {
    console.log("Ejercicio 1 listo.");

    $("#e1_run").off("click").on("click", function () {
        $("#e1_gallery img").each(function (i) {
            $(this)
                .delay(i * 300)
                .fadeToggle(600)
                .slideToggle(600);
        });
    });
}
