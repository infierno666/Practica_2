// js/ejercicio8.js
export function init_ejercicio8() {
    console.log("Ejercicio 8 listo.");

    $("#e8_create").off("click").on("click", function () {
        $("#e8_form_area").html(`
            <form id="dynamic_form" class="space-y-2 p-3 border rounded">
                <input type="text" id="user" placeholder="Usuario" class="w-full p-2 border rounded">
                <input type="password" id="pass" placeholder="Clave" class="w-full p-2 border rounded">
            </form>
        `);
    });

    $("#e8_show").off("click").on("click", function () {
        const elementos = $("#dynamic_form").children();
        let texto = "";

        elementos.each(function () {
            texto += `<p>${this.tagName} - id="${this.id}"</p>`;
        });

        $("#e8_form_area").append(`
            <div class="mt-3 p-2 border bg-gray-100 rounded">
                ${texto}
            </div>
        `);
    });
}
