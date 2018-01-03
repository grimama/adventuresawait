import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="NavBar">

        <div className="NavBarLinks">
          <img className="navBarIcons" src="https://maxcdn.icons8.com/app/uploads/2016/09/sweet-home-icon.jpg"/>
          <button>
            <Link className="LinkName" to="/">HOME</Link>
          </button>
        </div>

        <div className="NavBarLinks">
          <img className="navBarIcons" src="https://images-na.ssl-images-amazon.com/images/I/31tzrqcnjIL._SL500_AC_SS350_.jpg" />
          <button>
            <Link className="LinkName" to="/scuba">SCUBA</Link>
          </button>
        </div>

        <div className="NavBarLinks">
          <img className="navBarIcons" src="https://cdn.bleacherreport.net/images/team_logos/328x328/cycling.png"/>
          <button>
            <Link className="LinkName" to="/cycling">CYCLING</Link>
          </button>
        </div>

      </div>
    )
  }
}
