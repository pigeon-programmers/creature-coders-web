import React from 'react';
import { Content, HomeSubTitle, HomeTitle, palette } from './style';
import styled, { keyframes } from 'styled-components';

// const Title = styled(HomeTitle)`
//   font-family: 'Andale Mono', monospace;
//   color: ${palette.mdGray};
// `;
const Title = styled(HomeSubTitle)`
  color: ${palette.mdGray};
`;
const spin = keyframes`
  from {transform: rotate(0);}
  to {transform: rotate(1turn);}
`;
const PidgeHead = styled.img`
  animation: ${spin} 1s linear infinite;
`;
const LoadingContent = styled(Content)`
  justify-content: center;
`;

const Loading = () => {
  return (
    <LoadingContent>
      <Title>loading...</Title>
      <PidgeHead src="pidgehead.png" />
    </LoadingContent>
  );
};

export default Loading;
