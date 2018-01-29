import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';

import { signOutUser } from './../../actions/userAction';

const PROFILE = 'Profile';
const EDIT_PROFILE = 'Edit profile';
const SIGN_OUT = 'Sign out';

export class ProfileDropDownComponent extends Component {
    navToEditProfile = () => this.props.navToPath('/profile');

    signOut = () => this.props.signOut();

    render() {
        if (!this.props.user.id) {
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
                    <button className="dropdown-item" onClick={this.navToEditProfile}>{EDIT_PROFILE}</button>
                    <div className="dropdown-divider" />
                    <div className="dropdown-item">
                        <button className="btn btn-outline-warning" onClick={this.signOut}>{SIGN_OUT}</button>
                    </div>
                </div>
            </div>
        );
    }
}

ProfileDropDownComponent.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
    signOut: PropTypes.func.isRequired,
    navToPath: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => (
    {
        signOut: () => dispatch(signOutUser()),
        navToPath: pathname => dispatch(push(pathname)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropDownComponent);
