import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Main, FormContainer, Label, Input, LabelP, PopContainer } from './style'
import PopUp from './PopUp'
import { createUser } from '../store/user'
import styled from 'styled-components'
import { _updateActivePage } from '../store/user'

const MainSU = styled(Main)`
background-color: #ED1697;
`

const SignUpContainer = styled(FormContainer)`
@media (min-width: 500px) {
  height: 85vh;
}
`

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [notMatching, setNotMatching] = useState(false);

  const { lsCoins, lsPoints, lsGame, lsLevel } = useSelector(
    (state) => state.localStorage
  );

  useEffect(() => {
    dispatch(_updateActivePage("signup"))
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (password !== confPassword) {
      <PopContainer>
        <PopUp
          open={notMatching}
          togglePopUp={() => setNotMatching(false)}
          title={"Oh no!"}
        >
          <p>Your passwords don't match! Try again!🐦 </p>
        </PopUp>
      </PopContainer>;
    } else {
      const user = {
        username,
        email,
        password,
        currentLevel: lsLevel,
        currentGame: lsGame,
        pidgeCoin: lsCoins,
        points: lsPoints,
      };
      dispatch(createUser(user, history));
    }
  };

  return (
    <MainSU>
      <SignUpContainer onSubmit={handleSubmit} name='signup'>
        <>
          <Label htmlFor="username">
            <LabelP>Username</LabelP>
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            required
            onChange={(evt) => {
              setUsername(evt.target.value);
            }}
          />
          <Label htmlFor="email">
            <LabelP>Email address</LabelP>
          </Label>
          <Input
            id="email"
            type="text"
            value={email}
            required
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}
          />
          <Label htmlFor="password">
            <LabelP>Password</LabelP>
          </Label>
          <Input
            id="password"
            type="password"
            autocomplete="new-password"
            value={password}
            required
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
          <Label htmlFor="confirmPassword">
            <LabelP>Confirm Password</LabelP>
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            autocomplete="new-password"
            value={confPassword}
            required
            onChange={(evt) => {
              setConfPassword(evt.target.value);
            }}
          />
        </>
        <div>
          <Button>Signup</Button>
        </div>
      </SignUpContainer>
    </MainSU>
  )
}

export default SignupForm;
