import React, {useEffect, useState} from 'react'
import axios from './axios'
import './Row.css'
import Info from './Info'
const baseUrl = 'https://image.tmdb.org/t/p/original/'

export default function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setmovies] = useState([]);
    const [movieName, setMovieName] = useState('')
    const [movieDescription, setMovieDescription] = useState('')
    const [movieImagePath, setMovieImagePath] = useState('')

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (movieName && movieDescription && movieImagePath) {
            setMovieName('')
            setMovieDescription('')
            setMovieImagePath('')
        } else {
            setMovieName(movie.title || movie.name)
            setMovieDescription(movie.overview)
            setMovieImagePath(movie.backdrop_path)
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {''}
                {movies.map(movie => (
                    <img key={movie.id} onClick={()=>handleClick(movie)} className={`row-poster ${isLargeRow && 'row-poster-large'}`} src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            <div>
                {movieName && <Info name={movieName} description={movieDescription} image={movieImagePath} />}
            </div>
        </div>
    )
}
