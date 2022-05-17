import axios from "axios";

const UPDATE_USER = "UPDATE_USER";

const updateUser = (user) => ({
    type: UPDATE_USER,
    user,
});

export const updateSingleUser = (id, points, currentLevel, currentGame, pidgeCoin, streak) => {
    return async (dispatch) => {
        try {
            const user = { points, currentLevel, currentGame, pidgeCoin, streak }; 
            const { data } = await axios.put(`/api/users/${id}`, user);
            dispatch(updateUser(data));
        } catch (err) {
            console.log("There was an error updating the user!", err)
        }
    }
};

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_USER:
            return [
                ...state, 
                state.map((user) => {
                    user.id === action.user.id ? action.user : user;
                }),
            ];
        default: 
        return state; 
    }
};

