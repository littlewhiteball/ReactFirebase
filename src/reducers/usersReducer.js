import { USER_AUTHORIZING, USER_AUTHORIZED, USER_UNAUTHORIZED, UPDATE_USER_NAME } from './../actions/usersAction';

export default (state = {}, action) => {
    switch (action.type) {
        case USER_AUTHORIZING:
            return Object.assign({}, state, {
                authorizing: true,
                authorized: false,
            });

        case USER_AUTHORIZED:
            return Object.assign({}, state, {
                name: action.user.name,
                authorizing: false,
                authorized: true,
            });

        case USER_UNAUTHORIZED:
            return Object.assign({}, state, {
                name: undefined,
                authorizing: false,
                authorized: false,
            });

        case UPDATE_USER_NAME:
            return state;

        default:
            return state;
    }
};
