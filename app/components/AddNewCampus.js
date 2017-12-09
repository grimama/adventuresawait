import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { postCampus } from '../reducers';


export default class AddNewCampus extends Component{
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

    axios.post('/api/campuses', state)
    .then(res => {console.log('added successfully')})
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
    return(
      <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
        <div className="form-group">
          <fieldset>
            <legend>New Campus</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  value={this.state.name}
                  className="form-control"
                  type="text"
                  onChange={this.handleChangeName}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Description</label>
              <div className="col-xs-10">
                <input
                  value={this.state.image}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Image File Name</label>
              <div className="col-xs-10">
                <input
                  value={this.state.image}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={this.state.name.length ? false : true}
                >
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
