import React from 'react';
import { Link } from 'react-router-dom';
import { NavIcon, PopOverlay, palette } from './style';
import styled from 'styled-components';

const Pop = styled.div`
  position: absolute;
  left: 87vw;
  bottom: 3vh;
  height: 10vh;
  width: 10vw;
  z-index: 30;
  transform: translate(-50%, -50%);
  transition: 200ms ease-in-out;
  background-color: ${palette.mdGray};
  display: flex;
  flex-direction:  column;
  justify-content: space-evenly;
  align-items: center;
`;

 const NavPopOverlay = styled(PopOverlay)`
  background-color: rgba(0, 0, 0, 0.1);
`;

const NavPopUp = (props) => {
  const { togglePopUp, open } = props;

  return (
    <>
      {open && (
        <>
          <NavPopOverlay onClick={togglePopUp}>
          <Pop>
            <Link to="/settings">
              <NavIcon
                src="https://creature-coders.s3.amazonaws.com/iconSettings.svg"
                alt="settings"
                />
                </Link>
              <NavIcon
                src="https://creature-coders.s3.amazonaws.com/iconHelp.svg"
                alt="help"
              />
          </Pop>
          </NavPopOverlay>
        </>
      )}
    </>
  );
};

export default NavPopUp;
