// js/ejercicio9.js
export function init_ejercicio9() {
    console.log("Ejercicio 9 listo.");

    $("#e9_text1, #e9_text2")
        .css("color", "blue")
        .off("focus")
        .on("focus", function () {
            $(this).css("color", "red");
        })
        .off("blur")
        .on("blur", function () {
            $(this).css("color", "blue");
        });
}
