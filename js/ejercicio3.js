// js/ejercicio3.js
export function init_ejercicio3() {
    console.log("Ejercicio 3 listo.");

    $("#e3_title1, #e3_title2").off("click").on("click", function () {
        $(this).css({
            "background-color": "#ffe4f2",
            "color": "#b30059",
            "font-family": "Courier New",
            "padding": "10px",
            "border-radius": "6px"
        });
    });
}
