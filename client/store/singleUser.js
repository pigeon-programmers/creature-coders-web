import axios from "axios";

const SINGLE_USER = "SINGLE_USER";

const singleUser = (user) => ({
    type: SINGLE_USER,
    user,
});

export const fetchSingleUser = (userId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/users/${userId}`);
            dispatch(singleUser(data));
        } catch (err) {
            console.log('There was an error fetching single user', err);
        }
    }
};

export default (state = {}, action) => {
    switch (action.type) {
        case SINGLE_USER:
            return action.user;
        default: 
            return state;
    }
};
