// Libraries
import {Observable} from 'rxjs/Observable'

// Our modules
import * as ActionTypes from '../actionTypes'

export const getImageInfo = action$ => action$
  .ofType(ActionTypes.GET_INFO)
  .switchMap(({id}) => Observable
    .ajax.post(`${document.location.origin}/api/imageInfo`, { id: id })
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.GET_INFO_SUCCESS,
      payload: response
    }))
    .catch(err => Observable.of({
      type: ActionTypes.GET_INFO_FAILED,
      payload: { error: err }
    }))
  )

export const browse = action$ => action$
  .ofType(ActionTypes.DO_BROWSE)
  .switchMap(({page}) => Observable
    .ajax.post(`${document.location.origin}/api/browse`, { page: page })
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.BROWSE_SUCCESS,
      payload: response
    }))
    .catch(err => Observable.of({
      type: ActionTypes.BROWSE_FAILED,
      payload: { error: err }
    }))
  )
