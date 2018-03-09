import { actionTypes } from './../actions/userAction';
import userReduxModel from './../reduxModels/userReduxModel';

const initialState = userReduxModel(
    '',
    '',
    '',
    '',
);

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_GET: {
            const user = Object.assign({}, action.user);
            return user;
        }

        case actionTypes.USER_ADD: {
            const newUser = Object.assign({}, action.user);
            return newUser;
        }

        case actionTypes.USER_UPDATE: {
            const userUpdate = Object.assign({}, state, action.userUpdate);
            return userUpdate;
        }

        case actionTypes.USER_SIGN_OUT: {
            return initialState;
        }

        default:
            return state;
    }
};
