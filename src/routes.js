import React from "react"
import { Route, IndexRoute } from "react-router"

import Home from "./pages/Home"
import Layout from "./components/Layout"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Settings from "./pages/Settings"
import RequireAuth from './components/require_auth'
import NotFound from './pages/404'
import Bulbs from './pages/Bulbs'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
    <Route path="settings" component={RequireAuth(Settings)} />
    <Route path="bulbs" component={Bulbs} />
    <Route path="*" component={NotFound} />
  </Route>
)
