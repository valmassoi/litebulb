import { ADD_BULB } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_BULB:
      return { ...state }
  }
  return state
}
