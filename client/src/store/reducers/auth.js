// Libraries
import { Map } from 'immutable'

// Our modules
import * as ActionTypes from 'store/actionTypes'

// Set initial state
const initialState = Map({
  token: localStorage.getItem('user.token'),
  user: JSON.parse(localStorage.getItem('user.data'))
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return state.set('redirectToLogin', true)

    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user.token', action.payload.token)
      localStorage.setItem('user.data', JSON.stringify(action.payload.user))
      return state
        .set('token', action.payload.token)
        .set('user', action.payload.user)

    case ActionTypes.REGISTER_FAILED:
    case ActionTypes.LOGIN_FAILED:
      return state.set('error', action.payload.error)

    case ActionTypes.REDIRECTED_TO_LOGIN:
      return state.set('redirectToLogin', false)

    default:
      return state
  }
}
