//? Importamos el Modelo
import PeliculaModel from "../models/PeliculaModel.js"

/ Operaciones Basicas del CRUD /

//* Obtener todas las Peliculas
export const getPeliculas = async (req, res) => {
    try {
        const peliculas = await PeliculaModel.findAll()
        res.json(peliculas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//* Crear/Create
export const createPelicula = async (req, res) => {
    try{
        await PeliculaModel.create(req.body)
        res.json({ message: "Información agregada correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//* Obtener/Read
export const getPelicula = async (req, res) => {
    try{
        const pelicula = await PeliculaModel.findAll({
            where: { id: req.params.id }
        })
        res.json(pelicula[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

//* Actualizar/Update
export const updatePelicula = async (req, res) => {
    try {
        await PeliculaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ message: "Información actualizada correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//* Elminar/Delete
export const deletePelicula = async (req, res) => {
    try {
        await PeliculaModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: "Información eliminada correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}