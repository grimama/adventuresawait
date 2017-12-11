import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class AllCampuses extends Component {

  constructor(props){
    super(props)
  }


  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h1>CAMPUSES</h1>
        <div>
          <button>
            <Link to="/campuses/addcampus">Add Campus</Link>
          </button>
        </div>
        <div>
          {
            campuses.map(campus => (
              <div key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <h5>{campus.name}</h5>
                  <img src={campus.imageUrl} />
                </Link>
                <p>Description: {campus.description}</p>
              </div>
            )
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return {
    campuses: state.campuses,

  }
}

const CampusesContainer = connect(mapStateToProps)(AllCampuses);
export default CampusesContainer;

