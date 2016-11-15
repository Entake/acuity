import store from 'store'

export const logout = (nextState, replace) => {
  if (store.getState().getIn(['auth', 'token'])) {
    localStorage.removeItem('user.token')
    localStorage.removeItem('user.data')
    // Load / url from server, to get clean slate
    window.location.replace(window.location.origin)
  } else {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}
