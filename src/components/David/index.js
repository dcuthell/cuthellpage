import React, { Component } from 'react';
import './styles.css';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import davidProfile from '../../img/davidprofile.jpg';



class David extends Component {
  render() {
		return(
      <Container className="David">
				<Row>
					<Col lg="6">
						<img src={davidProfile} alt="david profile"></img>
					</Col>
					<Col>
						<Jumbotron>
							<h1 className="display-3">David Cameron Cuthell III</h1>
							<h1 className="display-4">Web and Mobile Developer</h1>
							<hr className="my-2" />
							<p>Go to GitHub Portfolio</p>
							<p className="lead">
								<Button href={"https://github.com/dcuthell"} color="secondary">See Portfolio</Button>
							</p>
							<hr className="my-2" />
							<p>Contact david@cuthell.com</p>
							<p className="lead">
								<Button href={"mailto:david@cuthell.com"} color="secondary">Send Email</Button>
							</p>
							<hr className="my-2" />
							<p>Go to LinkedIn</p>
							<p className="lead">
								<Button href={"https://www.linkedin.com/in/davidcuthell/"} color="secondary">See Profile</Button>
							</p>
						</Jumbotron>
					</Col>
				</Row>
      </Container>
		)
  }
}

export default David;
