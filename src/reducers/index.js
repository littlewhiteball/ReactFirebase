import { combineReducers } from 'redux';

import { competitions } from './competitionsReducer';
import { user } from './usersReducer';

export default combineReducers({
    competitions,
    user,
});
