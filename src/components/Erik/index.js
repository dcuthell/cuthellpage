import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';



class Erik extends Component {
  render() {
		return(
      <Container className="Erik">
				<Row>
					<Col>
						<Jumbotron>
							<h1 className="display-3">Charles Erik Cuthell</h1>
							<h1 className="display-4">Maker of Things</h1>
							<hr className="my-2" />
							<p>See Workshop</p>
							<p className="lead">
								<Button href={"https://www.woodmagazine.com/woodworking-how-to"} color="secondary">Workshop</Button>
							</p>
							<hr className="my-2" />
							<p>Contact erik@cuthell.com</p>
							<p className="lead">
								<Button href={"mailto:erik@cuthell.com"} color="secondary">Send Email</Button>
							</p>
							<hr className="my-2" />
							<p>Go to Facebook</p>
							<p className="lead">
								<Button href={"https://www.facebook.com/erik.cuthell"} color="secondary">Facebook</Button>
							</p>
						</Jumbotron>
					</Col>
				</Row>
      </Container>
		)
  }
}

export default Erik;
