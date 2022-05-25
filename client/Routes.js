import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { me } from './store';
import { getSingleUser, updateUserStreak } from './store/user';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import Home from './components/Home';
import UserSettings from './components/UserSettings';
import UserProfile from './components/UserProfile';
import LeaderBoard from './components/LeaderBoard';
import Map from './components/Map';
import PetInfo from './components/PetInfo';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import Game00 from './components/Games/Level0/Game00';
import Game01 from './components/Games/Level0/Game01';
import Game10 from './components/Games/Level1/Game10';
import Game11 from './components/Games/Level1/Game11';
import Game12 from './components/Games/Level1/Game12';
import Game20 from './components/Games/Level2/Game20';
import Game30 from './components/Games/Level3/Game30';
import GameWon from './components/GameWon';
import EndGame from './components/EndGame';
import Loading from './components/Loading';
import FAQ from './components/FAQ';
import { _getLocalStorage } from './store/localStorage';

const Routes = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const auth = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getSingleUser(auth.id));
      dispatch(updateUserStreak(auth.id, { logIn: true }));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(_getLocalStorage());
    }
  }, []);

  return isLoading ? (
    <Switch>
      <Route component={Loading} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/loading" exact component={Loading} />
      <Route path="/" exact component={isLoggedIn ? Map : Home} />
      <Route path="/map" component={Map} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <Route path="/shop" component={Shop} />
      <Route path="/game/won" component={GameWon} />
      <Route path="/game/0/0" exact component={Game00} />
      <Route path="/game/0/1" exact component={Game01} />
      <Route path="/game/1/0" exact component={Game10} />
      <Route path="/game/1/1" exact component={Game11} />
      <Route path="/game/1/2" exact component={Game12} />
      <Route path="/game/2/0" exact component={Game20} />
      <Route path="/game/3/0" exact component={Game30} />
      <Route path="/faq" component={FAQ} />
      {!isLoggedIn && <Route path="/login" exact component={Login} />}
      {!isLoggedIn && <Route path="/signup" exact component={Signup} />}
      {isLoggedIn && <Route path="/settings" component={UserSettings} />}
      {isLoggedIn && <Route path="/profile" component={UserProfile} />}
      {isLoggedIn && <Route path="/pet" component={PetInfo} />}
      {isLoggedIn && <Route path="/game/end" component={EndGame} />}
      <Route component={NotFound} />
    </Switch>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
