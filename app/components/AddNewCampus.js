import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../reducers';


export class AddNewCampus extends Component{
  constructor(props){
    super(props)
    this.state={
      name: '',
      imageUrl: '',
      description: ''
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, state) {
    this.setState({name: '', imageUrl: '', description: ''});
    this.props.handleSubmit(event, state);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ imageUrl: event.target.value });
  }

  handleChangeDescription(event){
    this.setState({ description: event.target.value })
  }


  render(){
    console.log('state', this.state)
    return(
      <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
        <div>
          <fieldset>
            <legend>New Campus</legend>
            <div>
              <label>Name</label>
              <div>
                <input
                  value={this.state.name}
                  type="text"
                  onChange={this.handleChangeName} />
              </div>
            </div>
            <div>
              <label>Description</label>
              <div>
                <input
                  value={this.state.description}
                  type="text"
                  onChange={this.handleChangeDescription} />
              </div>
            </div>
            <div>
              <label>Image File Name</label>
              <div>
                <input
                  value={this.state.imageUrl}
                  type="text"
                  onChange={this.handleChangeImage} />
              </div>
            </div>
            <div>
              <div>
                <button
                  type="submit"
                  disabled={this.state.name.length ? false : true} >
                  Add Campus
                  </button>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return{
    handleSubmit: function(event, state){
      event.preventDefault();
      dispatch(postCampus(state, ownProps.history))
    }
  }
}

const AddNewCampusContainer = connect(null, mapDispatchToProps)(AddNewCampus);
export default AddNewCampusContainer;
