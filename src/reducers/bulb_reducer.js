import { ADD_BULB, DELETE_BULB, LIKE_BULB, GET_BULBS, GET_ALL } from '../actions/types'
import _ from 'lodash'

let initState = {
  allBulbs: [],
  myBulbs: [],
}

export default function(state = initState, action) {
  switch (action.type) {
    case GET_BULBS:
      return {
        ...state,
        myBulbs: action.payload
      }
    case GET_ALL:
      return {
        ...state,
        allBulbs: action.payload
      }
    case ADD_BULB:
      return {
        ...state,
        allBulbs:[action.payload, ...state.allBulbs],
        myBulbs:[action.payload, ...state.myBulbs]
      }
    case DELETE_BULB:
      return {
        ...state,
        allBulbs:_.reject(state.allBulbs, { id: action.payload }),
        myBulbs:_.reject(state.myBulbs, { id: action.payload })
      }
    case LIKE_BULB:
      return {
        ...state,
      }
  }
  return state
}
