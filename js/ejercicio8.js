export function init_ejercicio8() {
    console.log("Ejercicio 8 cargado.");

    const $area = $("#e8_form_area");
    const $output = $("#e8_output");

    // Limpiar listeners
    $("#e8_create").off("click");
    $("#e8_show").off("click");

    // ⭐ 1. CREAR FORMULARIO DINÁMICO
    $("#e8_create").on("click", function () {

        // Evitar duplicación del formulario
        if ($("#e8_generated_form").length > 0) {
            alert("El formulario ya fue creado.");
            return;
        }

        const formHTML = `
            <form id="e8_generated_form" class="space-y-4">
                <div>
                    <label class="block font-semibold text-gray-700">Nombre de usuario:</label>
                    <input type="text" class="w-full border rounded p-2 mt-1">
                </div>

                <div>
                    <label class="block font-semibold text-gray-700">Clave:</label>
                    <input type="password" class="w-full border rounded p-2 mt-1">
                </div>
            </form>
        `;

        $area.hide().html(formHTML).slideDown(300);
        $output.addClass("hidden").text("");
    });

    // ⭐ 2. MOSTRAR ELEMENTOS HTML DEL FORMULARIO
    $("#e8_show").on("click", function () {

        const form = $("#e8_generated_form");

        if (form.length === 0) {
            alert("Primero debes crear el formulario.");
            return;
        }

        // Obtener el HTML tal cual fue generado
        const htmlCode = $("<div>").append(form.clone()).html();

        $output.text(htmlCode).removeClass("hidden").hide().fadeIn(300);
    });
}
