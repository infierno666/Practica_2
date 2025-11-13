// js/ejercicio6.js
export function init_ejercicio6() {
    console.log("Ejercicio 6 listo.");

    $("#e6_apply").off("click").on("click", function () {
        $(".oop").css("background-color", "yellow");
    });
}
