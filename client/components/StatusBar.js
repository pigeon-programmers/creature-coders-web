import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { Nav, NavIconContainer, NavIcon, Status, StatusIcon } from './style';

const StatusBar = ({ handleClick, isLoggedIn }) => (
  <Status>
    {isLoggedIn ? (
      <>
        {/* The StatusBar will show these links after you log in */}
        <NavIconContainer>
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPidgeCoin.svg" />
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconStreak.svg" />
          <StatusIcon src="https://creature-coders.s3.amazonaws.com/iconPoints.svg" />
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
