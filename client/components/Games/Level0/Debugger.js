import React, { useState } from 'react'
import {
  GameButton,
  GameContentNoBlock,
  GameText,
  Main,
  PopContainer,
  PopButton
} from '../../style'
import styled from 'styled-components'
import PopUp from '../../PopUp'

const SmallerGameText = styled(GameText)`
  font-size: small;
`

export const Debugger = () => {
  const [mission, setMission] = useState(true)
  const [hint, setHint] = useState(false)
  const [bugs, setBugs] = useState(['{', ';', ':', 'r', "'", '}', 'return'])
  let [squash, setSquash] = useState([`_____`,`_____`,`_____`,`_____`,`_____`,`_____`,`_____`,])
  const [won, setWon] = useState(true)
  const fakeBugs = ['if', ')', '}', '==', '&&']
  let debugged = false

  if (squash.includes(`_____`) === false) {
    debugged = true
  }

  if (debugged === true) {
    return (
      <PopContainer>
        <PopUp open={won} togglePopUp={() => setWon(false)}>
          <p>Great Job!</p>
          <p>You got rid of all the BUGS and fixed your code!🎉</p>
        </PopUp>
      </PopContainer>
    )
  }

  const handleClick = (event) => {
    const text = event.target.innerHTML
    squash = bugs.filter((e) => e !== text)
    setBugs(squash)
    // setSquash([...])
  }

  return (
    <Main>
      <PopContainer>
        <PopButton onClick={() => setMission(true)}>Mission</PopButton>
        <PopUp open={mission} togglePopUp={() => setMission(false)}>
          <p>Randel the Roach🪳</p>
          <p>
            You are trying to play Rock, Paper, Scissors with your friend but
            then you see Randel the Roach BUGGING up your code! Your mission is
            to find all of the BUGS in the code and squash them! BUGS are
            objects in your code that shouldn't be there such as an extra
            semicolon (;) or even an extra letter. Be on the look out for these
            BUGS!
          </p>
        </PopUp>
        <PopButton onClick={() => setHint(true)}>Hint</PopButton>
        <PopUp open={hint} togglePopUp={() => setHint(false)}>
          <p>Hint</p>
          <p>
            In JavaScript there are a few elements that will need two of. As you
            can see there are multiple times we see two EQUAL signs (==) and two
            AND signs (&&), these are actually not bugs and are needed for the
            computer to understand what we are wanting to do with our code. For
            more information about these elements click on the directions page
            on the NavBar below!
          </p>
        </PopUp>
      </PopContainer>
      <GameContentNoBlock>
        <div>
          <GameText>Debug the code!🪳</GameText>
          <SmallerGameText>
            {'function rockPaperScissors(p1, p2) {'}
            <GameButton id={0} onclick={handleClick}>{bugs[0]}</GameButton>
            <br />
            {'if (p1'}
            <GameButton id={3}>{fakeBugs[3]}</GameButton>
            {'p2){'}
            <br />
            {"return 'Draw!'"}
            <GameButton id={2} onclick={handleClick}>{bugs[2]}</GameButton>
            <br />
            {'}'}
            <br />
            {"if (p1 == 'rock' && "}
            <GameButton id={1} onclick={handleClick}>{bugs[1]}</GameButton>
            {" p2 == 'scissors'){"}
            <br />
            {"return 'Player 1 won!'"}
            <GameButton id={4} onclick={handleClick}>{bugs[4]}</GameButton>
            <br />
            {"} else if (p1 == 'scissors'"}
            <GameButton id={4}>{fakeBugs[4]}</GameButton>
            {"p2 == 'paper'){"}
            <br />
            <GameButton id={3} onclick={handleClick}>{bugs[3]}</GameButton>
            {"return 'Player 1 won!'"}
            <br />
            {'}'}
            <GameButton id={5} onclick={handleClick}>{bugs[5]}</GameButton>
            {'else'}
            <GameButton id={0}>{fakeBugs[0]}</GameButton>
            {"(p1 == 'paper' && p2 == 'rock'){"}
            <br />
            {"return 'Player 1 won!'"}
            <br />
            {'} else {'}
            <br />
            {"return 'Player 2 won!';"}
            <br />
            {'}'}
            <GameButton id={6} onclick={handleClick}>{bugs[6]}</GameButton>
            <br />
          </SmallerGameText>
        </div>
      </GameContentNoBlock>
      <GameContentNoBlock>
        <GameText>Place all the bugs in here!</GameText>
        {squash.map((e, i) => (
          <GameButton key={i}>
            {e}
            </GameButton>
          ))}
      </GameContentNoBlock>
    </Main>
  )
}

// if the function in the box == (
// function rockPaperScissors(p1, p2) {
//  if (p1 == p2){
//    return 'Draw!'
//  }
//  if (p1 == 'rock' && p2 == 'scissors'){
//    return 'Player 1 won!'
//  } else if (p1 == 'scissors' && p2 == 'paper'){
//    return 'Player 1 won!'
//  } else if (p1 == \'paper\' && p2 == \'rock\'){ {
//    return 'Player 1 won!'
//  } else {
//    return 'Player 2 won!';
//  }
//  )

//  rerturn debugged

export default Debugger
