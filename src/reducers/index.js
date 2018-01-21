import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import competitions from './competitionsReducer';
import auth from './authReducer';

export default combineReducers({
    routing: routerReducer,
    competitions,
    auth,
});
