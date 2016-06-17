import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, UPDATE_PROFILE, GET_PROFILE } from './types'

let API_URL = 'http://localhost:8081' // http://localhost:8081

// export function twitterAuth() {
//   return function(dispatch) {
//   let url = `${API_URL}/auth/twitter`
//   axios.get(url)
//     .then(data => {
//       console.log(data);
//       if(data.oauth_token) {
//         localStorage.setItem('twitter_token', data.oauth_token)
//       }
//       if(data.tokenUrl)
//         window.location.href = data.tokenUrl
//     })
//   }
// }

export function authUser({ token }) {
  return function(dispatch) { // thunk
    dispatch({ type: AUTH_USER, payload: { } })
    localStorage.setItem('twitter_token', token)
    browserHistory.push('/dashboard')
  }
}

// export function signupUser({ email, password }) { // Could DRY up with signinUser
//   return function(dispatch) {
//     axios.post(`${API_URL}/signup`, { email, password })
//       .then(res => {
//         dispatch({ type: AUTH_USER, payload: { email, profile: '' } })// flips state to logged in
//         localStorage.setItem('token', res.data.token)
//         browserHistory.push('/dashboard')
//       })
//       .catch(res => {
//         dispatch(authError(res.data.error))
//       })
//   }
// }

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.clear()
  return {
    type: UNAUTH_USER
  }
}

// export function updateProfile(formProps) {
//   return function(dispatch) {
//     axios.post(`${API_URL}/profile`, { formProps }, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//       .then(res => {
//         dispatch({
//           type: UPDATE_PROFILE,
//           payload: res.data
//         })
//       })
//   }
// }

// export function getProfile() {
//   return function(dispatch) {
//     axios.get(`${API_URL}/profile`, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//       .then(res => {
//         dispatch({
//           type: GET_PROFILE,
//           payload: res.data.profile
//         })
//       })
//   }
// }
