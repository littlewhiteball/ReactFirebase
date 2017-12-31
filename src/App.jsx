import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/main/Home';
import Auth from './components/pages/Auth';

export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
    </Switch>
);
