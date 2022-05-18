import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Main, Button, HomeTitle, HomeSubTitle, Content } from "./style";
import styled from "styled-components";
import { getPet } from '../store/pet';

const UserBG = styled(Main)`
  background-color: #ed1697;
`;

const UserContent = styled(Content)`
background-color: rgba(126, 126, 126, 0.6);
height: 70%;
width: 80%;
`

const ProfileText = styled(HomeSubTitle)`
  font-size: 3vh;
  z-index: 50;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentLevel, currentGame, username, badges, id } = useSelector(
    (state) => state.user
  );
  const pet = useSelector((state) => state.pet);

  useEffect(() => {
      if (id) dispatch(getPet(id));
  }, [id])
  console.log("PET INFO!", pet, id)
  // const isLoggedIn = useSelector((state) => !!state.auth.id);

  return (
    <UserBG>
      <UserContent>
        <HomeTitle>{username}</HomeTitle>
        <ProfileText>Pet:</ProfileText>
        <ProfileText>Current Level: {currentLevel}</ProfileText>
        <ProfileText>Current Game: {currentGame}</ProfileText>
        <ProfileText>
          Badges:{" "}
          {badges
            ? badges.map((badge) => {
                <ProfileText key={badge.id}>{badge.name}</ProfileText>;
              })
            : null}
        </ProfileText>
      </UserContent>
    </UserBG>
  );
};

export default UserProfile;
