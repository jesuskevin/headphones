'use strict';

    // inicializamos AOS libreria
    AOS.init();

    const menu = document.getElementById('menu'); //SELECCCIONAMOS EL MENU
    const menuBar = document.getElementById('menu-bar'); //SELECCIONAMOS EL ICONO
    const links = document.querySelectorAll('a'); //SELECCIONAMOS LOS ENLACES DEL MENU

    // ESCONDE Y MUESTRA EL MENU RESPONSIVE CUANDO SE HACE CLICK EN EL ICONO
    menuBar.addEventListener('click', () => {
        menu.classList.toggle('menu-toggle');
    });

    // ESCONDE EL MENU CUANDO SE HACE CLICK EN UN ENLACE
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('menu-toggle');
        });
    });