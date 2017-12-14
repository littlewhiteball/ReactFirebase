import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/main/Home';
import Login from './components/main/Login';
import Logout from './components/main/Logout';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/login" exact render={props => <Login {...props} />} />
            <Route path="/logout" exact render={props => <Logout {...props} />} />
        </Switch>
    </BrowserRouter>
);
