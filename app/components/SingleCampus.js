import React, { Component } from 'react';
import axios from 'axios'

export default class SingleCampus extends Component {

    constructor(){
      super();
      this.state = {
        campus: {}
      }
    }

    fetchCampus (campusId){
      axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({ campus }))
    }

    componentDidMount(){
      
      const campusId = this.props.match.params.campusId;
      this.fetchCampus(campusId)
    }

    componentWillReceiveProps (nextProps) {
      const nextCampusId = nextProps.match.params.campusId;
      const currentAlbumId = this.props.match.params.campusId;
      if (nextCampusId !== currentCampusId)
        this.fetchAlbum(nextCampusId);
    }

  render(){
    const campus = this.state.campus


    return(
      <div>
        <h1>{ campus.name }</h1>
        <img src={ campus.imageUrl } />
        <p>{campus.description}</p>

      </div>
    )
  }
}
