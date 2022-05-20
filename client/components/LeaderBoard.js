import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../store/allUsers";
import { Main, HomeSubTitle, Content } from "./style";
import styled from "styled-components";

const LeaderBG = styled(Main)`
  background-color: #FFE600;
`;

const LeaderContent = styled(Content)`
  background-color: rgba(255, 255, 255, 0.6);
  height: 70%;
  width: 80%;
`;

const LeaderText = styled(HomeSubTitle)`
  font-size: 3vh;
  color: black;
`;

const LeaderSubText = styled(HomeSubTitle)`
  font-size: 2vh;
  color: black;
`

const Trophy = styled.img`
  height: 2vh;
  width: 2vh;
`

const LeaderBoard = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.allUsers);
    
    useEffect(() => {
      dispatch(fetchAllUsers());
      }, []);
      
    return (
        <LeaderBG>
          <LeaderContent>
            <LeaderText>Creature Coders Leader Board</LeaderText> 
            {allUsers.map((user, index) => {
              if (index === 0) {
                return <LeaderSubText key={user.id}>{user.username.toUpperCase()} : {user.points} points</LeaderSubText>
              }
              if (index === 1) {
                return <LeaderSubText key={user.id}>{user.username.toUpperCase()} : {user.points} points</LeaderSubText>
              }
              if (index === 2) {
                return <LeaderSubText key={user.id}>{user.username.toUpperCase()} : {user.points} points</LeaderSubText>
              }
              if (index === 3) {
                return <LeaderSubText key={user.id}>{user.username.toUpperCase()} : {user.points} points</LeaderSubText>
              }
              if (index === 4) {
                return <LeaderSubText key={user.id}>{user.username.toUpperCase()} : {user.points} points</LeaderSubText>
              }
            })}
          </LeaderContent>
        </LeaderBG>
    )
};

export default LeaderBoard;
