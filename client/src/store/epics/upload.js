// Libraries
import {Observable} from 'rxjs/Observable'

// Our modules
import * as ActionTypes from '../actionTypes'

export const upload = action$ => action$
  .ofType(ActionTypes.DO_UPLOAD)
  .switchMap(({payload, token}) => Observable
  .fromPromise(
    fetch(`${document.location.origin}/api/upload`, {
      method: 'POST',
      body: payload,
      headers: {
        'x-access-token': token
      }
    }).then(res => res.json())
  )
    .map(res => ({
      type: ActionTypes.UPLOAD_SUCCESS,
      payload: res
    }))
    .catch(err => Observable.of({
      type: ActionTypes.UPLOAD_FAILED,
      payload: { error: err }
    }))
  )
