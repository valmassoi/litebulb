import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions/auth'

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    window.location = '/auth/twitter'
  }

  componentWillUnmount() {
    this.props.authError('')
  }

  componentDidMount() {
    const token = this.props.location.query.twitter_token
    if (token)
      this.props.authUser(token)
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props

    return (
      <div>
        <h1>Please Use Login / Signup Button</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset class="form-group">
            <label>Email:</label>
            <input {...email} placeholder="Accounts coming soon" class="form-control" />
          </fieldset>
          <fieldset class="form-group">
            <label>Password:</label>
            <input
              {...password}
              type="password"
              placeholder="Please use twitter login"
              class="form-control"
            />
          </fieldset>
          <button action="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
}, mapStateToProps, actions)(Signin)
