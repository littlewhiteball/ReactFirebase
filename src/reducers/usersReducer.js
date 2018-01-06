import { actionTypes } from './../actions/usersAction';

const initialState = {
    name: undefined,
    authorizing: false,
    authorized: false,
    signingIn: false,
    signedIn: false,
    signingOut: false,
    signedOut: false,
};

// TODO: signedIn and authorized sound duplicating
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_AUTHORIZING:
            return Object.assign({}, state, {
                authorizing: true,
            });

        case actionTypes.USER_AUTHORIZED:
            return Object.assign({}, state, {
                name: action.user.name,
                authorizing: false,
                authorized: true,
            });

        case actionTypes.USER_UNAUTHORIZED:
            return Object.assign({}, state, {
                authorizing: false,
                authorized: false,
            });

        case actionTypes.USER_SIGNINGOUT:
            return Object.assign({}, state, {
                signingOut: true,
            });

        case actionTypes.USER_SIGNEDOUT:
            return Object.assign({}, state, {
                name: undefined,
                signingOut: false,
                signedOut: true,
            });

        case actionTypes.UPDATE_USER_NAME:
            return state;

        default:
            return state;
    }
};
