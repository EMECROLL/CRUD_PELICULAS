import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/peliculas/'

const ComponenteEditPelicula = () => {

    const [titulo, setTitulo] = useState('');
    const [resenia, setResenia] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    //* Procedimiento para guardar
    const editar = async (e) => {
        e.preventDefault();
        await axios.put(URI+id, {
            titulo: titulo,
            resenia: resenia
        })
        navigate('/');
    }

    useEffect( () => {
        getPeliculaById();
    },[])

    const getPeliculaById = async () => {
        const res = await axios.get(URI+id)
        setTitulo(res.data.titulo)
        setResenia(res.data.resenia)
    }

    return(
        <>
            <div className='container py-4'>
                <form onSubmit={editar}>
                    <div className='mb-3'>
                        <label className='form-label'>Titulo de la pelicula</label>
                        <input
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        type='text'
                        className='form-control'
                        >
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Reseña de la pelicula</label>
                        <textarea
                        value={resenia}
                        onChange={(e) => setResenia(e.target.value)}
                        type='text'
                        className='form-control'
                        >
                        </textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'><i className='bi bi-save'></i>Actualizar</button>
                </form>
            </div>
        </>
    )
}

export default ComponenteEditPelicula;