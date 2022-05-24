import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavPopUp from './NavPopUp';
import styled from 'styled-components';
import { palette, NavIcon } from './style';

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
`;

const Navbar = () => {
  const [pop, setPop] = useState(false);
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const activePage = useSelector((state) => state.user.activePage);

  return (
    <Nav>
      {isLoggedIn ? (
        <>
          {/* The navbar will show these links after you log in */}
          <NavIconContainer>
            <Link to="/map">
              {activePage === 'map' ? (
                <NavIcon
                  src={
                    'https://creature-coders.s3.amazonaws.com/iconMapColor.svg'
                  }
                  alt="level map"
                />
              ) : (
                <NavIcon
                  src={'https://creature-coders.s3.amazonaws.com/iconMap.svg'}
                  alt="level map"
                />
              )}
            </Link>
            <Link to="/profile">
              {activePage === 'profile' ? (
                <NavIcon
                  src={
                    'https://creature-coders.s3.amazonaws.com/IconProfileColor.svg'
                  }
                  alt="profile"
                />
              ) : (
                <NavIcon
                  src={'https://creature-coders.s3.amazonaws.com/iconPet.svg'}
                  alt="profile"
                />
              )}
            </Link>
            <Link to="/leaderboard">
              {activePage === 'leaderboard' ? (
                <NavIcon
                  src={
                    'https://creature-coders.s3.amazonaws.com/IconLeaderboardColor.svg'
                  }
                  alt="leaderboard"
                />
              ) : (
                <NavIcon
                  src={
                    'https://creature-coders.s3.amazonaws.com/iconLeaderboard.svg'
                  }
                  alt="leaderboard"
                />
              )}
            </Link>
            <Link to="/shop">
              {activePage === 'shop' ? (
                <NavIcon
                  src={
                    'https://creature-coders.s3.amazonaws.com/IconShopColor.svg'
                  }
                  alt="shop"
                />
              ) : (
                <NavIcon
                  src={'https://creature-coders.s3.amazonaws.com/iconShop.svg'}
                  alt="shop"
                />
              )}
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
              {activePage === 'map' ? (
                <NavIcon
                  src={
                    'https://creature-coders.s3.amazonaws.com/iconMapColor.svg'
                  }
                  alt="level map"
                />
              ) : (
                <NavIcon
                  src={'https://creature-coders.s3.amazonaws.com/iconMap.svg'}
                  alt="level map"
                />
              )}
            </Link>
            <Link to="/signup">
              {activePage === 'signup' ? (
                <NavIcon
                  src={
                    'https://creature-coders.s3.amazonaws.com/IconSignUpColor.svg'
                  }
                  alt="sign up"
                />
              ) : (
                <NavIcon
                  src="https://creature-coders.s3.amazonaws.com/iconSignUp.svg"
                  alt="sign up"
                />
              )}
            </Link>
            <Link to="/login">
              {activePage === 'login' ? (
                <NavIcon
                  src="https://creature-coders.s3.amazonaws.com/IconSignInColor.svg"
                  alt="sign in"
                />
              ) : (
                <NavIcon
                  src="https://creature-coders.s3.amazonaws.com/iconSignIn.svg"
                  alt="sign in"
                />
              )}
            </Link>
          </NavIconContainer>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
