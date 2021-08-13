import React, {useEffect, useState} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';

export default function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.Trending);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length -1)])
        }
        fetchData();
    },[]);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
            )`,
            backgroundPosition:"center center"
        }}>
            <div className="banner-fade-bottom" >
            <div className="banner-contents">
                <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <a href='https://www.youtube.com/' target="_blank" className="banner-button">Find YouTube Trailer</a>
                </div>
                <h2 className="banner-description">{truncate(movie?.overview,150)}</h2>
            </div>
            </div>
        </header>
    )
}
