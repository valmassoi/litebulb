import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import bulbReducer from './bulb_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  bulb: bulbReducer,
})

export default rootReducer
