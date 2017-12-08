'use strict'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Root } from './components'
import axios from 'axios'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('main')
)

