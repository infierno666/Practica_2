// js/ejercicio1.js
export function init_ejercicio1() {
    // Selector de todos los elementos a animar
    const $items = $('#e1_gallery img');
    const duration = 400; // Duración estándar de la animación

    // Oculta las imágenes al inicio para asegurar que el primer click las muestre
    $items.hide(0);

    // Función genérica para aplicar el efecto en secuencia (para toggle, fadeToggle, etc.)
    function applySequentialEffect(effectMethod) {
        // Detenemos todas las animaciones en curso
        $items.stop(true, true);

        $items.each(function (i) {
            // Aplica un retraso basado en el índice (i) para la secuencia (200ms)
            $(this).delay(i * 200)[effectMethod](duration);
        });
    }

    // Función para efectos individuales sin secuencia (para fadeOut, fadeIn, etc.)
    function applyInstantEffect(effectMethod) {
        $items.stop(true, true)[effectMethod](duration);
    }

    // Función para aplicar animación personalizada (animate)
    function animateOpacity(opacityValue) {
        $items.stop(true, true).each(function (i) {
            $(this).delay(i * 150).animate({
                opacity: opacityValue,
            }, duration);
        });
    }

    // --- Manejadores de Eventos ---

    // Show / Hide (Toggle)
    $('#btn_toggle').on("click", function () { applySequentialEffect('toggle'); });

    // Fade
    $('#btn_fadeOut').on("click", function () { applyInstantEffect('fadeOut'); });
    $('#btn_fadeIn').on("click", function () { applyInstantEffect('fadeIn'); });
    $('#btn_fadeToggle').on("click", function () { applySequentialEffect('fadeToggle'); });

    // Slide
    $('#btn_slideUp').on("click", function () { applyInstantEffect('slideUp'); });
    $('#btn_slideDown').on("click", function () { applyInstantEffect('slideDown'); });
    $('#btn_slideToggle').on("click", function () { applySequentialEffect('slideToggle'); });

    // Animate (Opacidad)
    $('#btn_opacity_low').on("click", function () { animateOpacity(0.5); });
    $('#btn_opacity_full').on("click", function () { animateOpacity(1.0); });

    // Secuencia Completa (Encadenamiento de efectos con callback)
    $('#btn_full_sequence').on("click", function () {
        $items.stop(true, true).hide(0).css('border-radius', '1rem'); // Reset visual

        $items.each(function (i) {
            // Detener cualquier animación previa, Retraso inicial
            $(this).stop(true, true).delay(i * 200)
                // 1. Mostrar deslizando (slideDown)
                .slideDown(500)
                // 2. Encadenar: Cambiar a opacidad media
                .animate({ opacity: 0.5 }, 300)
                // 3. Encadenar: Desaparecer (fadeOut)
                .fadeOut(300)
                // 4. Encadenar: Aparecer (fadeIn)
                .fadeIn(300)
                // 5. Encadenar: Volver a opacidad total y color normal
                .animate({ opacity: 1.0 }, 500);
        });
    });

    // Resetear
    $('#btn_reset').on("click", function () {
        // Detiene todas las animaciones y asegura que los elementos estén visibles y con opacidad 1
        $items.stop(true, true).show(0).css({
            'opacity': 1,
            'border-radius': '1rem' // Asegura el reseteo del bonus de animate
        });
        console.log("Galería reseteada.");
    });
}
