// Import libraries
import 'rxjs'
import { Provider } from 'react-redux'
import React, { PureComponent } from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Add CSS framework
import 'foundation-sites/dist/foundation.min.css'

// Our modules
import store from 'store'
import Container from 'shared/Container'

// Our pages
import Home from 'Home'
import Browse from 'SOMEWHERE'
import Upload from 'SOMEWHERE'
import Register from 'SOMEWHERE'
import Login from 'SOMEWHERE'
import User from 'SOMEWHERE'

// Create enhanced history
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS()
  }
})

export default class App extends PureComponent {
  // App component never needs to update
  shouldComponentUpdate (nextProps, nextState) {
    return false
  }

  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='browse/:id' component={Browse} />
            <Route path='upload' component={Upload} />
            <Route path='login' component={Login} />
            <Route path='register' component={Register} />
            <Route path='user/:id' component={User} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
