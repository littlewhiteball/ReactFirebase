import { actionTypes } from './../actions/userAction';
import userReduxModel from './../reduxModels/userReduxModel';

const initialState = userReduxModel(
    undefined,
    undefined,
    undefined,
);

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_GET: {
            const newUser = Object.assign({}, action.user);
            return newUser;
        }

        case actionTypes.USER_ADDING:
            return state;

        case actionTypes.USER_ADDED: {
            const newUser = Object.assign({}, action.user);
            return newUser;
        }

        case actionTypes.USER_ADD_FAILED:
            return state;

        case actionTypes.USER_UPDATING:
            return state;

        case actionTypes.USER_UPDATED: {
            // TODO: update initialState
            const newUser = Object.assign({}, action.user);
            return newUser;
        }

        case actionTypes.USER_UPDATE_FAILED:
            return state;

        default:
            return state;
    }
};
