import React, { useEffect } from "react";
import { logout } from "../store";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from "./style";

const UserSettings = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(logout())}>Log Out</Button>
      <Link to='/password'>
        <Button>Change Password</Button></Link>
    </>
  );
};

export default UserSettings;
