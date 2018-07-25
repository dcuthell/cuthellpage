import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './styles.css';

import Logo from '../../img/SamDavid6.png';


class Footer extends Component {
render() {
  return(
    <div className="Footer">
			<Row>
				<Col sm="3">
					<h1>Cuthell.com</h1>
				</Col>
			</Row>
    </div>
    );
  }
}

export default Footer;
