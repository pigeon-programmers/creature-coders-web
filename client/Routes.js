import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import UserSettings from './components/UserSettings'
import Map from './components/Map';
import Game00 from './components/Games/Level0/Game00';
import Game01 from './components/Games/Level0/Game01';
import Game02 from './components/Games/Level0/Game02';
import Game03 from './components/Games/Level0/Game03';
import Game04 from './components/Games/Level0/Game04';
import Game05 from './components/Games/Level0/Game05';

//TODO: refactor component to hooks and adjust so that isLoggedIn ternary only applied to routes that are different
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/settings" component={UserSettings} />
            <Route path="/game/0/0" exact component={Game00} />
            <Route path="/game/0/1" exact component={Game01} />
            <Route path="/game/0/2" exact component={Game02} />
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
            <Route path="/game/0/4" exact component={Game04} />
            <Route path="/game/0/5" exact component={Game05} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
