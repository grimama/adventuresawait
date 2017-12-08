import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux'
//import { withRouter, NavLink } from 'react-router-dom';


export default class StatefulCampuses extends Component {

  constructor(){
    super()
    this.state = {
      campuses: []
    }

  }

  componentDidMount(){
    axios.get(`/api/campuses/`)
    .then(res => res.data)
    .then(campuses => {
      this.setState({ campuses })
    });
  }

  render(){

    return (
      <div>
        <h1>CAMPUSES</h1>
        <div>
          {
            this.state.campuses.map(campus => (
              <div key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <h5>{campus.name}</h5>
                  <img src={campus.imageUrl} />
                </Link>
                <p>{campus.description}</p>
              </div>
            )
            )
          }
        </div>
      </div>
    );
  }
}


