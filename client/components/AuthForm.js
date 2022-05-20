import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { Button, Main, FormContainer, Label, Input, LabelP } from './style';
import styled from 'styled-components';

// const VerifyInput = styled(Input)`
//   border: ${p => p.}
// `;

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <Main>
      <FormContainer onSubmit={handleSubmit} name={name} className="signup">
        <>
          <Label htmlFor="username">
            <LabelP>Username</LabelP>
          </Label>
          <Input id="username" type="text" />
        </>
        {name === 'signup' ? (
          <>
            <Label htmlFor="email">
              <LabelP>Email address</LabelP>
            </Label>
            <Input id="email" type="text" />
          </>
        ) : null}
        <>
          <Label htmlFor="password">
            <LabelP>Password</LabelP>
          </Label>
          <Input id="password" type="password" autocomplete="new-password" />
        </>
        {name === 'signup' ? (
          <>
            <Label htmlFor="confirmPassword">
              <LabelP>Confirm Password</LabelP>
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              autocomplete="new-password"
            />
          </>
        ) : null}
        <div>
          <Button>{displayName}</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </FormContainer>
    </Main>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email ? evt.target.email.value : null;
      dispatch(authenticate(username, email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
