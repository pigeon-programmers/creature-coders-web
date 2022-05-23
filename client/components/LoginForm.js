import React from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../store'
import { Button, Main, FormContainer, Label, Input, LabelP } from './style'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
const LoginForm = (props) => {
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formName = evt.target.name
    const password = evt.target.password.value
    const email = evt.target.email ? evt.target.email.value : null
    dispatch(authenticate(email, password, formName))
  }

  const { error } = props

  return (
    <Main>
      <FormContainer onSubmit={handleSubmit} name='login'>
          <>
            <Label htmlFor="email"><LabelP>Email address</LabelP></Label>
            <Input id="email" type="text" />
          <Label htmlFor="password"><LabelP>Password</LabelP></Label>
          <Input id="password" type="password" autocomplete="new-password" />
        </>
        <div>
          <Button>Login</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </FormContainer>
      {/* <div>Forgot password?
        <Link to='somehting'>Reset it</Link>
      </div> */}
    </Main>
  )
}


export default LoginForm
