import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleUserData } from '../store/user';
import {
  Status,
  NavIconContainer,
  StatusIconContainer,
  StatusIcon,
  StatusText,
} from './style';

const StatusBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => !!state.auth.id)
  // const user = useSelector(state => state.user)

  // useEffect(() => {
  //   dispatch(getSingleUserData(2))
  // }, [])


  return (

  <Status>
    {isLoggedIn ? (
      <>
        {/* The StatusBar will show this after you log in */}
        <NavIconContainer>
          <StatusIconContainer>
            <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPidgeCoin.svg" />
            <StatusText>37</StatusText>
          </StatusIconContainer>
          <StatusIconContainer>
            <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconStreak.svg" />
            <StatusText>37</StatusText>
          </StatusIconContainer>
          <StatusIconContainer>
            <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPoints.svg" />
            <StatusText>37</StatusText>
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
