import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { reviseStudent, deleteStudent } from '../reducers';
import { connect } from 'react-redux'


export class SingleStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      beingEdited: false,
      currentStudent: {},
      id: '',
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      campus: { name: '', id: '' },
      campusId: ''
    }

    this.toggleEdit = this.toggleEdit.bind(this)
    this.updatefirstName = this.updatefirstName.bind(this)
    this.updatelastName = this.updatelastName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateCampus = this.updateCampus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.findCampus = this.findCampus.bind(this)
  }

  componentDidMount() {
    const studentId = this.props.getStudentId()

    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        this.setState({ currentStudent: student, firstName: student.firstName, lastName: student.lastName, fullName: student.fullName, id: student.id, email: student.email, campus: student.campus, campusId: student.campus.id })
      })
      .catch(() => {
        throw new Error("problem getting student")
      })
  }

  toggleEdit(event) {
    this.setState({ beingEdited: true })
  }

  handleSubmit(event) {
    this.props.updateOnSubmit(event, this.state);
    this.setState({ beingEdited: false })
  }

  updatefirstName(event) {
    this.setState({ firstName: event.target.value })
  }

  updatelastName(event) {
    this.setState({ lastName: event.target.value })
  }

  updateEmail(event) {
    this.setState({ email: event.target.value })
  }

  updateCampus(event) {
    const campus = this.props.campuses.filter(campus => +campus.id === +event.target.value)
    this.setState({ campus: campus[0], campusId: campus[0].id })
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

  render() {
    return (
      <div>
        <h3>
          {this.state.beingEdited ?
            <div>
              <input
                value={this.state.firstName}
                onChange={this.updatefirstName}>
              </input>
              <input
                value={this.state.lastName}
                onChange={this.updatelastName}>
                </input>
            </div> :
            this.state.fullName}
        </h3>
        <div>
          <h4>Email: <small>
            {this.state.beingEdited ?
              <input
                value={this.state.email}
                onChange={this.updateEmail}>
              </input> :
              this.state.email}
          </small>
          </h4>
        </div>
        <div>
          <h4>Campus:
        <small>
              {this.state.beingEdited ?
                <form>
                  <select
                    name="campus"
                    value={this.state.campusId}
                    onChange={this.updateCampus}>
                    {this.props.campuses.map(campus => {
                      return (
                        <option key={campus.id} value={campus.id}>{campus.name}
                        </option>
                      )
                    })}
                  </select>
                </form>
                :

                <Link to={`/campuses/${this.state.campusId}`}>  {this.state.campus.name}
                </Link>}
            </small>
          </h4>
        </div>
        <div>

          {this.state.beingEdited ?
            <div>
              <button
                type="submit"
                onClick={this.handleSubmit}>Submit
              </button>
              <button
                type="delete"
                onClick={(event) => this.props.handleDelete(event, this.state.id)}>Delete
              </button>
            </div> :
            <div>
              <button
                type="edit"
                onClick={this.toggleEdit}>Edit
              </button>
            </div>
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    updateOnSubmit: function (event, state) {
      dispatch(reviseStudent(state));
    },
    handleDelete: function (event, studentId) {
      dispatch(deleteStudent(studentId, ownProps.history));
    },
    getStudentId: function () {
      return ownProps.match.params.studentId;
    }
  }
}


const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default SingleStudentContainer;
