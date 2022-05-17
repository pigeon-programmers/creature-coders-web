import axios from 'axios';

const GET_SINGLE_USER = 'GET_SINGLE_USER';
const UPDATE_USER = 'UPDATE_USER';

const _getSingleUser = (data) => {
  return {
    type: GET_SINGLE_USER,
    data,
  };
};

const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

export const getSingleUser = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/users/${userId}`);
      dispatch(_getSingleUser(data));
    } catch (err) {
      console.log("😭 unable to get user's data", err);
    }
  };
};

export const updateUserWon = (
  id,
  points,
  currentLevel,
  currentGame,
  pidgeCoin
) => {
  return async (dispatch) => {
    try {
      const user = { points, currentLevel, currentGame, pidgeCoin };
      const { data } = await axios.put(`/api/users/${id}`, user);
      dispatch(updateUser(data));
    } catch (err) {
      console.log('There was an error updating the user!', err);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.data;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
