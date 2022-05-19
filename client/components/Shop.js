import React from 'react';
import { HomeTitle, Main } from './style';
import styled from 'styled-components';

const MainBg = styled(Main)`
  background-color: #ffe600;
`;

const Hat = styled.img`
  width: 10%;
`;

const HatContainer = styled.div`
display: flex;
flex-direction: column;
`
const HatContainer2 = styled.div`
display: flex;
flex-direction: row;
font-family: 'Anonymous Pro', 'Andale Mono', monospace;
`

const Shop = () => {
  const allHats = [
    {
      name: 'baseball',
      url: 'https://creature-coders.s3.amazonaws.com/hat-baseball.svg',
      cost: 10,
    },
    {
      name: 'cheese',
      url: 'https://creature-coders.s3.amazonaws.com/hat-cheese.svg',
      cost: 50,
    },
    {
      name: 'cowboy',
      url: 'https://creature-coders.s3.amazonaws.com/hat-cowboy.svg',
      cost: 100,
    },
    {
      name: 'newsie',
      url: 'https://creature-coders.s3.amazonaws.com/hat-newsie.svg',
      cost: 25,
    },
    {
      name: 'sun',
      url: 'https://creature-coders.s3.amazonaws.com/hat-sun.svg',
      cost: 2000,
    },
    {
      name: 'tophat',
      url: 'https://creature-coders.s3.amazonaws.com/hat-tophat.svg',
      cost: 1000000,
    },
  ];

  return (
    <div>
      <MainBg>
        <HatContainer>

        {allHats.map((hat, index) => (
          <HatContainer2 key={index}>
              <Hat src={hat.url} />
              <h3>{hat.cost}</h3>
        </HatContainer2>
        ))}
        </HatContainer>
      </MainBg>
    </div>
  );
};

{/* <HatContainer>
<Hat key={index} src={hat.url} />
<h3>{`$${hat.cost}`}</h3>
</HatContainer> */}

export default Shop;
