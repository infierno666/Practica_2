// js/main.js — Archivo principal de la Práctica 2 (jQuery)
// Importa todos los módulos y gestiona la lógica general

import { showExercise, hideExercise } from './modals.js';
import { init_ejercicio1 } from './ejercicio1.js';
import { init_ejercicio2 } from './ejercicio2.js';
import { init_ejercicio3 } from './ejercicio3.js';
import { init_ejercicio4 } from './ejercicio4.js';
import { init_ejercicio5 } from './ejercicio5.js';
import { init_ejercicio6 } from './ejercicio6.js';
import { init_ejercicio7 } from './ejercicio7.js';
import { init_ejercicio8 } from './ejercicio8.js';
import { init_ejercicio9 } from './ejercicio9.js';
import { init_ejercicio10 } from './ejercicio10.js';

// Mapa de inicializadores
const initFunctions = {
    ejercicio1: init_ejercicio1,
    ejercicio2: init_ejercicio2,
    ejercicio3: init_ejercicio3,
    ejercicio4: init_ejercicio4,
    ejercicio5: init_ejercicio5,
    ejercicio6: init_ejercicio6,
    ejercicio7: init_ejercicio7,
    ejercicio8: init_ejercicio8,
    ejercicio9: init_ejercicio9,
    ejercicio10: init_ejercicio10,
};

// Se ejecuta cuando el DOM y jQuery están listos
$(document).ready(function () {

    // Exponer funciones al ámbito global
    window.showExercise = (viewId) => showExercise(viewId, initFunctions);
    window.hideExercise = hideExercise;

    console.log("Práctica 2 iniciada con jQuery. Ejercicios cargados:", Object.keys(initFunctions).length);

    // Menú móvil (igual que en la práctica anterior)
    const menuToggle = $('#menu-toggle');
    const mobileMenu = $('#mobile-menu');
    let isOpen = false;

    menuToggle.on('click', function () {
        isOpen = !isOpen;
        mobileMenu.toggleClass('hidden');
        menuToggle.html(isOpen
            ? '<i class="fas fa-times text-2xl"></i>'
            : '<i class="fas fa-bars text-2xl"></i>');
    });
});
