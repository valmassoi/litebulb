import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, GET_PROFILE, GET_BULBS } from './types'

let API_URL = '' // http://localhost:8081

const _this = this

const twitterAuth = function() { // unused?
  return function(dispatch) {
    const token = localStorage.getItem('twitter_token')
    if (token) {
      browserHistory.push('/dashboard')
      getProfile(token)
    }
    else
      window.location = '/auth/twitter'
  }
}

const getProfile = function(token=null) {
  return function(dispatch) {
    axios.get(`${API_URL}/profile`, {
      headers: { authorization: localStorage.getItem('twitter_token') }
    })
    .then(res => {
      dispatch({
         type: GET_PROFILE,
         payload: res.data.user
      })
      dispatch({
         type: GET_BULBS,
         payload: res.data.user.bulbs
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const authUser = function(token) {
  return function(dispatch) {
     localStorage.setItem('twitter_token', token)
     dispatch({ type: AUTH_USER })
     browserHistory.push('/dashboard')
     getProfile(token)
  }
}

const authError = function(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

const signoutUser = function() {
  localStorage.clear()
  return {
    type: UNAUTH_USER
  }
}

module.exports = {
  twitterAuth,
  authUser,
  getProfile,
  authError,
  signoutUser
}
