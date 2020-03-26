import { users, validUser } from "../DataEmployee";
import { combineReducers } from "redux";
import { USER_ACTION } from "../actions/userActions";

const initialState = { users, validUser, loggedIn: false };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION:
            return { ...state, loggedIn: action.payload.value }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    user: userReducer
});