import React, { useEffect } from 'react';
import { logout } from '../store';
import { useDispatch } from 'react-redux';
import { Main, Button } from './style';
import { _updateActivePage } from '../store/user';

const UserSettings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_updateActivePage(""))
  }, [])

  return (
    <Main>
      <Button onClick={() => dispatch(logout())}>Log Out</Button>
    </Main>
  );
};

export default UserSettings;
