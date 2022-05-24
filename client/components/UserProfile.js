import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Main,
  HomeTitle,
  HomeSubTitle,
  Content,
  palette,
  Button
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
  height: 70%;
  width: 80%;
`;
const Title = styled(HomeTitle)`
margin: 0;
`
const ProfileText = styled(HomeSubTitle)`
  font-size: 3vh;
  color: black;
  margin: 0.25em 1em;
`;

const EditButton = styled(Button)`
  font-size: large;
  margin: 0.25em;
  padding: 0.25em 1em;
`
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
  height: 40vw;
  margin-top: 9vh;
`;
const PetHat = styled.img`
  width: 25vw;
  position: absolute;
  top: 47vh;
  left:41vw;
`

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentLevel, currentGame, username, id, hats } = useSelector(
    (state) => state.user
  );
  const { name, type } = useSelector((state) => state.pet);
  const [petHat, setPetHat] = useState({})

  useEffect(() => {
    if (id) dispatch(getPet(id));
  }, [id]);

  useEffect(() => {
    if (id) dispatch(getPet(id));
  }, [pet]);

  useEffect(() => {
    dispatch(_updateActivePage("profile"))
  }, [])

  const petUrls = {
    Pigeon: 'https://creature-coders.s3.amazonaws.com/pigeon-for-hats.svg',
    Raccoon: 'https://creature-coders.s3.amazonaws.com/raccoon.svg',
    Possum: 'https://creature-coders.s3.amazonaws.com/possum.svg',
  }

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
          <RowContainer>
            {hats.map((hat) => (
              <ProfileHat key={hat.id} src={hat.url} onClick={() => setPetHat(hat)} />
            ))}
          </RowContainer>
        ) : (
          <ProfileText>Visit the shop to buy some hats!</ProfileText>
        )}
        {petHat ? <PetHat src={petHat.url} onClick={() => setPetHat({})} /> : null}
        <PetImage src={petUrls[type]} />
        <RowContainer>
        <ProfileText>
            Pet: {name} the {type}
            <Link to='/pet'>
              <EditButton> Edit</EditButton>
              </Link>
          </ProfileText>
        </RowContainer>
      </UserContent>
    </UserBG>
  );
};

export default UserProfile;
