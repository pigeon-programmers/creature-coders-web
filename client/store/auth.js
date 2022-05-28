import axios from 'axios';
import history from '../history';

const TOKEN = 'token';

/**
 * ACTION TYPES
 */
const GET_LOADING = 'IS_LOADING';
const SET_AUTH = 'SET_AUTH';

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const getLoading = () => ({
  type: GET_LOADING,
});

/**
 * THUNK CREATORS
 */

export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token && token !== 'undefined') {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth({ ...res.data, token }));
  }
  dispatch(getLoading());
};

export const authenticate = (email, password, method) => async (dispatch) => {
  try {
    const res = await axios.post(`/auth/login`, {
      email: email.toLowerCase(),
      password,
    });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
    method === 'login' ? history.push('/map') : history.push('/pet');
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push('/');
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = { isLoading: true }, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...action.auth, isLoading: false };
    case GET_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
