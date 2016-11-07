const initialState = {
    showMovie: false,
    movieTitle: '',
    movieDescription: '',
    movieImage: '',
    movies: []
}
function movieApp(state = initialState, action) {
  
  switch(action.type) {
      case 'SHOW_MOVIE':
        return Object.assign({}, state, {
            movieTitle: action.original_title,
            movieDescription: action.overview,
            movieImage: action.poster_path,
            showMovie: true
        })
      case 'HIDE_MOVIE':
        return Object.assign({}, state, {
            showMovie: false
        })
      case 'RENDER_LIST':
        return Object.assign({}, state, {
            movies: action.list
        })
      default:
        return state
  }
  
}
export default movieApp