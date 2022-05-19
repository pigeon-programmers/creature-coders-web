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
  const { togglePopUp, open, children, title} = props;

  return (
    <div>
      {open && (
        <div>
          <ModalScreen>
            <PopMain>
              <PopHeader>
                <PopTitle>{title}</PopTitle>
                <PopCloseButton onClick={togglePopUp}>&times;</PopCloseButton>
              </PopHeader>
              <PopBody>{children}</PopBody>
            </PopMain>
            <PopOverlay onClick={togglePopUp}></PopOverlay>
          </ModalScreen>
        </div>
      )}
    </div>
  );
};

export default PopUp;
