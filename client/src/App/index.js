// Import libraries
import 'rxjs'
import React from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Add CSS framework
import 'foundation-sites/dist/foundation.min.css'

// Our modules
import store from 'store'
import Container from 'shared/Container'
import PureComponent from 'shared/PureComponent'

// Our pages
import Home from 'Home'

// Create enhanced history
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS()
  }
})

export default class App extends PureComponent {
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
