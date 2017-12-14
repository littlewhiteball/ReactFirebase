import React from 'react';
import { Provider } from 'react-redux';

import store from './stores';
import Routes from './Routes';

export default () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);
