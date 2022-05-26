import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Main,
  HomeTitle,
  HomeSubTitle,
  Content,
  palette,
  Button,
} from './style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pet, { getPet } from '../store/pet';
import { _updateActivePage } from '../store/user';

const UserBG = styled(Main)`
  background-color: ${palette.pink};
`;
const UserContent = styled(Content)`
  background-color: rgba(255, 255, 255, 0.6);
  width: 80vw;
  height: 85vh;
  @media (min-width: 1025px) {
    width: 1025px;
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
`;
const Title = styled(HomeTitle)`
  margin: 0;
`;
const ProfileText = styled(HomeSubTitle)`
  font-size: 3vh;
  color: black;
  margin: 0.5em;
  @media (max-width: 500px) {
    margin: 0.25em 0;
  }
`;
const EditButton = styled(Button)`
  font-size: large;
  margin: 0.25em 1em;
  padding: 0.25em 1em;
`;
const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const HatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    margin: 0 1em;
  }
`;
const ProfileHat = styled.img`
  width: 10vw;
  margin: 1vw;
  @media (min-width: 1025px) {
    width: 125px;
  }
  @media (max-width: 500px) {
    width: 82px;
    margin: 0.25em;
  }
`;
const PetContainer = styled.div`
  height: 600px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 500px) {
    height: 300px;
  }
`;
const PetImage = styled.img`
  height: 400px;
  @media (max-width: 500px) {
    height: 225px;
  }
`;
const PetHat = styled.img`
  width: 215px;
  position: absolute;
  bottom: 350px;
  left: 178px;
  z-index: 1;
  @media (max-width: 500px) {
    width: 145px;
    bottom: 194px;
    left: 198px;
  }
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentLevel, currentGame, username, id, hats } = useSelector(
    (state) => state.user
  );
  const { name, type } = useSelector((state) => state.pet);
  const [petHat, setPetHat] = useState({});

  useEffect(() => {
    if (id) dispatch(getPet(id));
  }, [id]);

  useEffect(() => {
    if (id) dispatch(getPet(id));
  }, [pet]);

  useEffect(() => {
    dispatch(_updateActivePage('profile'));
  }, []);

  const petUrls = {
    Pigeon: 'https://creature-coders.s3.amazonaws.com/pigeon-for-hats.svg',
    Raccoon: 'https://creature-coders.s3.amazonaws.com/raccoon.svg',
    Possum: 'https://creature-coders.s3.amazonaws.com/possum.svg',
  };

  return (
    <UserBG>
      <UserContent>
        <Title>{username}</Title>
        <RowContainer>
          <ProfileText>Current Level: {currentLevel}</ProfileText>
          <ProfileText>Current Game: {currentGame}</ProfileText>
        </RowContainer>
        <ProfileText>Hats - click to wear!</ProfileText>
        {hats && hats.length > 0 ? (
          <HatContainer>
            {hats.map((hat) => (
              <ProfileHat
                key={hat.id}
                src={hat.url}
                onClick={() => setPetHat(hat)}
              />
            ))}
          </HatContainer>
        ) : (
          <ProfileText>Visit the shop to buy some hats!</ProfileText>
        )}
        <PetContainer>
          {petHat ? (
            <PetHat src={petHat.url} onClick={() => setPetHat({})} />
          ) : null}
          <PetImage src={petUrls[type]} />
        </PetContainer>
        <RowContainer>
          <ProfileText>
            Pet: {name} the {type}
          </ProfileText>
          <Link to="/pet">
            <EditButton> Edit</EditButton>
          </Link>
        </RowContainer>
      </UserContent>
    </UserBG>
  );
};

export default UserProfile;
