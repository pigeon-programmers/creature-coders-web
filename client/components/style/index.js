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
  background: ${palette.orange};
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
  background: ${palette.mdGray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
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

export const FormContainer = styled.div`
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${palette.mdGray};
`;

export const Label = styled.label`
  font-size: 2em;
  font-family: 'Roboto Mono', monospace;
`;

export const Input = styled.input`
  width: 50vw;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 2em 0;
`;

export const MapContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${palette.dkGray}
`;

export const GameContent = styled.div`
  width: 80vw;
  height: 300px;
  margin: 1em;
  background-color: ${palette.white};
`;

export const StyledWorkspace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 2em;
`;

export const Button = styled.button`
  align-items: center;
  color: ${palette.white};
  background: ${palette.dkGray};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 2em;
  font-family: 'Kirang Haerang', sans-serif;
  border-style: none;
  box-sizing: border-box;
`;
