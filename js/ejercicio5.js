export function init_ejercicio5() {
    console.log("Ejercicio 5 cargado.");

    const $list = $("#e5_list");

    // Limpia eventos previos
    $("#btn_add, #btn_remove, #btn_color, #btn_text, #btn_hide, #btn_show, #btn_animate")
        .off("click");

    // 1. Agregar elemento
    $("#btn_add").on("click", function () {
        const count = $list.children().length + 1;
        $list.append(`<li>Item ${count}</li>`);
    });

    // 2. Quitar último elemento
    $("#btn_remove").on("click", function () {
        $list.children().last().remove();
    });

    // 3. Cambiar color
    $("#btn_color").on("click", function () {
        $list.children().css({
            color: "#1d4ed8",   // azul
            transition: "0.3s"
        });
    });

    // 4. Cambiar textos
    $("#btn_text").on("click", function () {
        $list.children().each(function (i) {
            $(this).text(`Nuevo texto ${i + 1}`);
        });
    });

    // 5. Ocultar lista
    $("#btn_hide").on("click", function () {
        $list.slideUp(400);
    });

    // 6. Mostrar lista
    $("#btn_show").on("click", function () {
        $list.slideDown(400);
    });

    // 7. Animación completa
    $("#btn_animate").on("click", function () {
        $list.children().each(function (i) {
            $(this)
                .delay(150 * i)
                .animate({ paddingLeft: "20px", opacity: 0.5 }, 300)
                .animate({ paddingLeft: "0px", opacity: 1 }, 300);
        });
    });
}
