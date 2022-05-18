import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { me } from './store';
import { getSingleUser } from './store/user';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import UserSettings from './components/UserSettings';
import Map from './components/Map';
import PetInfo from './components/PetInfo';
import NotFound from './components/NotFound';
import Game00 from './components/Games/Level0/Game00';
import Game01 from './components/Games/Level0/Game01';
import Game02 from './components/Games/Level0/Game02';
import Game03 from './components/Games/Level0/Game03';
import Game04 from './components/Games/Level0/Game04';
import Game05 from './components/Games/Level0/Game05';

//TODO: adjust so that isLoggedIn ternary only applied to routes that are different

const Routes = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    if (isLoggedIn) dispatch(getSingleUser(auth.id));
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/404" component={NotFound} />
          <Route path="/settings" component={UserSettings} />
          <Route path="/pet" component={PetInfo} />
          <Route path="/game/0/0" exact component={Game00} />
          <Route path="/game/0/1" exact component={Game01} />
          <Route path="/game/0/2" exact component={Game02} />
          <Route path="/game/0/3" exact component={Game03} />
          <Route path="/game/0/4" exact component={Game04} />
          <Route path="/game/0/5" exact component={Game05} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/map" component={Map} />
          <Route path="/game/0/0" exact component={Game00} />
          <Route path="/game/0/1" exact component={Game01} />
          <Route path="/game/0/2" exact component={Game02} />
          <Route path="/game/0/3" exact component={Game03} />
          <Route path="/game/0/4" exact component={Game04} />
          <Route path="/game/0/5" exact component={Game05} />
        </Switch>
      )}
    </div>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
