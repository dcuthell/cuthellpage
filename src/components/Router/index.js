import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import Programs from '../Programs';
import About from '../About';
import Contact from '../Contact';
import Gallery from '../Gallery';
import Schedule from '../Schedule';
import Reviews from '../Reviews';
import NotFound from '../NotFound';
import './styles.css';

class Router extends Component {
  render() {
		window.scrollTo(0,0);
    return (
      <div className="Router">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/programs" component={Programs}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
					<Route path="/gallery" component={Gallery}/>
					<Route path="/schedule" component={Schedule}/>
					<Route path="/reviews" component={Reviews}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Router;
