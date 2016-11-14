import store from 'store'

export const requireAuth = (nextState, replace) => {
  if (!store.getState().getIn(['auth', 'token'])) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}
