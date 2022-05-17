import React, { useEffect } from "react";
import { logout } from "../store";
import { useDispatch } from "react-redux";
import { Button } from "./style";

const UserSettings = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(logout())}>Log Out</Button>
    </>
  );
};

export default UserSettings;
