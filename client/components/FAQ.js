import React, { useState, useEffect } from 'react';
import PopUp from './PopUp';
import {
  Content,
  Main,
  PopContainer,
  PopButton,
  HomeTitle,
  palette,
} from './style';
import styled from 'styled-components';
import { _updateActivePage } from '../store/user';
import { useDispatch } from 'react-redux';

const FaqTitle = styled(HomeTitle)`
  margin: 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1vh;
  overflow: scroll;
`;

export const FAQ = () => {
  const dispatch = useDispatch();
  const [creatures, setCreatures] = useState(false);
  const [creators, setCreators] = useState(false);
  const [js, setJs] = useState(false);
  const [types, setTypes] = useState(false);
  const [str, setStr] = useState(false);
  const [obj, setObj] = useState(false);
  const [arr, setArr] = useState(false);
  const [undeNull, setUndeNull] = useState(false);
  const [num, setNum] = useState(false);
  const [bool, setBool] = useState(false);
  const [bug, setBug] = useState(false);
  const [play, setPlay] = useState(false);
  const [other, setOther] = useState(false);
  const [more, setMore] = useState(false);

  useEffect(() => {
    dispatch(_updateActivePage(''));
  }, []);

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
                logic behind JavaScript! It ranges from learning the principles
                of coding to seeing how real code looks!
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
                Log in or Sign up from the Home page, or if you want to test the
                game out, you can try the first two levels without an account!
                Once you sign in you can choose a garbage animal pet and hop on
                the subway to code your way through each stop.
              </p>
              <p>
                Any white subway stop means that it is open and accessible, and
                the black stops are not unlocked yet. You must beat a level to
                unlock the level after it.
              </p>
              <p>
                After winning a level you gain points and PidgeCoins. But watch
                out -- if click the run button and it is incorrect, you will
                loose a point and a coin. You will always win at least 5 points
                and 3 PidgeCoins!
              </p>
              <p>
                You are able to spend your PidgeCoins on hats for your pet in
                the shop. The points are to see how great you are doing, and you
                can see how far other players have gotten on the leaderboard!
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
                The creators of Creature Coders are Caitlin Sherman, Angel
                Robish, Kendall Perry, and Hannah Sommer. They worked hard to
                make a fun game that people of all ages would enjoy and are so
                excited for you to play!
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
          <PopButton onClick={() => setTypes(!types)} type="button">
            What are Data Types?
          </PopButton>
          <PopUp
            open={types}
            title={'What are Data Types?'}
            togglePopUp={() => setTypes(!types)}
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
              <p>A string is anything that is put in quotes (" ", ' '). </p>
              <p>
                A string is anything that is put in quotes. They can be single
                quotes, 'like this,' or double quotes, "like this."{' '}
              </p>
              <p>
                "This is a string." "123" is also a string because it has quotes
                around it!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setNum(!num)} type="button">
            What is an Number?
          </PopButton>
          <PopUp
            open={num}
            title={'What is a Number?'}
            togglePopUp={() => setNum(!num)}
          >
            <div>
              <p>
                A Number in JavaScript is any integer. Any at all! 346.5? Yep,
                that's a number. -8,945? That is also a number! The numbers are
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
                An Object is an collection of key-value pairs. If you think of
                this like a dictionary, the "key" is the word, and the "value"
                is the definition. Unlike a dictionary though, the contents of
                objects are not in any special order!
              </p>
              <p>
                {`An object has curly braces around it and information inside.
                it may look something like this: { name: "Pidge" }. The
                "key" is on the left side and the
                "value" is on the right.`}
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
                An array is like a list. You can put all sorts of things into an
                array!
              </p>
              <p>
                {`Arrays use square brackets and may look something like this: ["hello", 42, "pigeons"].`}{' '}
                The order of things in an array is called the index. But unlike
                how you or I probably count, computers start counting at zero.
                So "hello" in our example array is at the 0th index!
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
                Null and Undefined may seem like the same thing, but they are
                actually different. Undefined means a variable has been declared
                but has not been assigned. Null means a variable has been
                assigned to nothing!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setBug(!bug)} type="button">
            What is a Bug?
          </PopButton>
          <PopUp
            open={bug}
            title={'What is a bug?'}
            togglePopUp={() => setBug(!bug)}
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
                bug being found." This was back when computers filled rooms and
                relayed information through tons of wires (...we've come a long
                way). This is why we use the word "bug."
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
            <div>
              <p>
                In some of the levels you may see a block that says "Repeat".
                This block is replacing the "for" and "while" loops that are
                used in JavaScript and that you will see on some of the harder
                levels.
              </p>
              <p>
                A "for" loop does something FOR a set number of times, and a
                "while" loop does something WHILE a certain condition is met.
                They keep your code DRY (Don't Repeat Yourself), which is very
                important when writing code. If you can write easy-to-understand
                code that works in 5 lines verses 20 by using a for loop then do
                it!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setMore(!more)} type="button">
            Where can I find more information?
          </PopButton>
          <PopUp
            open={more}
            title={'Where can I find more information?'}
            togglePopUp={() => setMore(!more)}
          >
            <div>
              There are so many websites out there that give great information
              and go into detail about coding in JavaScript (and all the other
              languages, as well). We listed two below that dive into explaining
              these concepts in more detail!
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
            </div>
          </PopUp>
        </ButtonContainer>
      </Content>
    </Main>
  );
};

export default FAQ;
