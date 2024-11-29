// js/api.js

const API_URL = 'http://localhost:3000/libros';

// Función para obtener todos los libros
export async function obtenerLibros() {
    const response = await fetch(API_URL);
    const libros = await response.json();
    return libros;
}

// Función para agregar un nuevo libro
export async function agregarLibro(libro) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(libro)
    });
    return response.json();
}

// Función para eliminar un libro
export async function eliminarLibro(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
}
