import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import Cycling from './Cycling';
import Scuba from './Scuba';

export default class Root extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cycling" component={ Cycling } />
            <Route exact path="/scuba" component={ Scuba } />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}


