// Our modules
import store from 'store'

export const isLoggedIn = () => {
  if (store.getState().getIn(['auth', 'token'])) {
    return true
  }
}
