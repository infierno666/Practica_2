// js/ejercicio2.js
export function init_ejercicio2() {
    console.log("Ejercicio 2 listo.");

    $("#e2_hide").off("click").on("click", function () {
        $("#e2_list1 li, #e2_list2 li").hide(400);
    });

    $("#e2_show").off("click").on("click", function () {
        $("#e2_list1 li, #e2_list2 li").show(400);
    });
}
