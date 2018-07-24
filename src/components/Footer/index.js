import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './styles.css';

import Logo from '../../img/logo.png';


class Footer extends Component {
render() {
  return(
    <div className="Footer">
			<Row>
				<Col sm="3">
					<img id="footerLogo" src={Logo} alt="footer logo" />
				</Col>
				<Col sm="6" className="addressBox">
					<p><strong>Nashville Classical Ballet Academy</strong></p>
					<p>123 Main St.</p>
					<p>Nashville TN 12345</p>
					<p>503-867-5309</p>
				</Col>
				<Col sm="3">
					<a href="http://www.facebook.com"><i className="mediaIcon fab fa-facebook"></i></a>
					<a href="http://www.instagram.com"><i className="mediaIcon fab fa-instagram"></i></a>
					<a href="http://www.twitter.com"><i className="mediaIcon fab fa-twitter"></i></a>
					<a href="http://www.youtube.com"><i className="mediaIcon fab fa-youtube"></i></a>
				</Col>
			</Row>
    </div>
    );
  }
}

export default Footer;
