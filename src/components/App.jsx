import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivateRoute from './utilities/PrivateRoute';
import Home from './pages/Home';
import Auth from './pages/Auth';
import NewCompetition from './pages/NewCompetition';
import Profile from './pages/Profile';
import Header from './main/Header';
import Footer from './main/Footer';
import NotFound from './main/NotFound';

// eslint-disable-next-line react/prefer-stateless-function
export class AppComponent extends Component {
    render() {
        return (
            <div>
                <Header location={this.props.location} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/competition" exact component={NewCompetition} />
                    <PrivateRoute path="/profile" exact component={Profile} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

AppComponent.propTypes = {
    location: PropTypes.shape({
        hash: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
        state: PropTypes.object,
    }).isRequired,
};

const mapStateToProps = state => ({
    location: state.routing.location,
});

export default connect(mapStateToProps, null)(AppComponent);
