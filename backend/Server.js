import express from "express";
import cors from "cors";

//? Importamos la base de datos
import db from "./database/db.js"

//? Importamos las rutas
import peliculaRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/peliculas', peliculaRoutes)

try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos");
} catch (error) {
    console.log(`Error: ${error}`);
}

// app.get("/", (req, res) => {
//     res.send("Hola mundo");
// })

app.listen(8000, () => {
    console.log("Servidor corriendo en http://localhost:8000/");
})