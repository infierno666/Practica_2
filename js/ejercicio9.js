export function init_ejercicio9() {
    console.log("Ejercicio 9 listo.");

    $("#texto1, #texto2").css("color", "blue");

    $("#texto1, #texto2")
        .off("focus")
        .on("focus", function () {
            $(this).css("color", "red");
        })
        .off("blur")
        .on("blur", function () {
            $(this).css("color", "blue");
        });
}
