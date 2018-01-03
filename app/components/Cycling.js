import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Cycling extends Component {

  render() {
    return (
      <div className="Cycling">
        <div>
          <h1>CYCLING</h1>
        </div>

        <div className="Strava">
          <a className="stravaLink" href='http://strava.com/athletes/16187143/badge'> Follow me on <img className="stravaLinkImage" src='http://badges.strava.com/logo-strava.png' alt='Strava' /></a>
        </div>

        <div className="AllCyclingImages">
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling1.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling2.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling3.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling4.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling5.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling6.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling11.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling8.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling9.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling10.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling7.JPG" />
          </div>
          <div>
            <img className="cyclingImages" src="/images/cycling/cycling12.JPG" />
          </div>


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

const CampusesContainer = connect(mapStateToProps)(Cycling);
export default CampusesContainer;

