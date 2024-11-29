// js/listarLibros.js

import { obtenerLibros, eliminarLibro } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const librosContainer = document.getElementById('libro-container');
    const libros = await obtenerLibros();

    librosContainer.innerHTML = libros.length 
        ? libros.map(libro => crearCardLibro(libro)).join('') 
        : '<p>No se han agregado productos</p>';

    function crearCardLibro(libro) {
        return `
            <div class="card" data-id="${libro.id}">
                <img src="${libro.imagen}" alt="Imagen de ${libro.nombre}" />
                <div class="card-container--info">
                    <p>${libro.nombre}</p>
                    <div class="card-container--value">
                        <p>$${libro.precio}</p>
                        <img src="./img/icono-eliminar.png" class="eliminar" alt="Eliminar libro" />
                    </div>
                </div>
            </div>
        `;
    }

    librosContainer.addEventListener('click', async (event) => {
        if (event.target.classList.contains('eliminar')) {
            const card = event.target.closest('.card');
            const id = card.getAttribute('data-id');
            await eliminarLibro(id);
            card.remove();
        }
    });
});

