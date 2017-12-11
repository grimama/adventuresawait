import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../reducers';


export class AddNewStudent extends Component{
  constructor(props){
    super(props)
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campusId: '',
    }
    this.handleChangefirstName = this.handleChangefirstName.bind(this);
    this.handleChangelastName = this.handleChangelastName.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangegpa = this.handleChangegpa.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangecampusId = this.handleChangecampusId.bind(this)
  }

  handleSubmit(event, state) {
    this.setState({firstName: '', lastName: '', email: '', gpa: ''})
    this.props.handleSubmit(event, state)
  }

  handleChangefirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  handleChangelastName(event) {
    this.setState({ lastName: event.target.value });
  }

  handleChangeemail(event){
    this.setState({ email: event.target.value })
  }

  handleChangegpa(event){
    this.setState({ gpa: event.target.value })
  }

  handleChangecampusId(event){
    this.setState({ campusId: event.target.value })
  }

  render(){
    console.log('state', this.state)
    console.log('prop', this.props)
    return(
      <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
        <div>
          <fieldset>
            <legend>New Student</legend>
            <div>
              <label>First Name</label>
              <div>
                <input
                  value={this.state.firstName}
                  type="text"
                  onChange={this.handleChangefirstName} />
              </div>
            </div>
            <div>
              <label>Last Name</label>
              <div className="col-xs-10">
                <input
                  value={this.state.lastName}
                  onChange={this.handleChangelastName}
                />
              </div>
            </div>
            <div>
              <label>email</label>
              <div>
                <input
                  value={this.state.email}
                  onChange={this.handleChangeemail} />
              </div>
            </div>
            <div>
              <label>gpa</label>
              <div>
                <input
                  value={this.state.gpa}
                  onChange={this.handleChangegpa} />
              </div>
            </div>

            <div>
              <label>Select Campus</label>
              <select value={this.state.campusId} onChange={this.handleChangecampusId} name="campus">
                <option>Choose Campus</option>
                {this.props.campuses.map(campus => {
                  return (
                    <option key={campus.id} value={campus.id}>{campus.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div>
              <div>
                <button
                  type="submit"
                  disabled={(this.state.firstName.length && this.state.lastName.length && this.state.email.length) ? false : true} >
                  Add Student
                  </button>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return{
    handleSubmit: function(event, state){
      event.preventDefault();
      dispatch(postStudent(state, ownProps.history))
    }
  }
}

const AddNewStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewStudent);
export default AddNewStudentContainer;
