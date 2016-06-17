import React from "react"
import { Route, IndexRoute } from "react-router"

import Home from "./pages/Home"
import Layout from "./components/Layout"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import RequireAuth from './components/require_auth'
import NotFound from './pages/404'
import Bulbs from './pages/Bulbs'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="signin" component={Signin} />
    <Route path="signin?twitter_token=:token" component={Signin} />
    {/*<Route path="dashboard" component={Dashboard} />*/}
    <Route path="dashboard" component={RequireAuth(Dashboard)} />
    <Route path="bulbs" component={Bulbs} />
    <Route path="*" component={NotFound} />
  </Route>
)
