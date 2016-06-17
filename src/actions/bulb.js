import axios from 'axios'
import { browserHistory } from 'react-router'
import { ADD_BULB } from './types'

let API_URL = 'http://localhost:8081'

export function addBulb({ bulb }) {
  return function(dispatch) {
    axios.post(`${API_URL}/bulb`, { bulb }, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        dispatch({ type: ADD_BULB, payload: bulb })
        browserHistory.push('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
