import React from 'react';
import { useSelector } from 'react-redux';
import {
  Status,
  NavIconContainer,
  StatusIconContainer,
  StatusIcon,
  StatusText,
} from './style';

const StatusBar = () => {
  const isLoggedIn = useSelector(state => !!state.auth.id)
  const { points, pidgeCoin, streak } = useSelector(state => state.user)

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
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPidgeCoin.svg" />
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconStreak.svg" />
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPoints.svg" />
        </NavIconContainer>
      </>
    )}
  </Status>
)}

export default StatusBar;
