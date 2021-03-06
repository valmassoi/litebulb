import axios from 'axios'
import { browserHistory } from 'react-router'
import { ADD_BULB, DELETE_BULB, LIKE_BULB, GET_ALL } from './types'
import _ from 'lodash'

let API_URL = ''

export function addBulb(bulb) {
  return function(dispatch) {
    axios.post(`${API_URL}/bulbs/bulb`, { bulb }, {
      headers: { authorization: localStorage.getItem('twitter_token') },
    })
      .then(() => {
        dispatch({ type: ADD_BULB, payload: bulb })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function deleteBulb(bulb) {

  return function(dispatch) {
    axios.delete(`${API_URL}/bulbs/bulb/${bulb.id}`, {
      headers: { authorization: localStorage.getItem('twitter_token') },
    })
      .then(res => {
        dispatch({ type: DELETE_BULB, payload: bulb.id })

      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export function likeBulb(bulb) {
  return function(dispatch) {
    axios.post(`${API_URL}/bulb`, { bulb }, {
      headers: { authorization: localStorage.getItem('twitter_token') },
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

export function getAll() {

  return function(dispatch) {
    axios.get(`${API_URL}/bulbs/all`)
      .then(res => {
        let bulbs = res.data.all
        bulbs = _.flatten(bulbs)
        dispatch({ type: GET_ALL, payload: bulbs })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
