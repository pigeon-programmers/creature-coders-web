import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavPopUp from "./NavPopUp";
import styled from "styled-components";
import { palette, NavIcon } from "./style";

const Nav = styled.nav`
  width: 100vw;
  height: 7vh;
  background: ${palette.mdGray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const NavIconContainer = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1025px) {
    width: 820px;
  }
`;

// const ToggleButtons = () => {
//   const [active, setActive] = useState()

// }

const Navbar = () => {
  const [pop, setPop] = useState(false);
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  return (
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
            <Link to="/profile">
              <NavIcon
                src="https://creature-coders.s3.amazonaws.com/iconPet.svg"
                alt="user profile"
              />
            </Link>
            <Link to="/leaderboard">
              <NavIcon
                src="https://creature-coders.s3.amazonaws.com/iconLeaderboard.svg"
                alt="leaderboard"
              />
            </Link>
            <Link to="/shop">
            <NavIcon
              src="https://creature-coders.s3.amazonaws.com/iconShop.svg"
              alt="shop"
            />
            </Link>

            <NavIcon
              onClick={() => setPop(true)}
              src="https://creature-coders.s3.amazonaws.com/iconMenu.svg"
              alt="more"
            />
            <NavPopUp open={pop} togglePopUp={() => setPop(false)} />
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
    </Nav>
  );
};

export default Navbar;
