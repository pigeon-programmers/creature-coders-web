import axios from 'axios';
import history from '../history'

const GET_PET = 'GET_PET';
const SAVE_PET = 'SAVE_PET';
const UPDATE_PET = 'UPDATE_PET'

const _getPet = (pet) => {
  return {
    type: GET_PET,
    pet,
  }
};

const _savePet = (data) => {
  return {
    type: SAVE_PET,
    data,
  };
};

const _updatePet = (data) => {
  return {
    type: UPDATE_PET,
    data
  }
}

export const getPet = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/pet/${userId}`);
      console.log('pet data', data)
      dispatch(_getPet(data));
    } catch (err) {
      console.log('Unable to get the pet info!', err)
    }
  }
}

export const savePet = (userId, pet) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/pet/${userId}`, pet);
      dispatch(_savePet(data));
      history.push('/profile');
    } catch (err) {
      console.log('😭 unable to save pet info', err);
    }
  };
};

export const updatePet = (userId, pet) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/pet/${userId}`, pet);
      dispatch(_updatePet(data));
      history.push('/profile');
    } catch (err) {
      console.log('😭 unable to edit pet info', err);
    }
  };
}

export default function (state = {}, action) {
  switch (action.type) {
    case GET_PET:
      return action.pet;
    case SAVE_PET:
      return action.data;
    case UPDATE_PET:
      return action.data
    default:
      return state;
  }
}
