import React from 'react'
import { Main, Button } from './style'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const MainBG = styled(Main)`
background-color: #2828FF;
`

const Home = () => {

  return (
    <MainBG>
      <h1>Creature Coders</h1>
      <h5>Learn to code with garbage animals</h5>
      <Link to="/map">
      <Button>Play Now</Button>
      </Link>
      <Link to="/login">
      <Button>Log In</Button>
      </Link>
      <Link to="/singup">
      <Button>Sign Up</Button>
      </Link>
    </MainBG>



  )
}

export default Home
