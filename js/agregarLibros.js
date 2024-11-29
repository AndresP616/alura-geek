// js/agregarLibros.js

import { agregarLibro } from './api.js';

document.getElementById('form-agregar-libro').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre-libro').value;
    const precio = document.getElementById('precio-libro').value;
    const imagen = document.getElementById('imagen-libro').value;

    const nuevoLibro = { nombre, precio, imagen };
    await agregarLibro(nuevoLibro);

    // Resetear formulario
    event.target.reset();

    
});

