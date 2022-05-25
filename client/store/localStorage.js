const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';

const _getLocalStorage = (lsGame, lsLevel, lsPoints, lsCoins) => ({
  type: GET_LOCAL_STORAGE,
  lsGame,
  lsLevel,
  lsPoints,
  lsCoins,
});

export const getLocalStorage = () => {
  return (dispatch) => {
    try {
      const lsGame = +localStorage.getItem('game');
      const lsLevel = +localStorage.getItem('level');
      const lsPoints = +localStorage.getItem('points');
      const lsCoins = +localStorage.getItem('coins');
      dispatch(_getLocalStorage(lsGame, lsLevel, lsPoints, lsCoins));
    } catch (err) {
      console.log('🐭 unable to get local storage', err);
    }
  };
};

const initialState = {
  lsPoints: 0,
  lsCoins: 0,
  lsLevel: 0,
  lsGame: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCAL_STORAGE:
      const { lsGame, lsLevel, lsPoints, lsCoins } = action;
      return { ...state, lsPoints, lsCoins, lsLevel, lsGame };
    default:
      return state;
  }
};
