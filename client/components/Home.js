import React from 'react'
import { Main, Button, HomeTitle, HomeSubTitle } from './style'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const MainBG = styled(Main)`
background-color: #2828FF;
`

const Home = () => {

  return (
    <MainBG>
      <HomeTitle>Creature Coders</HomeTitle>
      <HomeSubTitle>Learn to code with garbage animals</HomeSubTitle>
      <Link to="/map">
      <Button>Play Now</Button>
      </Link>
      <Link to="/login">
      <Button>Log In</Button>
      </Link>
      <Link to="/signup">
      <Button>Sign Up</Button>
      </Link>
    </MainBG>



  )
}

export default Home
