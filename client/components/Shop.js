import React, { useEffect } from 'react';
import {
  Button,
  HomeSubTitle,
  HomeTitle,
  Main,
  Content,
  palette,
} from './style';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHats } from '../store/allHats';
import { buyHat, _updateActivePage } from '../store/user';

const MainBg = styled(Main)`
  background-color: ${palette.green};
`;
const HatContent = styled(Content)`
  background-color: rgba(255, 255, 255, 0.6);
  width: 80vw;
  top: 7vh;
  @media (min-width: 1025px) {
    width: 1025px;
  }
  @media (max-width: 500px) {
    overflow: scroll;
    width: 100vw;
}

`;
const Title = styled(HomeTitle)`
  margin: 0;
  margin-top: .5em;
`;
const SubTitle = styled(HomeSubTitle)`
  color: black;
  margin: 2vh;
`;
const Hat = styled.img`
  height: 10vw;
  margin: 0.5em 3em;
  @media (min-width: 1025px) {
    height: 100px;
}
  @media (max-width: 500px) {
    margin: 0.25em;
    height: 10vh;
  }
`;
const HatButton = styled(Button)`
  width: 30vw;
  font-size: 1.5em;
  padding: 0.25em 1.25em;
  @media (min-width: 1025px) {
    width: 275px;
  }
  @media (max-width: 500px) {
    width: 45vw;
    padding: 0.25em .75em;
  }
`;
const HatButtonNoClick = styled(HatButton)`
  opacity: 0.5;
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
  const dispatch = useDispatch();
  const allHats = useSelector((state) => state.allHats);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllHats());
  }, []);

  useEffect(() => {
    dispatch(_updateActivePage("shop"))
  }, [])

  const userHatsSet = new Set();
  if (user.hats && user.hats.length > 0) {
    user.hats.forEach((hat) => userHatsSet.add(hat.id));
  }

  return (
    <div>
      <MainBg>
        <HatContent>
          <Title>Hat Shop!</Title>
          <SubTitle>Buy hats with PidgeCoin</SubTitle>
          <HatContainer>
            {allHats && allHats.length > 0 ? (
              allHats.map((hat, index) => (
                <HatContainer2 key={index}>
                  <Hat src={hat.url} />
                  {userHatsSet.has(hat.id) ? (
                    <HatButtonNoClick>Already Own</HatButtonNoClick>
                  ) : hat.cost > user.pidgeCoin ? (
                    <HatButtonNoClick>{`P ${hat.cost}`}</HatButtonNoClick>
                  ) : (
                    <HatButton
                      onClick={() => dispatch(buyHat(hat, user.id))}
                    >{`P ${hat.cost}`}</HatButton>
                  )}
                </HatContainer2>
              ))
            ) : (
              <Title>Loading Hats...</Title>
            )}
          </HatContainer>
        </HatContent>
      </MainBg>
    </div>
  );
};

export default Shop;
