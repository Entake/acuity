// Libraries
import { Map } from 'immutable'

// Our modules
import * as ActionTypes from 'store/actionTypes'

// Set initial state
const initialState = Map({})

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPLOAD_SUCCESS:
      console.log('action', action.payload)
      return state
        .set('success', true)
        .set('image', action.payload)

    case ActionTypes.UPLOAD_FAILED:
      return state.set('error', action.payload.error)

    default:
      return state
  }
}
