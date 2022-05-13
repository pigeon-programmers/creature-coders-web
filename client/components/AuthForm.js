import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'
import { Button, Main, FormContainer, Label, Input } from './style'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <Main>
      <FormContainer onSubmit={handleSubmit} name={name} className='signup'>
        <div>
          <Label htmlFor="username">
            <p>Username</p>
          </Label>
          <Input name="username" type="text" />
        </div>
        {name === "signup" ? (
          <div className="auth-div">
            <Label htmlFor="email">
              <p>Email address</p>
            </Label>
            <Input name="email" type="text" />
          </div>
        ) : null}
        <div>
          <Label htmlFor="password">
            <p>Password</p>
          </Label>
          <Input name="password" type="password" />
        </div>
        <div>
          <Button>{displayName}</Button>
          {/* <button type="submit">{displayName}</button> */}
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </FormContainer>
    </Main>
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
