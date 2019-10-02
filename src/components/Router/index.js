import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import David from '../David';
import Erik from '../Erik';
import Samuel from '../Samuel';
import Tester from '../Tester';
import NotFound from '../NotFound';
import './styles.css';

class Router extends Component {
  render() {
		window.scrollTo(0,0);
    return (
      <div className="Router">
        <Switch>
          <Route exact path="/" component={Home}/>
					<Route path="/david" component={David}/>
					<Route path="/samuel" component={Samuel}/>
					<Route path="/erik" component={Erik}/>
          <Route exact path="/tester" component={Tester}/>
          <Route path="/tester/:id" component={Tester}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Router;
