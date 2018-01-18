import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signOutUser } from './../../actions/usersAction';

const PROFILE = 'Profile';
const EDIT_PROFILE = 'Edit profile';
const SIGN_OUT = 'Sign out';

export class UserProfileDropDownComponent extends Component {
    signOut = () => this.props.signOut();

    render() {
        if (!this.props.user.signedIn) {
            return (
                <Redirect to={{
                    pathname: '/',
                }}
                />
            );
        }

        return (
            <div className="dropdown show">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <img src="./favicon.ico" width="28" height="28" alt={PROFILE} />
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">{EDIT_PROFILE}</a>
                    <div className="dropdown-divider" />
                    <div className="dropdown-item">
                        <button className="btn btn-outline-warning" onClick={this.signOut}>{SIGN_OUT}</button>
                    </div>
                </div>
            </div>
        );
    }
}

UserProfileDropDownComponent.propTypes = {
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => (
    {
        signOut: () => dispatch(signOutUser()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileDropDownComponent);
