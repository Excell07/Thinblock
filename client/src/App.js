import React, { Component } from 'react';
import Nav from './components/navigation/Nav';
import Home from './components/pages/Home';
import Connection from './components/containers/Connection';
import Footer from './components/navigation/Footer';
import PageNotFound from './components/containers/PageNotFound';

import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route render={({ location }) => (
            <div>
              <Nav />  
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/solution' component={Home} />
                <Route exact path='/roadmap' component={Home} />
                <Route component={PageNotFound} />
              </Switch>
              <div className="wrapper">
                <Connection />
                <Footer />
              </div>
            </div>  
          )} />
        </Router>
      </div>
    );
  }
}

export default App;
