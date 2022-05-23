import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import user from './user';
import pet from './pet';
import allHats from './allHats';
import allUsers from './allUsers';
import localStorage from './localStorage';

const reducer = combineReducers({
  auth,
  user,
  pet,
  allHats,
  allUsers,
  localStorage,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
