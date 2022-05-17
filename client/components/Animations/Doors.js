import React from 'react';
import { Door, DoorsContainer, Main, SlideInLeftAnim, SlideInRightAnim } from '../style';

const Doors = () => {
  return (
      <DoorsContainer>
        <SlideInLeftAnim>
          <Door src="https://creature-coders.s3.amazonaws.com/door.jpg" />
        </SlideInLeftAnim>
        <SlideInRightAnim>
          <Door src="https://creature-coders.s3.amazonaws.com/door.jpg" />
        </SlideInRightAnim>
      </DoorsContainer>
  );
};

export default Doors;
