import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import firebase from './../../firebase';
import { getUser } from './../../actions/userAction';

export class PrivateRouteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            signedIn: false,
        };
    }

    componentWillMount() {
        this.removeAuthListener = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loading: false,
                    signedIn: true,
                });
                this.props.getSignedInUser(user.uid);
            } else {
                this.setState({
                    loading: false,
                    signedIn: false,
                });
            }
        });
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }

    render() {
        const componentProps = Object.assign({}, this.props);
        return this.state.loading ?
            // TODO: create a loading component
            (<i className="fa fa-spinner fa-10x" />) :
            (<Route
                // TODO: eslint bug: https://github.com/eslint/eslint/issues/9858
                /* eslint-disable react/jsx-indent-props */
                {...this.props.rest}
                render={
                    routeProps => (
                        this.state.signedIn ?
                            (
                                <this.props.component {...componentProps} />
                            ) :
                            (
                                <Redirect to={{
                                    pathname: this.props.redirectTo,
                                    state: { from: routeProps.location },
                                }}
                                />
                            )
                    )
                }
            />);
    }
}

PrivateRouteComponent.propTypes = {
    component: PropTypes.func.isRequired, // return type of connect(Component) is function
    rest: PropTypes.arrayOf(PropTypes.any),
    redirectTo: PropTypes.string,
    location: PropTypes.shape({
        hash: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
        state: PropTypes.object,
    }).isRequired,
    getSignedInUser: PropTypes.func.isRequired,
};

PrivateRouteComponent.defaultProps = {
    rest: [],
    redirectTo: '/auth',
};

const mapStateToProps = state => ({
    location: state.routing.location,
});

const mapDispatchToProps = dispatch => ({
    getSignedInUser: userId => dispatch(getUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent);
