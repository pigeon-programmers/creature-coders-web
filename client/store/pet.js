import axios from 'axios';

const SET_PET = 'SET_PET';

const _setPet = (data) => {
  return {
    type: SET_PET,
    data,
  };
};

export const setPet = (userId, pet) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`api/pet/${userId}`, pet);
      dispatch(_setPet(data));
    } catch (err) {
      console.log("😭 unable to save pet info", err);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case SET_PET:
      return action.data;
    default:
      return state;
  }
}
