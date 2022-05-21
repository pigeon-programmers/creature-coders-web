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
import pet, { getPet } from '../store/pet';

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
  margin: 0.25em 1em;
`;
const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileHat = styled.img`
  width: 10vw;
  margin: 1em;
`;
const PetImage = styled.img`
  height: 30vw;
  margin-top: 5vh;
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

  useEffect(() => {
    if (id) dispatch(getPet(id));
  }, [pet]);

  const petUrls = {
    Pigeon: 'https://creature-coders.s3.amazonaws.com/pigeon-for-hats.svg',
    Racoon: 'https://creature-coders.s3.amazonaws.com/raccoon.svg',
  }

  return (
    <UserBG>
      <UserContent>
        <HomeTitle>{username}</HomeTitle>
        <RowContainer>
          <ProfileText>Current Level: {currentLevel}</ProfileText>
          <ProfileText>Current Game: {currentGame}</ProfileText>
        </RowContainer>
        <ProfileText>Hats:</ProfileText>
        {hats && hats.length > 0 ? (
          <RowContainer>
            {hats.map((hat) => (
              <ProfileHat key={hat.id} src={hat.url} />
            ))}
          </RowContainer>
        ) : (
          <ProfileText>Visit the shop to buy some hats!</ProfileText>
        )}
        <PetImage src={petUrls[type]}/>
        <ProfileText>
          Pet: {name} the {type}
        </ProfileText>
      </UserContent>
    </UserBG>
  );
};

export default UserProfile;
