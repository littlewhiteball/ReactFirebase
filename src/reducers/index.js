import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import competitions from './competitionsReducer';
import user from './userReducer';

export default combineReducers({
    routing: routerReducer,
    competitions,
    user,
});
