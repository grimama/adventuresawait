import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
//import { chooseStudent, chooseCampus } from '../reducers'


export class AllStudents extends Component{

  constructor(props){
    super(props)
    this.findCampus = this.findCampus.bind(this)
  }

  findCampus(studentCampuseId){
    const campuses = this.props.campuses
    var foundCampus = {}
    campuses.filter(campus => {
        if(campus.id === studentCampuseId){
          foundCampus = campus
        }
      })
    return foundCampus.name
  }

  render(){
    console.log('props', this.props.campuses)
    const students = this.props.students;
    return(
      <div>
        <h1>STUDENTS</h1>
        <div>
            <button>
              <Link to="/students/addstudent">Add Student</Link>
              </button>
        </div>
        <div>
          {
            students.map(student => {
              return(
                <div key={student.id}>
                  <Link to={`/students/${student.id}`}>{student.fullName}
                  </Link>
                  <p>email: {student.email}</p>
                  <p>GPA: {student.gpa}</p>
                  <p>School: {this.findCampus(student.campusId)}</p>
                  <p>----------------------</p>
                </div>
              )
            })
          }
          </div>
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
