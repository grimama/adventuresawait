import React, {Component} from 'react';
import axios from 'axios';

export default class Students extends Component{
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
      this.setState({students: students})
    })
  }

  render(){
    return(
      <div>
        <h1>Students</h1>
        <div>
          {
            this.state.students.map(student => {
              return(
                <div key={student.id}>
                  <a href={`#/students/${student.id}`}>{student.fullName}</a>
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

