export const showMovie = (original_title, overview, poster_path) => {
    return {
        type: 'SHOW_MOVIE',
        original_title,
        overview,
        poster_path
    }
}
export const hideMovie = () => {
    return {
        type: 'HIDE_MOVIE'
    }
}
export const renderMovies = (movies) => {
    return {
        type: 'RENDER_LIST',
        list: movies
    }
}
