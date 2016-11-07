require('./style.scss');

import React from 'react';

const Movie = (props) => {    
    return (
        <a className="movie" href="#" onClick={props.onClick}>
            <p><span className="movie-title">{props.original_title}</span></p>
            <p className="description">{props.overview}</p>
            <p><img src={props.poster_path} /></p>
        </a>
    )
}
export default Movie;