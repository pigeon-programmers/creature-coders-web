import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Main, Button, HomeTitle, HomeSubTitle, Content } from "./style";
import styled from "styled-components";
import { getPet } from "../store/pet";

const UserBG = styled(Main)`
  background-color: #ed1697;
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
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentLevel, currentGame, username, badges, id } = useSelector(
(state) => state.user);
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
        {/* <ProfileText>
          Badges:{" "}
        </ProfileText>
         {badges && badges.length
            ? badges.map((badge) => <ProfileText key={badge.id}>{badge.name}</ProfileText>)
            : null} */}
      </UserContent>
    </UserBG>
  );
};

export default UserProfile;
