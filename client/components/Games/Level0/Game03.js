import React, { useState } from 'react';
import { GameContainer, MatchButton } from '../../style';
import styled from 'styled-components';

const DataTypeButton = styled(MatchButton)`
  background: ${(props) => (props.className === 'off' ? 'white' : 'grey')};
`;

const AnswerButton = styled(MatchButton)`
  background: ${(props) => (props.className === 'off' ? 'pink' : 'grey')};
`;

const Game03 = () => {
  const [match, setMatch] = useState('');
  const [chosen, setChosen] = useState([]);

  const handleClick = (evt) => {
    const { value, className } = evt.target;
    console.log('VALUE', value);

    const newState = [...chosen, value];

    setChosen(newState);
    console.log('CHOSEN', chosen);
  };

  return (
    <div style={{ margin: 100 }}>
      <GameContainer style={{ backgroundColor: '#ffd68a' }}>
        <DataTypeButton className="off" value="string" onClick={handleClick}>
          string
        </DataTypeButton>
        <DataTypeButton className="off" value="boolean" onClick={handleClick}>
          boolean
        </DataTypeButton>
        <DataTypeButton className="off" value="number" onClick={handleClick}>
          number
        </DataTypeButton>
      </GameContainer>
      <GameContainer style={{ backgroundColor: '#add8e6' }}>
        <AnswerButton className="off" value="hello" onClick={handleClick}>
          'hello'
        </AnswerButton>
        <AnswerButton className="off" value="2" onClick={handleClick}>
          2
        </AnswerButton>
        <AnswerButton className="off" value="false" onClick={handleClick}>
          false
        </AnswerButton>
      </GameContainer>
    </div>
  );
};

export default Game03;
