import { actionTypes } from './../actions/authAction';

const initialState = {
    userId: undefined,
    signingIn: false,
    signedIn: false,
    signingOut: false,
    signedOut: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_SIGNINGIN:
            return Object.assign({}, state, {
                signingIn: true,
            });

        case actionTypes.USER_SIGNEDIN:
            return Object.assign({}, state, {
                userId: action.auth.userId,
                signingIn: false,
                signedIn: true,
            });

        case actionTypes.USER_SIGNINFAILED:
            return Object.assign({}, state, {
                signingIn: false,
                signedIn: false,
            });

        case actionTypes.USER_SIGNINGOUT:
            return Object.assign({}, state, {
                signingOut: true,
            });

        case actionTypes.USER_SIGNEDOUT:
            return Object.assign({}, state, {
                userId: undefined,
                signedIn: false,
                signingOut: false,
                signedOut: true,
            });

        case actionTypes.UPDATE_USER_NAME:
            return state;

        default:
            return state;
    }
};
