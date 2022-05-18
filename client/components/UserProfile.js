import React from "react";
import { useSelector } from "react-redux";
import { Main, Button, HomeTitle, HomeSubTitle, Content } from "./style";
import styled from "styled-components";

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
  const { currentLevel, currentGame, username, badges, id } = useSelector(
    (state) => state.user
  );
  // const user = useSelector((state) => state.user);

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
