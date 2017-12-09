import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'

import Home from './Home';
import NavBar from './NavBar';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import AddNewCampus from './AddNewCampus';
// import store from '../store';

export default class Root extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/campuses/addcampus" component={AddNewCampus} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/students/:studentId" component={SingleStudent} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}


