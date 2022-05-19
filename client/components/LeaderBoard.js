import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../store/allUsers";
import { Main, Button, HomeTitle, HomeSubTitle, Content } from "./style";
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

const LeaderBoard = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.allUsers);
    console.log("getting all users!", allUsers)

    useEffect(() => {
       dispatch(fetchAllUsers());
      }, []);

    const pointsArray = allUsers.map((user) => user.points);
    console.log(pointsArray.sort((a, b) => a - b));

    return (
        <LeaderBG>
          <LeaderContent>
            <LeaderText>Creature Coders Leader Board</LeaderText> 
            {allUsers.map((user) => {
                return <p key={user.id}>{user.points}</p>
            })}
          </LeaderContent>
        </LeaderBG>
    )
}

export default LeaderBoard;

