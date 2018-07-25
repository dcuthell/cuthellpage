import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';


import CarouselFrame from '../CarouselFrame';



class David extends Component {
  render() {
		return(
      <Container className="David">
				<Row>
					<Col>
						<Jumbotron>
							<h1 className="display-3">David Cameron Cuthell III</h1>
							<h1 className="display-4">Web and Mobile Developer</h1>
							<hr className="my-2" />
							<p>See GitHub Portfolio</p>
							<p className="lead">
								<Button href={"https://github.com/dcuthell"} color="secondary">GitHub</Button>
							</p>
							<hr className="my-2" />
							<p>Contact david@cuthell.com</p>
							<p className="lead">
								<Button href={"mailto:david@cuthell.com"} color="secondary">Send Email</Button>
							</p>
							<hr className="my-2" />
							<p>Go to Facebook</p>
							<p className="lead">
								<Button href={"https://www.facebook.com/dcuthell"} color="secondary">Facebook</Button>
							</p>
						</Jumbotron>
					</Col>
				</Row>
      </Container>
		)
  }
}

export default David;
