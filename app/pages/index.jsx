import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Header from '../components/header.jsx';

require('../styles/sass/main.scss');

class Main extends React.Component {
  render() {
    return <div>
            <Header/>           
            <Grid fluid={true}>
                <Row>
                    <Col sm={12}>
                        <h1>{this.props.text}</h1>
                    </Col>
                </Row>
            </Grid>
        </div>
            
    }
}

export default Main;