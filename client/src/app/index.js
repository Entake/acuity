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
import Navbar from 'pages/shared/Navbar'
import { requireAuth, logout } from '../util'

// Our pages
import Home from 'pages/Home'
import Login from 'pages/Login'
import Browse from 'pages/Browse'
import Upload from 'pages/Upload'
import Register from 'pages/Register'
import ViewImage from 'pages/ViewImage'
import UserProfile from 'pages/UserProfile'
import FourOhFour from 'pages/FourOhFour'

// Create enhanced history
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('router').toJS()
  }
})

export default class App extends PureComponent {
  // App component never needs to update
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Navbar}>
            <IndexRoute component={Home} />
            <Route path='browse' component={Browse} />
            <Route path='browse/:id' component={ViewImage} />
            <Route path='upload' component={Upload} onEnter={requireAuth} />
            <Route path='login' component={Login} />
            <Route path='logout' onEnter={logout} />
            <Route path='register' component={Register} />
            <Route path='user' component={UserProfile} />
            <Route path='404' component={FourOhFour} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
