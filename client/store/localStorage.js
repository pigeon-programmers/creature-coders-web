const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';

export const _getLocalStorage = () => ({
  type: GET_LOCAL_STORAGE,
});

const initialState = {
  lsPoints: 0,
  lsCoins: 0,
  lsLevel: 0,
  lsGame: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCAL_STORAGE:
      const lsPoints = +localStorage.getItem('points');
      const lsCoins = +localStorage.getItem('coins');
      const lsLevel = +localStorage.getItem('level');
      const lsGame = +localStorage.getItem('game');
      return { ...state, lsPoints, lsCoins, lsLevel, lsGame };
    default:
      return state;
  }
};
