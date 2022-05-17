import React from 'react';
import {
  ModalScreen,
  PopMain,
  PopHeader,
  PopCloseButton,
  PopTitle,
  PopBody,
  PopOverlay,
} from './style';

const PopUp = (props) => {
  const { togglePopUp, open, children } = props;

  return (
    <div>
      {open && (
        <div>
          <ModalScreen>
            <PopMain>
              <PopHeader>
                <PopTitle>{children[0]}</PopTitle>
                <PopCloseButton onClick={togglePopUp}>&times;</PopCloseButton>
              </PopHeader>
              <PopBody>{children[1]}</PopBody>
            </PopMain>
            <PopOverlay onClick={togglePopUp}></PopOverlay>
          </ModalScreen>
        </div>
      )}
    </div>
  );
};

export default PopUp;
