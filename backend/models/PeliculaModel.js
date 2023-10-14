//? Importar la conexión de la base de datos
import db from "../database/db.js";

//? Importar sequelize
import { DataTypes } from "sequelize";

const PeliculaModel = db.define('peliculas', {
    titulo: {type: DataTypes.STRING},
    resenia: {type: DataTypes.STRING}
})

export default PeliculaModel;