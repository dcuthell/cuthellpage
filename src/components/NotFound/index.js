import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class NotFound extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="lineStyle1 title">404</div>
        <div className="lineStyle2">404 Page here</div>
        <center><Link to="/">Return to Home Page</Link></center>
      </div>
    );
  }
}

export default NotFound;
