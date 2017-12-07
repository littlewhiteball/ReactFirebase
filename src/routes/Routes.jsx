import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { Home, Login, Logout } from './../components/main';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route path="/login" exact render={(props) => <Login {...props} />} />
            <Route path="/logout" exact render={(props) => <Logout {...props} />} />
        </Switch>
    </BrowserRouter>
);
