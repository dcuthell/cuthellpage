import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';


import CarouselFrame from '../CarouselFrame';



class Home extends Component {
  render() {
		return(
      <Container className="Home">
				<Row>
					<Col>
						<CarouselFrame/>
					</Col>
				</Row>
      </Container>
		)
  }
}

export default Home;
