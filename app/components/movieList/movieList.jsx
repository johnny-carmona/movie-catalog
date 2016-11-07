require('./style.scss');
import React from 'react';
import Movie from '../movie/movie.jsx';

const MovieList = ({movies, showMovie}) => {    
    return(
        <ul className="movie-list">
            {movies.map((movie, index) => 
                <li key={index}><Movie {...movie} onClick={() => showMovie(movie.original_title, movie.overview, movie.poster_path)} /></li>
            )}
        </ul>
    )
}

export default MovieList;