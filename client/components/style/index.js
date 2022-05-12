import styled from 'styled-components';

const pallete = {
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
}

export const Theme = styled.div`

`
export const BottomNav = styled.div`

`
export const Game = styled.div`

`

export const Button = styled.button`
display: inline-block;
  color: ${pallete.white};
  background: ${pallete.dkGray};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  display: block;
`;
