import React from 'react';
import styled from 'styled-components';

//THIS COMPONENT IS HERE FOR WORKING WITH MOVING PIECE ALONG SVG LINES
//FOR NOW, SUBWAY LINES ARE IN THE BACKGROUND IMAGE
//Levels in "Map" must also be moved in this component is to be used
//BACKGROUND IMG WITHOUT SUBWAY LINES: https://creature-coders.s3.amazonaws.com/map-bg.jpg

const Svg = styled.svg`
  enable-background: new 0 0 290.88 726.2;
  width: 35vw;
  height: 63vh;
  transform: scale(1.47);
  position: fixed;
`;

//General styling for all paths and lines
const StyledPath = styled.path`
  fill: none;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;
const StyledLine = styled.line`
  fill: none;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;

//Specific styling for color
const GreenPath = styled(StyledPath)`
  stroke: #39b54a;
  stroke-width: 7.4355;
`;

const GreenLine = styled(StyledLine)`
  stroke: #39b54a;
  stroke-width: 7.4355;
`;

const YellowLine = styled(StyledLine)`
  stroke: #fcee21;
`;

const YellowPath = styled(StyledPath)`
  stroke: #fcee21;
`;

const BluePath = styled(StyledPath)`
  stroke: #0000ff;
`;

const RedPath = styled(StyledPath)`
  stroke: #ff0000;
`;

const RedLine = styled(StyledLine)`
  stroke: #ff0000;
`;

const OrangeLine = styled(StyledLine)`
  stroke: #f7931e;
`;

const WhiteCircle = styled.circle`
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 2;
  stroke-miterlimit: 10;
`;

const SubwayLines = () => {
  return (
    <Svg>
      <GreenPath d="M249.75,726.29v-57.42c0-9.73-4.4-18.94-11.97-25.05l-37.62-30.39c-7.57-6.11-11.97-15.32-11.97-25.05v-35.13" />
      <YellowLine x1="66.42" y1="209.43" x2="2.84" y2="145.38" />
      <YellowPath d="M189.49,543.68V404.11c0-9.11-3.62-17.85-10.06-24.29L76.49,276.88c-6.44-6.44-10.06-15.18-10.06-24.29v-43.16" />
      <BluePath d="M2.84,409.21h24.65c8.55,0,16.74,3.4,22.79,9.44l133.02,133.02h105.97" />
      <RedLine x1="241.69" y1="88.38" x2="241.69" y2="0" />
      <RedPath d="M66.42,209.43h150.84c13.49,0,24.43-10.94,24.43-24.43V88.38" />
      <RedLine x1="2.84" y1="209.43" x2="66.42" y2="209.43" />
      <WhiteCircle cx="66.42" cy="209.43" r="9.16" />
      <OrangeLine x1="289.26" y1="89.47" x2="2.84" y2="89.47" />
      <WhiteCircle cx="240.05" cy="88.68" r="9.16" />
      <GreenLine x1="187.64" y1="552.04" x2="289.26" y2="451.43" />
      <WhiteCircle cx="187.64" cy="552.04" r="9.16" />
      <WhiteCircle cx="189.59" cy="448.68" r="9.16" />
      <WhiteCircle cx="128.31" cy="326.75" r="9.16" />
      <WhiteCircle cx="206.05" cy="617.59" r="9.16" />
      <WhiteCircle cx="249.4" cy="680.07" r="9.16" />
    </Svg>
  );
};

export default SubwayLines;
