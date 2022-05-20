import axios from "axios";

const GET_ALL_USERS = "GET_ALL_USERS";

const getAllUsers = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/users/leaderboard");
      dispatch(getAllUsers(data));
    } catch (err) {
      console.log("Unable to fetch all users!", err);
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};
