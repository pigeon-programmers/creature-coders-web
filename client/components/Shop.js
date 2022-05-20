import React, { useEffect } from 'react';
import { Button, HomeSubTitle, HomeTitle, Main } from './style';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHats } from '../store/hats';

const MainBg = styled(Main)`
  background-color: #ffe600;
`;

const Title = styled(HomeTitle)`
  margin: 0;
`;
const SubTitle = styled(HomeSubTitle)`
  color: black;
`;

const Hat = styled.img`
  width: 28vw;
  justify-content: space-around;
  margin: 0.25em 3em;
`;

const HatButton = styled(Button)`
  width: 30vw;
`;

const HatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3em;
`;

const HatContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
`;

const Shop = () => {
  // const allHats = [
  //   {
  //     name: 'baseball',
  //     url: 'https://creature-coders.s3.amazonaws.com/hat-baseball.svg',
  //     cost: 10,
  //   },
  //   {
  //     name: 'cheese',
  //     url: 'https://creature-coders.s3.amazonaws.com/hat-cheese.svg',
  //     cost: 50,
  //   },
  //   {
  //     name: 'cowboy',
  //     url: 'https://creature-coders.s3.amazonaws.com/hat-cowboy.svg',
  //     cost: 100,
  //   },
  //   {
  //     name: 'newsie',
  //     url: 'https://creature-coders.s3.amazonaws.com/hat-newsie.svg',
  //     cost: 25,
  //   },
  //   {
  //     name: 'sun',
  //     url: 'https://creature-coders.s3.amazonaws.com/hat-sun.svg',
  //     cost: 2000,
  //   },
  //   {
  //     name: 'top',
  //     url: 'https://creature-coders.s3.amazonaws.com/hat-top.svg',
  //     cost: 1000000,
  //   },
  // ];
  const dispatch = useDispatch();
  const allHats = useSelector((state) => state.hats);
  useEffect(() => {
    dispatch(getAllHats);
  }, []);

  console.log('all hats: ', allHats);

  return (
    <div>
      <MainBg>
        <Title>Hat Shop!</Title>
        <SubTitle>Buy hats with PidgeCoin</SubTitle>

        <HatContainer>
          {allHats && allHats.length > 0 ? (
            allHats.map((hat, index) => (
              <HatContainer2 key={index}>
                <Hat src={hat.url} />
                <HatButton
                  onClick={() => console.log('buy hat')}
                >{`P ${hat.cost}`}</HatButton>
              </HatContainer2>
            ))
          ) : (
            <SubTitle>Loading Hats...</SubTitle>
          )}
        </HatContainer>
      </MainBg>
    </div>
  );
};

{
  /* <HatContainer>
<Hat key={index} src={hat.url} />
<h3>{`$${hat.cost}`}</h3>
</HatContainer> */
}

export default Shop;
