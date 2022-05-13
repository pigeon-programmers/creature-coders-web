import styled from 'styled-components';

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  dkGray: '#3D3D3D',
  mdGray: '#7E7E7E',
  red: '#E91717',
  orange: '#F08435',
  yellow: '#FFE600',
  green: '#4EDE1C',
  blue: '#2828FF',
  pink: '#ED1697',
};

export const Main = styled.div`
  position: fixed;
  background: ${palette.mdGray};
  background-image: url('https://creature-coders.s3.amazonaws.com/bg.svg');
  background-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Nav = styled.div`
  width: 100vw;
  height: 70px;
  background: ${palette.dkGray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  font-family: 'Kirang Haerang', sans-serif;
`;

export const NavIconContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavIcon = styled.img`
  height: 50px;
`;

export const Game = styled.div``;

export const Button = styled.button`
  color: ${palette.white};
  background: ${palette.dkGray};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  display: block;
`;

//these were made for hannah's matching game

export const GameContainer = styled.div`
  height: 30vh;
  width: 90vw;
`;

export const MatchButton = styled.button`
  height: 3vh;
  width: 6vw;
  margin: 10px;
  border: 1px solid black;
  text-align: center;
`;
