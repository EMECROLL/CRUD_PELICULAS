import express from 'express';
const router = express.Router();

//? Importar controladores
import { getPeliculas, getPelicula, createPelicula, updatePelicula, deletePelicula  } from '../controllers/PeliculaController.js';

//* Rutas de peliculas
router.get('/', getPeliculas )
router.get('/:id', getPelicula )
router.post('/', createPelicula )
router.put('/:id', updatePelicula )
router.delete('/:id', deletePelicula )

export default router