import React, { Component } from 'react';
import axios from 'axios'
import { deleteCampus, updateCurrentCampus } from '../reducers';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export class SingleCampus extends Component {

    constructor(props){
      super(props);
      this.state = {
        beingEdited: false,
        currentCampus: {},
        id: '',
        name: '',
        imageUrl: 'Enter Image Name',
        description: '',
        studentsOnCampus: []
      }
      this.toggleEdit = this.toggleEdit.bind(this)
      this.updateName = this.updateName.bind(this)
      this.updateImageUrl = this.updateImage.bind(this)
      this.updateDescription = this.updateDescription.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getStudentsOnCampus = this.getStudentsOnCampus.bind(this)
    }

    componentDidMount() {
      const campusId = this.props.getCampusId()

      axios.get(`/api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => {
          this.setState({ currentCampus: campus, name: campus.name, id: campus.id, imageUrl: campus.imageUrl, description: campus.description })
        })
        // .catch(() => {
        //   throw new Error("Couldn't getting campus")
        // })


      axios.get(`/api/campuses/${campusId}/students`)
        .then(res => res.data)
        .then(students => {
          this.setState({ studentsOnCampus: students })
        })
        // .catch(() => {
        //   throw new Error("problem getting students")
        // })

    }



    toggleEdit(event) {
      this.setState({ beingEdited: true })
    }

    handleSubmit(event) {
      this.props.updateOnSubmit(event, this.state);
      this.setState({ beingEdited: false })
    }

    updateName(event) {
      this.setState({ name: event.target.value })
    }

    updateImage(event) {
      this.setState({ imageUrl: event.target.value })
    }

    updateDescription(event) {
      this.setState({ description: event.target.value })
    }

    getStudentsOnCampus(students) {
      
      return (
        <div>
          <table>
            <thead>
              <tr >
                <th>
                  <h3>Roll call List</h3>
                </th>
                <th>
                  <h3>Name</h3>
                </th>
                <th>
                  <h3>Email</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => {
                return (
                  <tr key={student.id}>
                    <td>
                      <h4>{1 + idx}</h4>
                    </td>
                    <td>
                      <Link to={`/students/${student.id}`} >
                        <h4>{student.fullName}</h4>
                      </Link>
                    </td>
                    <td>
                      <h4>{student.email}</h4>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }



    render() {

          return (
            <div>
              <h2>
                {this.state.beingEdited ?
                  <input
                    value={this.state.name}
                    type="text"
                    onChange={this.updateName}>
                  </input> :
                  this.state.name}
              </h2>
              <div>
                {this.state.beingEdited ?
                  <input
                    value={this.state.description}
                    type="text"
                    onChange={this.updateDescription}>
                  </input> :
                  this.state.description}
              </div>
              <div>
                {this.state.beingEdited ?
                  <input
                    value={this.state.imageUrl}
                    type="text"
                    onChange={this.updateImage}>
                  </input> :
                  <img src={this.state.imageUrl} />}
              </div>
              <div>
                <h3> Current Students: </h3>
                <div> {this.getStudentsOnCampus(this.state.studentsOnCampus)} </div>
              </div>

              {this.state.beingEdited ?
                <div>
                  <button
                  type="submit"
                  onClick={this.handleSubmit}>Submit</button>
                  <button
                    type="delete"
                    onClick={(event) => this.props.handleDelete(event, this.state.id)}>Delete Campus</button>
                </div> :
                <div><button
                  type="edit"
                  onClick={this.toggleEdit}>Edit</button>
                </div>
              }
            </div>
          );
        }
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {

  return {
    updateOnSubmit: function (event, state) {
      dispatch(updateCurrentCampus(state));
    },
    handleDelete: function (event, campusId) {
      dispatch(deleteCampus(campusId, ownProps.history));
    },
    getCampusId: function () {
      return ownProps.match.params.campusId;
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default SingleCampusContainer;
