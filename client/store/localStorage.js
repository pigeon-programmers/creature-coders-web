const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';

export const _getLocalStorage = () => ({
  type: GET_LOCAL_STORAGE,
});

const initialState = {
  lsPoints: 0,
  lsCoins: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCAL_STORAGE:
      const newPoints = +localStorage.getItem('points');
      const newCoins = +localStorage.getItem('coins');
      return { ...state, lsPoints: newPoints, lsCoins: newCoins };

    default:
      return state;
  }
};
