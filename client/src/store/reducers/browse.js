// Libraries
import { Map } from 'immutable'

// Our modules
import * as ActionTypes from 'store/actionTypes'

// Set initial state
const initialState = Map({})

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INFO_SUCCESS:
      console.log(action)
      return state.set('imageFromID', action.payload)

    case ActionTypes.GET_INFO_FAILED:
      return state.set('error', action.payload.error)

    default:
      return state
  }
}
