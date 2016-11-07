import fetch from 'isomorphic-fetch'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import movieApp from './reducers/movies.js'
import Main from 'pages/index.jsx';
import {renderMovies} from './actions/actions.js'

let store = createStore(movieApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
<Provider store={store}>
    <Main />
</Provider>,
document.getElementById('mountElement')
)

fetch('https://api.themoviedb.org/3/genre/35/movies?api_key=70e1efdf656aeb78ac8a59469dd1968a').then(
    response => response.json()    
).then(
    data => {
        let movies = data.results.map(movie => {
            movie.poster_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path;
        })
        store.dispatch(renderMovies(data.results));
        
    }
)
