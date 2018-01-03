import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
//import { chooseStudent, chooseCampus } from '../reducers'


export class AllStudents extends Component{

  render(){

    return(
      <div className="Scuba">
        <h1>SCUBA</h1>
        <img className="scubaImage" src="/images/scuba.jpg" />
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const StudentsContainer = connect(mapStateToProps)(AllStudents);
export default StudentsContainer;
