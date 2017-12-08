import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AllCampuses from './AllCampuses';
import axios from 'axios'

// import store from '../store';
import SingleCampus from './SingleCampus';
// import Students from './Students';
// import SingleStudent from './SingleStudent';

export default class Root extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Redirect to='/home' />
          </Switch>
        </main>
      </div>
    );
  }
}


{/*
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/:studentId" component={SingleStudent} /> */}

