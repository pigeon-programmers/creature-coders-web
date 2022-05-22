import axios from 'axios';

const GET_SINGLE_USER = 'GET_SINGLE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GET_USER_HATS = 'GET_USER_HATS';
const UPDATE_USER_HATS = 'UPDATE_USER_HATS';

const _getSingleUser = (data) => ({
  type: GET_SINGLE_USER,
  data,
});

const _updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

const _getUserHats = (hats) => ({
  type: GET_USER_HATS,
  hats,
});

const _updateUserHats = (hats) => ({
  type: UPDATE_USER_HATS,
  hats,
});

export const getSingleUser = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}`);
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
  return async (dispatch, getState) => {
    try {
      const {
        auth: { token },
      } = getState();
      const user = { points, currentLevel, currentGame, pidgeCoin };
      const { data } = await axios.put(`/api/users/${id}`, user, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_updateUser(data));
    } catch (err) {
      console.log('💩 There was an error updating the user!', err);
    }
  };
};

export const getUserHats = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/users/${userId}/hats`);
      dispatch(_getUserHats(data));
    } catch (err) {
      console.log('🎩 There was an error getting the hats!', err);
    }
  };
};

export const buyHat = (hat, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${userId}/hats`, hat);
      dispatch(_updateUser(data.user));
      dispatch(_updateUserHats(data.hats));
    } catch (err) {
      console.log('🎩 There was an error buying the hat!', err);
    }
  };
};

export const updateUserStreak = (userId, logIn = { logIn: false }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${userId}/streak`, logIn);
      dispatch(_updateUser(data));
    } catch (err) {
      console.log('🐦 There was an error updating streak!', err);
    }
  };
};

export default function (state = { hats: [] }, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return { ...state, ...action.data };
    case UPDATE_USER:
      return { ...state, ...action.user };
    case GET_USER_HATS:
      return { ...state, hats: action.hats };
    case UPDATE_USER_HATS:
      return { ...state, hats: action.hats };
    default:
      return state;
  }
}
