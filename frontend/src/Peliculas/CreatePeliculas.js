import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const URI = 'http://localhost:8000/peliculas/'

const ComponenteCreatePeliculas = () => {

    const [titulo, setTitulo] = useState('');
    const [resenia, setResenia] = useState('');

    const navigate = useNavigate();
    
    //* Procedimiento guardar
    const guardar = async (e) => {
        e.preventDefault();
        await axios.post(URI, {titulo: titulo, resenia: resenia})
        navigate('/');
    }
    return (
        <>
            <div className='container py-4'>
                <form onSubmit={guardar}>
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
                    <button type='submit' className='btn btn-primary'><i className='bi bi-save'></i> Guardar</button>
                </form>
            </div>
        </>
    )
}

export default ComponenteCreatePeliculas;
