import styled from 'styled-components';
import bg from './bg.png';

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
  background: ${palette.mdGray};
  background-image: url(${bg});
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
  background: ${palette.dkGray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  font-family: 'Kirang Haerang', sans-serif;
  & {
    font-size: xx-large;
    color: ${palette.white};
  }
  &:visited {
    font-size: small;
    color: ${palette.green};
  }
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
