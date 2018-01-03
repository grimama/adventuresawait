import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="Home">
    <div>
      <h1>WELCOME</h1>
    </div>

    <div>
      <img className="homeImage" src="/images/AmandaGrimaldi-82.jpg" />
    </div>

    <div>
      <a className="instagramLink" href='https://www.instagram.com/wonderingaimlessly/?hl=en'> Follow me on <img className="instagramImage" src='/images/instagramBadge.jpg' alt='Instagram' /></a>
    </div>
  </div>
)

