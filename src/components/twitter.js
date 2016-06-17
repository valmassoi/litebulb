import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authActions from '../actions/auth'

class Twitter extends Component {

  render() {
    const style = {
      margin: '50px auto 0px',
      textAlign: 'center',
      clear: 'both'
    }

    return(
      <div style={style}>
         <a href='http://192.168.1.108:8081/auth/twitter' target="_self"><i class="fa fa-twitter" aria-hidden="true"></i> Signin With Twitter</a>
      </div>
    )
  }
}

export default connect(null, authActions)(Twitter)
