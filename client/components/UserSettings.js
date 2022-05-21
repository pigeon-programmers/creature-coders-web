import React, { useEffect } from 'react';
import { logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Main, Button } from './style';
import { useHistory } from 'react-router-dom';

const UserSettings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  // useEffect(() => {
  //   if (!isLoggedIn) history.push('/');
  // }, [isLoggedIn]);

  return (
    <Main>
      <Button onClick={() => dispatch(logout())}>Log Out</Button>
    </Main>
  );
};

export default UserSettings;
