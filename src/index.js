// require('file?name=[name].[ext]!../index.html')// for webpack
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import reducers from './reducers/index'
import routes from './routes'
import { AUTH_USER } from './actions/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('twitter_token')
if (token)
  store.dispatch({ type: AUTH_USER, payload: { token } })

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , app
)
