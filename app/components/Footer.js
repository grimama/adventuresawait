import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">

        <div className="badges">
          <a href='https://www.instagram.com/wonderingaimlessly/?hl=en'>  <img className="badgeLink" src='/images/instagramBadge.jpg' alt='Instagram' /></a>
        </div>

        <div className="badges">
          <a href='https://www.strava.com/athletes/16187143'>  <img className="badgeLink" src='/images/StravaBadge.jpg' alt='Instagram' /></a>
        </div>
      </div>
    )
  }
}
