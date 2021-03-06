import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, GET_PROFILE } from '../actions/types'

export default function (state = { user: {} }, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true }
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: '', user: {} }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    case GET_PROFILE:
      return { ...state, user: action.payload }
  }
  return state
}
