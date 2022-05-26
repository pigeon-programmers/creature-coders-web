import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../store/allUsers';
import { Main, HomeTitle, HomeSubTitle, Content, palette } from './style';
import styled from 'styled-components';
import { _updateActivePage } from '../store/user';

const LeaderBG = styled(Main)`
  background-color: ${palette.yellow};
`;
const LeaderContent = styled(Content)`
  background-color: rgba(255, 255, 255, 0.6);
  height: 70%;
  width: 80vw;
  text-align: center;
  @media (min-width: 1025px) {
    width: 1025px;
  }
  @media (max-width: 500px) {
    width: 100vw;
  }
`;
const LeaderText = styled(HomeSubTitle)`
  font-size: 3vh;
  color: black;
  margin: 0.5em;
`;
const LeaderSubText = styled(HomeSubTitle)`
  font-size: 3vh;
  margin: 2vh;
  color: black;
`;
const Trophy = styled.img`
  height: 5vh;
  width: 5vh;
`;
const LeaderContent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
`;
const Leader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const LeaderBoard = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    dispatch(_updateActivePage("leaderboard"))
  }, [])

  return (
    <LeaderBG>
      <LeaderContent>
        <HomeTitle>Leaderboard</HomeTitle>
        <LeaderContent2>
          {allUsers.map((user, index) => {
            if (index === 0) {
              return (
                <Leader key={user.id}>
                  <Trophy src="https://creature-coders.s3.amazonaws.com/leaderboard-trophies-01.svg" />
                  <LeaderSubText>
                    {user.username.toUpperCase()}: {user.points} points
                  </LeaderSubText>
                </Leader>
              );
            }
            if (index === 1) {
              return (
                <Leader key={user.id}>
                  <Trophy src="https://creature-coders.s3.amazonaws.com/leaderboard-trophies-02.svg" />
                  <LeaderSubText>
                    {user.username.toUpperCase()}: {user.points} points
                  </LeaderSubText>
                </Leader>
              );
            }
            if (index === 2) {
              return (
                <Leader key={user.id}>
                  <Trophy src="https://creature-coders.s3.amazonaws.com/leaderboard-trophies-03.svg" />
                  <LeaderSubText>
                    {user.username.toUpperCase()}: {user.points} points
                  </LeaderSubText>
                </Leader>
              );
            }
            if (index === 3) {
              return (
                <Leader key={user.id}>
                  <Trophy src="https://creature-coders.s3.amazonaws.com/leaderboard-trophies-05.svg" />
                  <LeaderSubText>
                    {user.username.toUpperCase()}: {user.points} points
                  </LeaderSubText>
                </Leader>
              );
            }
            if (index === 4) {
              return (
                <Leader key={user.id}>
                  <Trophy src="https://creature-coders.s3.amazonaws.com/leaderboard-trophies-04.svg" />
                  <LeaderSubText>
                    {user.username.toUpperCase()}: {user.points} points
                  </LeaderSubText>
                </Leader>
              );
            }
          })}
        </LeaderContent2>
      </LeaderContent>
    </LeaderBG>
  );
};

export default LeaderBoard;
