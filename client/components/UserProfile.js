import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Main,
  Button,
  HomeTitle,
  HomeSubTitle,
  Content,
  palette,
} from './style';
import styled from 'styled-components';
import { getPet } from '../store/pet';

const UserBG = styled(Main)`
  background-color: ${palette.pink};
`;
const UserContent = styled(Content)`
  background-color: rgba(255, 255, 255, 0.6);
  height: 70%;
  width: 80%;
`;
const ProfileText = styled(HomeSubTitle)`
  font-size: 3vh;
  color: black;
  z-index: 50;
  margin: 0;
`;
const HatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileHat = styled.img`
  width: 10vw;
  margin: 1em;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentLevel, currentGame, username, id, hats } = useSelector(
    (state) => state.user
  );
  const { name, type } = useSelector((state) => state.pet);

  useEffect(() => {
    if (id) dispatch(getPet(id));
  }, [id]);

  return (
    <UserBG>
      <UserContent>
        <HomeTitle>{username}</HomeTitle>
        <ProfileText>
          Pet: {name} the {type}
        </ProfileText>
        <ProfileText>Current Level: {currentLevel}</ProfileText>
        <ProfileText>Current Game: {currentGame}</ProfileText>
        <ProfileText>Hats:</ProfileText>
        {hats && hats.length > 0 ? (
          <HatContainer>
            {hats.map((hat) => (
              <ProfileHat key={hat.id} src={hat.url} />
            ))}
          </HatContainer>
        ) : (
          <ProfileText>Visit the shop to buy some hats!</ProfileText>
        )}
      </UserContent>
    </UserBG>
  );
};

export default UserProfile;
