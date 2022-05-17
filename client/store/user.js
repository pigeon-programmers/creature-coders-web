import axios from 'axios';

const GET_SINGLE_USER = 'GET_SINGLE_USER';

const _getSingleUser = (data) => {
  return {
    type: GET_SINGLE_USER,
    data,
  };
};

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

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.data;
    default:
      return state;
  }
}
