import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import NewCompetition from './pages/NewCompetition';
import Header from './main/Header';
import Footer from './main/Footer';

export default () => (
    <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/competition" exact component={NewCompetition} />
        <Footer />
    </div>
);
