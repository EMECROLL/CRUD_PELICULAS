import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const URI = 'http://localhost:8000/peliculas/'

const ComponenteShowPeliculas = () =>{
    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        getPeliculas()
    },[])

    //* Procedimiento para mostrar todas las peliculas
    const getPeliculas = async () => {
        const res = await axios.get(URI)
        setPeliculas(res.data)
    }

    //* Procedimiento para eliminar una pelicula
    const eliminarPeliculas = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPeliculas()
    }

    return (
        <>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col'>
                        <Link to='/crear' className='btn btn-primary mt-2 mb-2'>Agregar</Link>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Reseña</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    peliculas.map((pelicula) => (
                                        <tr key={pelicula.id}>
                                            <td>{pelicula.titulo}</td>
                                            <td>{pelicula.resenia}</td>
                                            <td>
                                                <Link to={`/editar/${pelicula.id}`} className='mx-1 btn btn-info'>Editar</Link>
                                                <button onClick={(e) => eliminarPeliculas(pelicula.id)} className='btn btn-danger'>Eliminar</button>
                                            </td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComponenteShowPeliculas;

