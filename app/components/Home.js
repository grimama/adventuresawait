import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>Home</h1>
    <Link to={'/students'}>
      <div>
        <button>Manage Students</button>
			</div>
    </Link>
  </div>
    )

