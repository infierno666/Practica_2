// js/ejercicio7.js
export function init_ejercicio7() {
    console.log("Ejercicio 7 listo.");

    $("#e7_add").off("click").on("click", function () {
        $("#e7_container p").addClass("bg-green-100 p-2 rounded");
    });

    $("#e7_remove").off("click").on("click", function () {
        $("#e7_container p").removeClass("bg-green-100 p-2 rounded");
    });
}
