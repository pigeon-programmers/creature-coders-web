import React, { useState } from 'react'
import { Computer, GameButton, GameContentNoBlock, GameText, Main, PopContainer, PopButton } from '../../style'
import styled from 'styled-components'

const SmallerGameText = styled(GameText)`
  font-size: small;
`

export const Debugger = () => {
  const [mission, setMission] = useState(true)
  const [hint, setHint] = useState(false)
  const [bugs, setBugs] = useState(['{', ';', ':', 'r', "'", '}', 'return'])
  return (
    <Main>
      <PopContainer>
        <PopButton onClick={() => setMission}>Mission</PopButton>
        <PopUp open={mission} togglePopUp={() => setMission(false)}>
          <div>Randel the Roach🪳</div>
          <div>
            You are trying to play Rock, Paper, Scissors with your friend but then you see Randel the Roach BUGGING up your code! Your mission is to find all of the BUGS in the code and squash them! BUGS are objects in your code that shouldn't be there such as an extra semicolon (;) or even an extra letter. Be on the look out for these BUGS!
          </div>
        </PopUp>
        <PopButton onClick={() => setHint}>Hint</PopButton>
        <PopUp open={hint} togglePopUp={() => setHint(false)}>
          <div>Hint</div>
          <div>
            In JavaScript there are a few elements that will need two of. As you can see there are multiple times we see two EQUAL signs (==) and two AND signs (&&), these are actually not bugs and are needed for the computer to understand what we are wanting to do with our code. For more information about these elements click on the directions page on the NavBar below!
          </div>
        </PopUp>
      </PopContainer>
      <GameContentNoBlock>
        <div>
          <GameText>Debug the code!🪳</GameText>
          <SmallerGameText>
            {'function rockPaperScissors(p1, p2) {'}
            <GameButton id={0}>{bugs[0]}</GameButton>
            <br />
            {'if (p1 == p2){'}
            <br />
            {'return \'Draw!\''}
            <GameButton id={2}>{bugs[2]}</GameButton>
            <br />
            {'}'}
            <br />
            <br />
            {'if (p1 == \'rock\' && '}
            <GameButton id={2}>{bugs[2]}</GameButton>
            {' p2 == \'scissors\'){'}
            <br />
            {'return \'Player 1 won!\''}
            <GameButton id={4}>{bugs[4]}</GameButton>
            <br />
            {'} else if (p1 == \'scissors\' && p2 == \'paper\'){'}
            <br />
            <GameButton id={3}>{bugs[3]}</GameButton>
            {'return \'Player 1 won!\''}
            <br />
            {'}'}
            <GameButton id={5}>{bugs[5]}</GameButton>
            {'else if (p1 == \'paper\' && p2 == \'rock\'){'}
            <br />
            {'return \'Player 1 won!\''}
            <br />
            {'} else{'}
            <br />
            {'return \'Player 2 won!\';'}
            <br />
            {'}'}
            <GameButton id={6}>{bugs[6]}</GameButton>
            <br />
          </SmallerGameText>
        </div>
      </GameContentNoBlock>
    </Main>
  )
}

export default Debugger
