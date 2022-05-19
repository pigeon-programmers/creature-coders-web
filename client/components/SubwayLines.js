import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  enable-background: new 0 0 290.88 726.2;
  fill: none;
  stroke: #39b54a;
  stroke-width: 7.4355;
  stroke-miterlimit: 10;
  width: 100vw;
  height: 80vh;
`;

const PathSt0 = styled.path`
  fill: none;
  stroke: #39b54a;
  stroke-width: 7.4355;
  stroke-miterlimit: 10;
`;

const LineSt0 = styled.line`
  fill: none;
  stroke: #39b54a;
  stroke-width: 7.4355;
  stroke-miterlimit: 10;
`;

const LineSt1 = styled.line`
  fill: none;
  stroke: #fcee21;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;

const PathSt1 = styled.path`
  fill: none;
  stroke: #fcee21;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;

const PathSt2 = styled.path`
  fill: none;
  stroke: #0000ff;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;

const PathSt3 = styled.path`
  fill: none;
  stroke: #ff0000;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;

const LineSt3 = styled.line`
  fill: none;
  stroke: #ff0000;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;

const CircleSt4 = styled.circle`
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 2;
  stroke-miterlimit: 10;
`;

const LineSt4 = styled.line`
  fill: none;
  stroke: #f7931e;
  stroke-width: 8;
  stroke-miterlimit: 10;
`;

const SubwayLines = () => {
  return (
    <Svg
    // version="1.1"
    // id="Layer_1"
    // xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    // x="0px"
    // y="0px"
    // viewBox="0 0 290.88 726.29"
    // xml:space="preserve"
    >
      <PathSt0
        className="st0"
        d="M249.75,726.29v-57.42c0-9.73-4.4-18.94-11.97-25.05l-37.62-30.39c-7.57-6.11-11.97-15.32-11.97-25.05v-35.13"
      />
      <LineSt1 className="st1" x1="66.42" y1="209.43" x2="2.84" y2="145.38" />
      <PathSt1
        className="st1"
        d="M189.49,543.68V404.11c0-9.11-3.62-17.85-10.06-24.29L76.49,276.88c-6.44-6.44-10.06-15.18-10.06-24.29v-43.16"
      />
      <PathSt2
        className="st2"
        d="M2.84,409.21h24.65c8.55,0,16.74,3.4,22.79,9.44l133.02,133.02h105.97"
      />
      <LineSt3 className="st3" x1="241.69" y1="88.38" x2="241.69" y2="0" />
      <PathSt3
        className="st3"
        d="M66.42,209.43h150.84c13.49,0,24.43-10.94,24.43-24.43V88.38"
      />
      <LineSt3 className="st3" x1="2.84" y1="209.43" x2="66.42" y2="209.43" />
      <CircleSt4 className="st4" cx="66.42" cy="209.43" r="9.16" />
      <LineSt4 className="st5" x1="289.26" y1="89.47" x2="2.84" y2="89.47" />
      <CircleSt4 className="st4" cx="240.05" cy="88.68" r="9.16" />
      <LineSt0
        className="st0"
        x1="187.64"
        y1="552.04"
        x2="289.26"
        y2="451.43"
      />
      <CircleSt4 className="st4" cx="187.64" cy="552.04" r="9.16" />
      <CircleSt4 className="st4" cx="189.59" cy="448.68" r="9.16" />
      <CircleSt4 className="st4" cx="128.31" cy="326.75" r="9.16" />
      <CircleSt4 className="st4" cx="206.05" cy="617.59" r="9.16" />
      <CircleSt4 className="st4" cx="249.4" cy="680.07" r="9.16" />
    </Svg>
  );
};

export default SubwayLines;
