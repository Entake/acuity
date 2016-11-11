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
import Navbar from 'shared/Navbar'

// Our pages
import Home from 'Home'
import Browse from 'Browse'
import Upload from 'Upload'
import Register from 'Register'
import Login from 'Login'
import UserProfile from 'UserProfile'
import EnlargedImage from 'EnlargedImage'

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
          <Route path='/' component={Navbar}>
            <IndexRoute component={Home} />
            <Route path='browse' component={Browse} />
            <Route path='upload' component={Upload} />
            <Route path='login' component={Login} />
            <Route path='register' component={Register} />
            <Route path='user' component={UserProfile} />
            <Route path='browseImage' component={EnlargedImage} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
