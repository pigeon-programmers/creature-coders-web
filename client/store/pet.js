import axios from 'axios';

const SAVE_PET = 'SAVE_PET';

const _savePet = (data) => {
  return {
    type: SAVE_PET,
    data,
  };
};

export const savePet = (userId, pet) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/pet/${userId}`, pet);
      dispatch(_savePet(data));
    } catch (err) {
      console.log("😭 unable to save pet info", err);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_PET:
      return action.data;
    default:
      return state;
  }
}
