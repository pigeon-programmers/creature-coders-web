import React from 'react';
import PopUp from './PopUp';

const TryAgain = (props) => {
  const { tryAgain, setTryAgain } = props;
  return (
    <PopUp open={tryAgain} title={'Oh no!'} togglePopUp={() => setTryAgain(!tryAgain)}>
      <div>
        <p>Hmmm...that doesn't look quite right. Let's try it again!</p>
        <p>
          Remember, the "Hint" button is there to help. Feel free to click on it
          for some extra information.
        </p>
      </div>
    </PopUp>
  );
};

export default TryAgain;
