/**
 * This APP is same as the APP jsx on client side,
 * except it does not have /profile route, as the
 * EdgeProfile component of /profile route uses
 * Firebase Storage API that only supports consumption
 * in browser. More details checkout ./index.jsx
 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivateRoute from './src/components/utilities/PrivateRoute';
import Home from './src/components/pages/Home';
import Auth from './src/components/pages/Auth';
import NewCompetition from './src/components/pages/NewCompetition';
import JoinCompetition from './src/components/pages/JoinCompetition';
import Header from './src/components/main/Header';
import Footer from './src/components/main/Footer';
import NotFound from './src/components/main/NotFound';

// eslint-disable-next-line react/prefer-stateless-function
export class AppComponent extends Component {
    render() {
        return (
            <div>
                <Header location={this.props.location} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <PrivateRoute path="/competition" exact component={NewCompetition} />
                    <PrivateRoute path="/competition/join" exact component={JoinCompetition} />
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
