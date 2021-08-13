import React from 'react';
import './Banner.css';

export default function Info({name, description, image}) {
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
    return (
        <div className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                https://image.tmdb.org/t/p/original/${image}
                )`,
                backgroundPosition:"center center"
            }}>
            <div className="banner-fade-bottom">
                <div className="banner-contents">
                    <h1 className="banner-title">{name}</h1>
                    <div className="banner-buttons">
                        
                        <a href={`https://www.youtube.com/results?search_query=trailer+${name}`} target="_blank" className="banner-button">Find YouTube Trailer</a>
                        
                    </div>
                    <h2 className="banner-description">{truncate(description,300)}</h2>
                </div>
            </div>    
        </div>
    )
}
