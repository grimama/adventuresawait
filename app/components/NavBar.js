import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
render(){
  return(
      <div>
        <button>
          <Link to="/Home">HOME</Link>
        </button>
        <button>
          <Link to="/campuses">CAMPUSES</Link>
        </button>
        <button>
          <Link to="/students">STUDENTS</Link>
        </button>
      </div>
    )
  }
  }
