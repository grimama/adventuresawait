import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class AllStudents extends Component{

  constructor(){
    super()
    this.state={
      students: []
    }
  }

  componentDidMount(){
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      this.setState({ students })
    })
  }

  render(){
    const students = this.state.students;
    
    return(
      <div>
        <h1>STUDENTS</h1>
        <div>
          {
            students.map(student => {
              return(
                <div key={student.id}>
                  <Link to={`/students/${student.id}`}>{student.fullName}
                  </Link>
                  <p>{student.email}</p>
                  <p>{student.gpa}</p>
                  <p>{student.campusId}</p>
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

