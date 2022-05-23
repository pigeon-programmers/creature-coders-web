import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { palette } from './style';
import styled from 'styled-components';
import { _getLocalStorage } from '../store/localStorage';

const Status = styled.nav`
  width: 100vw;
  height: 5vh;
  background: ${palette.mdGray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
`;
const NavIconContainer = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusIconContainer = styled.div`
  width: 13vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StatusIcon = styled.img`
  height: 3vh;
`;

const StatusText = styled.p`
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
  font-size: 3.5vh;
`;

const StatusBar = () => {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const { points, pidgeCoin, streak } = useSelector((state) => state.user);
  const { lsCoins, lsPoints } = useSelector((state) => state.localStorage);
  // const [lsCoins, setLsCoins] = useState(0);
  // const [lsPoints, setLsPoints] = useState(0);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     dispatch(_getLocalStorage());
  //   }
  // }, [lsCoins, lsPoints]);

  return (
    <Status>
      {isLoggedIn ? (
        <>
          {/* The StatusBar will show this after you log in */}
          <NavIconContainer>
            <StatusIconContainer>
              <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPidgeCoin.svg" />
              <StatusText>{pidgeCoin}</StatusText>
            </StatusIconContainer>
            <StatusIconContainer>
              <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconStreak.svg" />
              <StatusText>{streak}</StatusText>
            </StatusIconContainer>
            <StatusIconContainer>
              <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPoints.svg" />
              <StatusText>{points}</StatusText>
            </StatusIconContainer>
          </NavIconContainer>
        </>
      ) : (
        <>
          {/* The StatusBar will show this before you log in */}
          <NavIconContainer>
            <StatusIconContainer>
              <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPidgeCoin.svg" />
              <StatusText>{lsCoins}</StatusText>
            </StatusIconContainer>
            <StatusIconContainer>
              <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPoints.svg" />
              <StatusText>{lsPoints}</StatusText>
            </StatusIconContainer>
          </NavIconContainer>
        </>
      )}
    </Status>
  );
};

export default StatusBar;
