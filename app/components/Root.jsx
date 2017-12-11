import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Home from './Home';
import NavBar from './NavBar';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import AddNewCampus from './AddNewCampus';
import AddNewStudent from './AddNewStudent'
import store from '../store';
import { fetchCampuses, fetchStudents } from '../reducers';

export default class Root extends Component {

  componentDidMount(){
    store.dispatch(fetchCampuses())
    store.dispatch(fetchStudents())
  }

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
            <Route exact path="/students/addstudent" component={AddNewStudent} />
            <Route path="/students/:studentId" component={SingleStudent} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}


