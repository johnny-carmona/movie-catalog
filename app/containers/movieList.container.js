import { connect } from 'react-redux'
import MovieList from '../components/movieList/movieList.jsx';
import {showMovie} from '../actions/actions.js'


const mapStateToProps = state => ({   
    movies: state.movies  
})

const mapDispatchToProps = (dispatch) => {
  return {
    showMovie: (original_title, overview, poster_path) => {      
      dispatch(showMovie(original_title, overview, poster_path))
    }
  }
}

const MovieListCont = connect(mapStateToProps, mapDispatchToProps)(MovieList)

export default MovieListCont;
