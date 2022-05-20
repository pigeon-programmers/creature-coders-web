import React, { useState } from 'react';
import PopUp from './PopUp';
import { Content, Main, PopContainer, PopButton, HomeTitle } from './style';
import styled from 'styled-components';

const FaqTitle = styled(HomeTitle)`
  margin-bottom: 1vh;
  font-family: 'Kirang Haerang', sans-serif;
  font-size: 8vh;
  color: #ffffff;
  filter: drop-shadow(5px 5px 0 black);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin-top: 1vh;
`;

export const FAQ = () => {
  const [creatures, setCreatures] = useState(false);
  const [creators, setCreators] = useState(false);
  const [js, setJs] = useState(false);
  const [str, setStr] = useState(false);
  const [obj, setObj] = useState(false);
  const [arr, setArr] = useState(false);
  const [undeNull, setUndeNull] = useState(false);
  const [int, setInt] = useState(false);
  const [bool, setBool] = useState(false);
  const [play, setPlay] = useState(false);
  const [other, setOther] = useState(false);
  const [more, setMore] = useState(false);

  return (
    <Main>
      <Content>
        <FaqTitle>FAQ</FaqTitle>
        <ButtonContainer>
          <PopButton onClick={() => setCreatures(!creatures)} type="button">
            What is Creature Coders?
          </PopButton>
          <PopUp
            open={creatures}
            title={'What is Creature Coders?'}
            togglePopUp={() => setCreatures(!creatures)}
          >
            <div>
              <p>
                Creature Coders is a fun, learn-to-code game that teaches the
                logic behind JavaScript! It ranges from learning logic to seeing
                how real code looks!!
              </p>
              <p> Note: It currently views and operates best on a tablet.</p>
            </div>
          </PopUp>
          <PopButton onClick={() => setPlay(!play)} type="button">
            How to play
          </PopButton>
          <PopUp
            open={play}
            title={'How to play'}
            togglePopUp={() => setPlay(!play)}
          >
            <div>
              <p>
                Log in or Sign up once you get to the Home page, or, if you just
                want to test the game out, you can try the first two levels
                without an account! Once you sign in you can choose a garbage
                animal pet and hop on the subway to code your way through each
                stop.
              </p>
              <p>
                Any white subway stop means that it is open and accessible, and
                the black stops are not unlocked yet. You must beat a level to
                unlock the next level.
              </p>
              <p>
                After winning a level you gain points and Pidge coins. But watch
                out -- if you run the game and it is incorrect, you will loose a
                point and a coin. Even so, you will always at least win 5 points
                and 3 Pidge coins!
              </p>
              <p>
                You are able to spend your Pidge coins on hats for your pet in
                the store. The points are to see how great you are doing, and
                you can see how others are doing on leadership board!
              </p>
              <p>...now get coding!</p>
            </div>
          </PopUp>
          <PopButton onClick={() => setCreators(!creators)} type="button">
            Who created Creature Coders?
          </PopButton>
          <PopUp
            open={creators}
            title={'Who created Creature Coders?'}
            togglePopUp={() => setCreators(!creators)}
          >
            <div>
              <p>
                The amazing creators of Creature Coders are Caitlin Sherman,
                Angel Robish, Kendall Perry, and Hannah Sommer. They worked hard
                to make a fun game that people of all ages would enjoy and are
                so excited for you to play!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setJs(!js)} type="button">
            What is JavaScript?
          </PopButton>
          <PopUp
            open={js}
            title={'What is JavaScript?'}
            togglePopUp={() => setJs(!js)}
          >
            <div>
              <p>
                JavaScript is a programming language that helps people make
                interactive web pages and much more! In fact, the creators of
                this game USED JavaScript to code this game!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setStr(!str)} type="button">
            What are Data Types?
          </PopButton>
          <PopUp
            open={js}
            title={'What are Data Types?'}
            togglePopUp={() => setJs(!js)}
          >
            <div>
              <p>
                Data types are how JavaScript sees the different things that you
                write. They are usually held in a variable. The data types you
                will use most often are strings, numbers, objects, arrays,
                booleans, null, and undefined. Check out the rest of the FAQs to
                see what those are.
              </p>
              <p>
                Note: We do not talk about variables too much here, but just
                know that a variable is a word or phrase that holds, or points
                to, any kind of data type!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setStr(!str)} type="button">
            What is a String?
          </PopButton>
          <PopUp
            open={str}
            title={'What is a String?'}
            togglePopUp={() => setStr(!str)}
          >
            <div>
              <p>A string is anything that is put in quotes ("", ''). </p>
              <p>
                "This is a string". "1235" is also a string because it has
                quotes around it.
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setInt(!int)} type="button">
            What is an Number?
          </PopButton>
          <PopUp
            open={int}
            title={'What is an Number?'}
            togglePopUp={() => setInt(!int)}
          >
            <div>
              <p>
                An Number is any whole number. Any at all! 1,346? Yep, that's a
                number. -8,945? That is also an number! The numbers are
                infinite!!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setObj(!obj)} type="button">
            What is an Object?
          </PopButton>
          <PopUp
            open={obj}
            title={'What is an Object?'}
            togglePopUp={() => setObj(!obj)}
          >
            <div>
              <p>
                An Object is an unordered collection of key-value pairs. If you
                think of this like a dictionary, the "key" is the word, and the
                "value" is the definition
              </p>
              <p>
                {`An object has curly braces around it with information inside it.
                it may look something like this: { a: 1 }. The
                "key" is the character to the left side of the colon and the
                "value" is to the right side of the colon.`}
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setArr(!arr)} type="button">
            What is an Array?
          </PopButton>
          <PopUp
            open={arr}
            title={'What is an Array?'}
            togglePopUp={() => setArr(!arr)}
          >
            <div>
              <p>
                An array is an object but without the key/value pairs. You are
                able to store multiple items in an array, you can even store
                multiple objects inside an array!
              </p>
              <p>
                {`Arrays are kept within square brackets and may look something like this: [1, hello, 2, pigeons].`}
              </p>
              <p>
                Something to remember when it comes to Objects and Arrays: All
                Arrays are Objects but not all Objects are arrays (kind of like
                squares and rectangles!)
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setBool(!bool)} type="button">
            What is a Boolean?
          </PopButton>
          <PopUp
            open={bool}
            title={'What is a Boolean?'}
            togglePopUp={() => setBool(!bool)}
          >
            <p>
              A Boolean is simply true or false. They are used when a programmer
              needs to know "yes" or "no" about something. Booleans are
              extremely useful considering how simple they are.
            </p>
          </PopUp>
          <PopButton onClick={() => setUndeNull(!undeNull)} type="button">
            What are Null and Undefined?
          </PopButton>
          <PopUp
            open={undeNull}
            title={'What are Null and Undefined?'}
            togglePopUp={() => setUndeNull(!undeNull)}
          >
            <div>
              <p>
                Null and Undefined may seem very similar, but they are actually
                different. Undefined means a variable has been declared but has
                not been assigned. Null means a variable has been assigned to
                nothing!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setOther(!other)} type="button">
            What else will I see here?
          </PopButton>
          <PopButton onClick={() => setUndeNull(!undeNull)} type="button">
            What is a bug?
          </PopButton>
          <PopUp
            open={undeNull}
            title={'What is a bug?'}
            togglePopUp={() => setUndeNull(!undeNull)}
          >
            <div>
              <p>
                A bug is an error in someone's code that causes the program to
                do something unexpected. When you find and fix bugs in your
                code, it is called debugging.
              </p>
              <p>
                In 1947 Grace Hopper, a computer scientist and naval engineer,
                found AN ACTUAL BUG in the computer that was causing problems.
                She put the bug in a log with the note: "First actual case of a
                bug being found." This was back when computers were big things
                that relayed information through tons of wires (...we've come a
                long way). This is why we use the word "bug."
              </p>
              <p>
                Fun fact: Grace Hopper is an important figure in the programming
                world. The creators of this app attended the Grace Hopper
                Program at Full Stack Academy!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setOther(!other)} type="button">
            What else will I see here?
          </PopButton>
          <PopUp
            open={other}
            title={'What else will I see here?'}
            togglePopUp={() => setOther(!other)}
          >
            <p>
              In some of the levels you may see a block that says "Repeat". This
              block is replacing the for/while loops that are used in JavaScript
              and that you will see on some of the harder levels.
            </p>
            <p>
              For/while loops are very useful for when you need to check every
              element of an array. They keep your code DRY (Don't Repeat
              Yourself), which is very important when writing code. If you can
              write easy to understand code that works in 5 lines verses 20 by
              using a for loop then do it!
            </p>
          </PopUp>
          <PopButton onClick={() => setMore(!more)} type="button">
            Where can I find more information?
          </PopButton>
          <PopUp
            open={more}
            title={'Where can I find more information?'}
            togglePopUp={() => setMore(!more)}
          >
            <p>
              There are so many websites out there that give great information
              and go into detail about coding in JavaScript and all the other
              languages as well. We listed two below that really dive into
              explaining everything there is to know about coding!
              <ul>
                <li>
                  <a href="https://developer.mozilla.org/en-US">
                    Mozilla Developer Network
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com">W3 Schools</a>
                </li>
              </ul>
            </p>
          </PopUp>
        </ButtonContainer>
      </Content>
    </Main>
  );
};

export default FAQ;
