import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import competitions from './competitionsReducer';
import user from './userReducer';
// TODO: remove auth
import auth from './authReducer';

export default combineReducers({
    routing: routerReducer,
    competitions,
    user,
    auth,
});
