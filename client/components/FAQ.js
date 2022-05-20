import React, { useState } from 'react'
import PopUp from './PopUp'
import { Content, Main, PopContainer, PopButton } from './style'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin-top: 1vh;
`;
 const HomeTitle = styled.h1`
  font-family: 'Kirang Haerang', sans-serif;
  font-size: 8vh;
  color: #FFFFFF;
  filter: drop-shadow(5px 5px 0 black);
`;

export const FAQ = () => {
  const [creatures, setCreatures] = useState(false)
  const [creators, setCreators] = useState(false)
  const [js, setJs] = useState(false)
  const [str, setStr] = useState(false)
  const [obj, setObj] = useState(false)
  const [arr, setArr] = useState(false)
  const [undeNull, setUndeNull] = useState(false)
  const [int, setInt] = useState(false)
  const [bool, setBool] = useState(false)
  const [play, setPlay] = useState(false)
  const [other, setOther] = useState(false)
  const [more, setMore] = useState(false)

  return (
    <Main>
      <Content>
        <HomeTitle>FAQ</HomeTitle>
        <ButtonContainer>
        <PopButton onClick={() => setCreatures(!creatures)} type='button'>What is Creature Coders?</PopButton>
          <PopUp open={creatures} title={'What is Creature Coders?'} togglePopUp={() => setCreatures(!creatures)}>
            <p>Creature Coders is a fun, learn-to-code game made for the iPad that teaches the logic behind JavaScript!</p>
          </PopUp>
        <PopButton onClick={() => setPlay(!play)} type='button'>How to play</PopButton>
          <PopUp open={play} title={'How to play'} togglePopUp={() => setPlay(!play)}>
            <p>Log in or Sign up once you get to the Home page, or if you just want to test the game out you can try the first couple of levels out! Once you sign in you can choose a garbage animal and hop on the subway to code your way through each stop. All the black stops are not unlocked yet, you must beat your current level in order to unlock the next level. After beating a level you gain points and Pidge coins, however, if you run the game and it is incorrect then you loose a point and a coin each time it runs until you reach 3 pidge coins. You are able to spend your coins on hats for your character. The points are for the leadership board!  </p>
          </PopUp>
        <PopButton onClick={() => setOther(!other)} type='button'>Other things you may see</PopButton>
          <PopUp open={other} title={'Other things you may see'} togglePopUp={() => setOther(!other)}>
            <p>You may see in some of the levels a block that says "Repeat" this block is replacing the for/while loops that are used. For/while loops are very useful for when you need to check every element of an array. They keep your code DRY (Don't Repeat Yourself) which is very important when writing code. If you can write easy to understand code that works in 5 lines verses 20 by using a for loop then do it!</p>
          </PopUp>
        <PopButton onClick={() => setCreators(!creators)} type='button'>Who created Creature Coders?</PopButton>
          <PopUp open={creators} title={'Who created Creature Coders?'} togglePopUp={() => setCreators(!creators)}>
            <p>The amazing creators of Creature Coders are Caitlin Sherman, Angel Robish, Kendall Perry, and Hannah Sommer. They worked hard to make a fun game that people of all ages would enjoy!</p>
            </PopUp>
        <PopButton onClick={() => setJs(!js)} type='button'>What is JavaScript?</PopButton>
          <PopUp open={js} title={'What is JavaScript?'} togglePopUp={() => setJs(!js)}>
            <p>JavaScript is a programming language that helps people make interactive web pages and much more! JavaScript is what created this game!</p>
            </PopUp>
        <PopButton onClick={() => setStr(!str)} type='button'>What is a String?</PopButton>
          <PopUp open={str} title={'What is a String?'} togglePopUp={() => setStr(!str)}>
            <p>A string is anything that is put in quotes ("", ''). "This is a string", "1235" that is also a string.
            </p>
            </PopUp>
        <PopButton onClick={() => setObj(!obj)} type='button'>What is an Object?</PopButton>
          <PopUp open={obj} title={'What is an Object?'} togglePopUp={() => setObj(!obj)}>
            <p>An object is an unordered collection of key-value pairs. A "key" is the element of the left side of the column and the "value" of the key is on the right side.</p>
            </PopUp>
        <PopButton onClick={() => setArr(!arr)} type='button'>What is an Array?</PopButton>
          <PopUp open={arr} title={'What is an Array?'} togglePopUp={() => setArr(!arr)}>
            <p>An array is a lot like an object, you are able to store multiple items, you can even store multiple objects inside an array! Something to remember when it comes to Objects and Arrays, all Arrays are Objects but not all Objects are arrays (kind of like squares and rectangles!)</p>
            </PopUp>
        <PopButton onClick={() => setInt(!int)} type='button'>What is an Interger?</PopButton>
          <PopUp open={int} title={'What is an Integer?'} togglePopUp={() => setInt(!int)}>
            <p>An Integer is any whole number. Any at all! 1,346? Yep, that's an integer. -8,945? that is also an integer! The integers are infinite!!</p>
            </PopUp>
        <PopButton onClick={() => setUndeNull(!undeNull)} type='button'>What are Null and Undefined?</PopButton>
          <PopUp open={undeNull} title={'What are Null and Undefined?'} togglePopUp={() => setUndeNull(!undeNull)}>
            <p>Undefined and Null may seem very similar but they are actually different. Undefined means a variable has been declared but has not been assigned. Null, however, is an object and can be set to a variable.</p>
          </PopUp>
          <PopButton onClick={() => setBool(!bool)} type='button'>What is a Boolean?</PopButton>
          <PopUp open={bool} title={'What is a Boolean?'} togglePopUp={() => setBool(!bool)}>
            <p>A Boolean is simply true or false. They are used when a programer needs to know "yes" or "no" about something. Booleans are extremely useful considering how simple they are.</p>
            </PopUp>
          <PopButton onClick={() => setMore(!more)} type='button'>Where can I find more information?</PopButton>
          <PopUp open={more} title={'Where can I find more information?'} togglePopUp={() => setMore(!more)}>
            <p>There are so many websites out there that give great information and go into detail about coding in JavaScript and all the other languages as well. https://www.w3schools.com  https://developer.mozilla.org/en-US  These are two that really dive into explaining everything there is to know about coding!</p>
            </PopUp>
          </ButtonContainer>
        </Content>
    </Main>
  )
}

export default FAQ
