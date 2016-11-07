import React from 'react';
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MovieListCont from '../containers/movieList.container.js';
import Header from '../components/header.jsx';
import Modal from '../components/modal/modal.jsx';
import {hideMovie} from '../actions/actions.js'

require('../styles/sass/main.scss');


const Main = ({showMovie, hideMovie, movieTitle, movieDescription, movieImage}) => {
    
    return (
        <div>            
            <Grid fluid={true}>
                <Row>
                    <Col sm={12}>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h1>Movie Catalog</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <MovieListCont />
                    </Col>
                </Row>
               
            </Grid>
            <Modal title={movieTitle} onClick={() => hideMovie()}>                
                <div className="movie-info">
                    <img src={movieImage} />
                    <p>
                        {movieDescription}
                    </p>
                    
                </div>
            </Modal>
        </div>
    )
} 

const mapStateToProps = state => {    
    return {   
        showMovie: state.showMovie, 
        movieTitle: state.movieTitle,
        movieDescription: state.movieDescription,
        movieImage: state.movieImage
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    hideMovie: () => {      
      dispatch(hideMovie())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)