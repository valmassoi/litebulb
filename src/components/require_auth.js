import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        // this.context.router.push('/signin')
        window.location = 'http://192.168.1.108:8081/auth/twitter'
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        // this.context.router.push('/signin')
        window.location = 'http://192.168.1.108:8081/auth/twitter'
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
