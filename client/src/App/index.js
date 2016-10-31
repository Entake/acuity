// Import libraries
import 'rxjs'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Add CSS framework
import 'foundation-sites/dist/foundation.min.css'

// Our modules
import store from 'store'
import Container from 'shared/Container'

// Our pages
import Home from 'Home'

// Create enhanced history
const history = syncHistoryWithStore(browserHistory, store)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
