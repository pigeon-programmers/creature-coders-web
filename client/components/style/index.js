import styled from 'styled-components';

export const palette = {
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
  height: 100vh;
  width: 100vw;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 20%;
  bottom: 0;
  height: 90vh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  font-family: 'Kirang Haerang', sans-serif;
  font-size: 8vh;
  color: ${palette.white};
  filter: drop-shadow(5px 5px 0 black);
`;

export const HomeSubTitle = styled.h5`
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
  font-size: 2vh;
  color: ${palette.white};
`;

//FORMS AND INPUTS
export const FormContainer = styled.form`
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${palette.mdGray};
`;

export const Label = styled.label`
  font-size: 1.5em;
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
`;

export const LabelP = styled.p`
  margin: 0;
`;

export const Input = styled.input`
  width: 50vw;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 3em;
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
  display: block;
  float: left;
  clear: left;
  margin: 0.5em;
`;
export const Select = styled.select`
  width: 50vw;
  margin: 1em;
  height: 2em;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 1.5em;
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
`;

//GAME COMPONENTS
export const GameContent = styled.div`
  width: 80vw;
  height: 25vh;
  background-color: ${palette.black};
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const GameContentNoBlock = styled.div`
  width: 80vw;
  height: 40vh;
  background-color: ${palette.black};
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const GameText = styled.p`
  color: ${palette.white};
  font-size: large;
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
  margin: 1em;
`;

//used for FILL IN THE BLANK GAMES
export const GameButton = styled.button`
  align-items: center;
  color: ${palette.black};
  background: ${palette.mdGray};
  font-size: 1em;
  margin: 5px;
  bottom: 100px;
  padding: 0.25em 1em;
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
  border-style: none;
  box-sizing: border-box;
`;

export const StyledWorkspace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 2em;
`;

//used for GENERAL buttons (run, sign-in, etc.)
export const Button = styled.button`
  align-items: center;
  color: ${palette.white};
  background: ${palette.dkGray};
  font-size: 2em;
  margin: 3%;
  padding: 0.25em 2em;
  font-family: 'Kirang Haerang', sans-serif;
  border-style: none;
  white-space: nowrap;
`;

export const VisualsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

//ARTWORK/ASSET STYLING
export const Bagel = styled.p`
  background-image: url('https://creature-coders.s3.amazonaws.com/bagel.svg');
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  margin: 2px;
`;

export const Computer = styled.img`
  height: 20vh;
  margin: 1em;
`;

export const Pigeon = styled.p`
  background-image: url('https://creature-coders.s3.amazonaws.com/pigeon.svg');
  background-repeat: no-repeat;
  height: 500px;
  width: 350px;
  margin-top: 1.5em;
`;

//POPUPS AND HINTS STYLING
export const ModalScreen = styled.div`
  position: fixed;
  opacity: 1;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 200ms ease-in-out;
`;

export const PopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PopMain = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 30;
  transform: translate(-50%, -50%);
  transition: 200ms ease-in-out;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  width: 500px;
  max-width: 80%;
`;

export const PopHeader = styled.div`
font-size: 1.25rem;
font-weight: bold;
padding: 10px 15px;
justify-content: space-between;
display: flex;
align-items: center;
}
`;

//Takes styling from Button and changes the size for popups
export const PopButton = styled(Button)`
  padding: 0.25vh 3vw 0.25vh 3vw;
  bottom: 2vh;
  font-size: 1.5em;
  margin: 1vh 1vw 0.25vh 1vw;
`;

export const PopCloseButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const PopTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const PopBody = styled.div`
  padding: 10px 15px;
  align-items: center;
  display: flex;
  font-size: 1.25rem;
`;

export const PopOverlay = styled.div`
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 200ms ease-in-out;
`;
