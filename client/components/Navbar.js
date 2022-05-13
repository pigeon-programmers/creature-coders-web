import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { Nav } from './style';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <Nav >
      {isLoggedIn ? (
        <>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/map">Game Map</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </>
      ) : (
        <>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/map">Game Map</Link>
          <p>test</p>
        </>
      )}
    {/* <hr /> */}
  </Nav>
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

export default connect(mapState, mapDispatch)(Navbar);
