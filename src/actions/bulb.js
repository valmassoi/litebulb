import axios from 'axios'
import { browserHistory } from 'react-router'
import { ADD_BULB, DELETE_BULB, LIKE_BULB } from './types'

let API_URL = 'http://localhost:8081'

export function addBulb(bulb) {
  console.log("addBulb", bulb);
  return function(dispatch) {
    axios.post(`${API_URL}/bulbs/bulb`, { bulb }, {
      headers: { authorization: localStorage.getItem('twitter_token') }
    })
      .then(res => {
        dispatch({ type: ADD_BULB, payload: bulb })
        // browserHistory.push('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export function deleteBulb(bulb) {
  console.log("delete bulb:", bulb);
  return function(dispatch) {
    axios.post(`${API_URL}/bulb`, { bulb }, {
      headers: { authorization: localStorage.getItem('twitter_token') }
    })
      .then(res => {
        dispatch({ type: DELETE_BULB, payload: bulb._id }) //ID is better?
        browserHistory.push('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export function likeBulb(bulb) {
  console.log("like bulb:", bulb);
  return function(dispatch) {
    axios.post(`${API_URL}/bulb`, { bulb }, {
      headers: { authorization: localStorage.getItem('twitter_token') }
    })
      .then(res => {
        dispatch({ type: LIKE_BULB, payload: bulb._id }) //ID is better?
        browserHistory.push('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
