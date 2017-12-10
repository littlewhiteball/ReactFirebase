import { combineReducers } from 'redux';

import { competitions } from './competitionsReducer';
import { user } from './usersReducer';

const rootReducer = combineReducers({
    competitions,
    user
});

export {
    rootReducer
};
