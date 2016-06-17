import { ADD_BULB, DELETE_BULB, LIKE_BULB } from '../actions/types'

const initState = {
  allBulbs: [],
  myBulbs: [],
}

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_BULB:
      return {
        ...state,
        allBulbs:[action.payload, ...allBulbs],
        myBulbs:[action.payload, ...myBulbs]
      }
    case DELETE_BULB:
      return {
        ...state,
        allBulbs:_.reject(state.allBulbs, { _id: action.payload }),
        myBulbs:_.reject(state.myBulbs, { _id: action.payload })
      }
    case LIKE_BULB:
      return {
        ...state,
      }
  }
  return state
}
