import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../store';
import {
  Status,
  NavIconContainer,
  StatusIconContainer,
  StatusIcon,
  StatusText,
} from './style';

const StatusBar = ({ handleClick, isLoggedIn }) => (
  <Status>
    {isLoggedIn ? (
      <>
        {/* The StatusBar will show these links after you log in */}
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
        {/* The StatusBar will show these links before you log in */}
        <NavIconContainer>
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPidgeCoin.svg" />
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconStreak.svg" />
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPoints.svg" />
        </NavIconContainer>
      </>
    )}
    {/* <hr /> */}
  </Status>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(StatusBar);
