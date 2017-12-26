import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/main/Home';
import Login from './components/main/Login';
import Logout from './components/main/Logout';

export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
    </Switch>
);
