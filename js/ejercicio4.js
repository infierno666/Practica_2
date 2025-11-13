// js/ejercicio4.js
export function init_ejercicio4() {
    console.log("Ejercicio 4 listo.");

    $(".e4_link").off().hover(
        function () {
            $(this).css("background-color", "#fddede");
        },
        function () {
            $(this).css("background-color", "");
        }
    );
}
