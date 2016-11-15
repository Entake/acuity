// Our modules
import * as ActionTypes from './actionTypes'

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload
})

export const redirectedToLoginAction = () => ({
  type: ActionTypes.REDIRECTED_TO_LOGIN
})

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload
})

export const uploadAction = (payload, token) => ({
  type: ActionTypes.DO_UPLOAD,
  token: token,
  payload
})

export const browseAction = (page) => ({
  type: ActionTypes.DO_BROWSE,
  page: page
})

export const imageInfoAction = id => ({
  type: ActionTypes.GET_INFO,
  id: id
})
