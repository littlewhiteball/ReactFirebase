import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// TODO: Only in dev
import createLogger from 'redux-logger';

import rootReducer from './../reducers';

const middlewares = [];
middlewares.push(reduxThunk);

// TODO: Only in dev
middlewares.push(createLogger);

const store = extraMiddlewares =>
    createStore(
        rootReducer,
        applyMiddleware(...middlewares.concat(extraMiddlewares)),
    );

export default store;
