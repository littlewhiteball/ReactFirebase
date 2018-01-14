import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/main/Home';
import Auth from './components/pages/Auth';
import NewCompetition from './components/pages/NewCompetition';
import Header from './components/main/Header';
import Footer from './components/main/Footer';

export default () => (
    <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/competition" exact component={NewCompetition} />
        <Footer />
    </div>
);
