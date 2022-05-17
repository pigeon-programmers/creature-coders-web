import React from 'react';
import { Door, DoorsContainer, Main, SlideInLeftAnim, SlideInRightAnim } from '../style';
// import doorSvg from './doorSvg.svg'

const Doors = () => {
  return (
    <Main>
      <DoorsContainer>
        <SlideInLeftAnim>
          <Door src="https://creature-coders.s3.amazonaws.com/door.jpg" />
        </SlideInLeftAnim>
        <SlideInRightAnim>
          <Door src="https://creature-coders.s3.amazonaws.com/door.jpg" />
        </SlideInRightAnim>
      </DoorsContainer>
    </Main>
  );
};

export default Doors;
