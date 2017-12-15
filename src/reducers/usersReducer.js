import { USER_AUTHORIZING, USER_AUTHORIZED, UPDATE_USER_NAME } from './../actions/usersAction';

export default (state = {}, action) => {
    switch (action.type) {
        case USER_AUTHORIZING:
            return state;

        case USER_AUTHORIZED:
            return state;

        case UPDATE_USER_NAME:
            return state;

        default:
            return state;
    }
};
