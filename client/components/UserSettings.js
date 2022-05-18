import React, { useEffect } from "react";
import { logout } from "../store";
import { useDispatch } from "react-redux";
import { Button, Main } from "./style";

const UserSettings = () => {
  const dispatch = useDispatch();

  return (
    <Main>
      <Button onClick={() => dispatch(logout())}>Log Out</Button>
    </Main>
  );
};

export default UserSettings;
