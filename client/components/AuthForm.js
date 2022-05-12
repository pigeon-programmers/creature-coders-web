import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'
import { Button } from './style'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name} className='signup'>
        <div>
          <label htmlFor="username">
            <p>Username</p>
          </label>
          <input name="username" type="text" />
        </div>
        {name === "signup" ? (
          <div className="auth-div">
            <label htmlFor="email">
              <p>Email address</p>
            </label>
            <input name="email" type="text" />
          </div>
        ) : null}
        <div>
          <label htmlFor="password">
            <p>Password</p>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <Button>{displayName}</Button>
          {/* <button type="submit">{displayName}</button> */}
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      const email = evt.target.email ? evt.target.email.value : null;
      dispatch(authenticate(username, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
