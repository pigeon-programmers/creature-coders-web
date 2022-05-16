import axios from 'axios';

const GET_SINGLE_USER_DATA = 'GET_SINGLE_USER_DATA';

const _getSingleUserData = (data) => {
  return {
    type: GET_SINGLE_USER_DATA,
    data,
  };
};

export const getSingleUserData = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = axios.get(`api/users/${userId}`);
      dispatch(_getSingleUserData(data));
    } catch (err) {
      console.log("😭 unable to get user's data", err);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_USER_DATA:
      return action.data;
    default:
      return state;
  }
}
