import React, { useEffect } from 'react';
import { logout } from '../store';
import { useDispatch } from 'react-redux';
import { Main, Button } from './style';
import { _logoutUser, _updateActivePage } from '../store/user';
import { _logoutPet } from '../store/pet';

const UserSettings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_updateActivePage(''));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(_logoutUser());
    dispatch(_logoutPet());
  };

  return (
    <Main>
      <Button onClick={handleLogout}>Log Out</Button>
    </Main>
  );
};

export default UserSettings;
