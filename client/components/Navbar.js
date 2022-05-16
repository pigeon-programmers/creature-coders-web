import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Nav, NavIconContainer, NavIcon } from "./style";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <Nav>
    {isLoggedIn ? (
      <>
        {/* The navbar will show these links after you log in */}
        <NavIconContainer>
          <Link to="/map">
            <NavIcon
              src="https://creature-coders.s3.amazonaws.com/iconMap.svg"
              alt="level map"
            />
          </Link>
          <NavIcon
            src="https://creature-coders.s3.amazonaws.com/iconPet.svg"
            alt="pet settings"
          />
          <NavIcon
            src="https://creature-coders.s3.amazonaws.com/iconLeaderboard.svg"
            alt="leaderboard"
          />
          <NavIcon
            src="https://creature-coders.s3.amazonaws.com/iconShop.svg"
            alt="shop"
          />
          <Link to="/settings">
            <NavIcon
              src="https://creature-coders.s3.amazonaws.com/iconSettings.svg"
              alt="user settings"
            />
          </Link>
        </NavIconContainer>
      </>
    ) : (
      <>
        {/* The navbar will show these links before you log in */}
        <NavIconContainer>
          <Link to="/map">
            <NavIcon
              src="https://creature-coders.s3.amazonaws.com/iconMap.svg"
              alt="level map"
            />
          </Link>
          <Link to="/signup">
            <NavIcon
              src="https://creature-coders.s3.amazonaws.com/iconSignUp.svg"
              alt="sign up"
            />
          </Link>
          <Link to="/login">
            <NavIcon
              src="https://creature-coders.s3.amazonaws.com/iconSignIn.svg"
              alt="sign in"
            />
          </Link>
        </NavIconContainer>
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
