import React, { Component } from 'react';
import axios from 'axios'

export default class SingleStudent extends Component {
  constructor(){
    super();
    this.state = {
      student: {}
    }
  }

  fetchStudent (studentId){
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => this.setState({ student }))
  }

  componentDidMount(){

    const studentId = this.props.match.params.studentId;
    this.fetchStudent(studentId)
  }

  componentWillReceiveProps (nextProps) {
    const nextStudentId = nextProps.match.params.studentId;
    const currentStudentId = this.props.match.params.studentId;
    if (nextStudentId !== currentStudentId)
      this.fetchStudent(nextStudentId);
  }

render(){
  const student = this.state.student
  return(
    <div>
      <h1>{ student.fullName }</h1>
      <p>{ student.email }</p>
    </div>
  )
}
}
