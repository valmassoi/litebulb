import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, GET_PROFILE } from './types'

let API_URL = 'http://localhost:8081' // http://localhost:8081

export function twitterAuth() {
  return function(dispatch) { // thunk
    const token = localStorage.getItem('twitter_token')
    if (token)
      browserHistory.push('/dashboard')
    else
      window.location = 'http://192.168.1.108:8081/auth/twitter'
  }
}

export function getProfile() {
  return function(dispatch) { // thunk
    axios.get(`${API_URL}/profile`, {
      headers: { authorization: localStorage.getItem('twitter_token') }
    })
    .then(res => {
      console.log(res.data.user)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

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
