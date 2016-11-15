// Libraries
import {Observable} from 'rxjs/Observable'

// Our modules
import * as ActionTypes from '../actionTypes'

export const register = action$ => action$
  .ofType(ActionTypes.DO_REGISTER)
  .switchMap(({payload}) => Observable
    .ajax.post(`${document.location.origin}/api/register`, payload)
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.REGISTER_SUCCESS,
      payload: response
    }))
    .catch(err => Observable.of({
      type: ActionTypes.REGISTER_FAILED,
      payload: { error: err }
    }))
  )

export const login = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
    .ajax.post(`${document.location.origin}/api/login`, payload)
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: response
    }))
    .catch(err => Observable.of({
      type: ActionTypes.LOGIN_FAILED,
      payload: {
        error: err
      }
    }))
  )
