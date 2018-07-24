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
        <Row>
          <Col>
            <Jumbotron id="jumbo1">
              <h1 className="display-3">Classical Ballet Classes</h1>
              <hr className="my-2" />
              <p>This can be a link for the about section</p>
              <p className="lead">
                <Button href={"#/About"} color="secondary">Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron id="jumbo2">
              <p className="lead">Different Classes and Levels of Instuction</p>
              <hr className="my-2" />
              <p>This can be a link for the Programs Section</p>
              <p className="lead">
                <Button href={"#/Programs"} color="primary">See Classes</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron id="jumbo3">
              <h1 className="display-5">Support the School</h1>
							<hr className="my-2" />
              <p>Here's a link to paypal. A donation page can also be added, as well as a menu item</p>
              <p className="lead">
                <Button href={"https://www.paypal.com"} color="success">Donate</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
		)
  }
}

export default Home;
