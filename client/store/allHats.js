import axios from 'axios';

const GET_ALL_HATS = 'GET_ALL_HATS';

const _getAllHats = (hats) => ({
  type: GET_ALL_HATS,
  hats,
});

export const getAllHats = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/hats`);
      dispatch(_getAllHats(data));
    } catch (err) {
      console.log('😭 unable to get hats', err);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_HATS:
      return action.hats;
    default:
      return state;
  }
}
