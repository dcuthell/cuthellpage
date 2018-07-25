import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';



class Samuel extends Component {
  render() {
		return(
      <Container className="Samuel">
				<Row>
					<Col>
						<Jumbotron>
							<h1 className="display-3">Samuel Kelly Cuthell</h1>
							<h1 className="display-4">Park Management</h1>
							<hr className="my-2" />
							<p>See Portfolio</p>
							<p className="lead">
								<Button href={"https://www.nps.gov/index.htm"} color="secondary">GitHub</Button>
							</p>
							<hr className="my-2" />
							<p>Contact samuel@cuthell.com</p>
							<p className="lead">
								<Button href={"mailto:samuel@cuthell.com"} color="secondary">Send Email</Button>
							</p>
							<hr className="my-2" />
							<p>Go to Facebook</p>
							<p className="lead">
								<Button href={"https://www.facebook.com/samuel.k.cuthell"} color="secondary">Facebook</Button>
							</p>
						</Jumbotron>
					</Col>
				</Row>
      </Container>
		)
  }
}

export default Samuel;
