import axios from 'axios';
import history from '../history';

const TOKEN = 'token';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';
const GET_LOADING = 'IS_LOADING';

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
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    dispatch(getLoading());
    return dispatch(setAuth({ ...res.data, token }));
  }
};

export const authenticate =
  (username, email, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        username,
        email,
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
      return { ...state, ...action.auth };
    case GET_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
