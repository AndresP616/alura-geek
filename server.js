// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta absoluta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configura CORS
app.use(cors());

// Servir archivos estáticos (incluyendo imágenes) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener libros
app.get('/libros', (req, res) => {
    res.sendFile(path.join(__dirname, 'db.json'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


