// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { AppContainer as HMRContainer } from 'react-hot-loader'

import App from 'App'

const render = () => {
  ReactDOM.render(
    <HMRContainer>
      <Router history={browserHistory}>
        <Route path='/' component={App} />
      </Router>
    </HMRContainer>,
    document.getElementById('app')
  )
}

render()

// Hot Module Replacement - Needs to point to root component
if (module.hot) {
  module.hot.accept(Router, render)
}
