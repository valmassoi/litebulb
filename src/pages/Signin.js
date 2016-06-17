import React, { Component } from "react"
import { reduxForm } from 'redux-form'
import * as actions from '../actions/auth'
import Twitter from '../components/twitter'

class Signin extends Component {

  handleFormSubmit({ email, password}) {
    // this.props.signinUser( { email, password })
    window.location = 'http://192.168.1.108:8081/auth/twitter'
  }

  componentWillUnmount() {
    this.props.authError('')
  }

  componentWillReceiveProps(nextProps) {
    const token = this.props.location.query.twitter_token
    if(token) {
      this.props.authUser(token)
    }
  }

  renderAlert() {
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props

    return(
      <div>
        <Twitter />
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <input {...email} placeholder="Accounts coming soon" className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input {...password} type="password" placeholder="Please use twitter login" className="form-control" />
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Login</button>
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
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)
