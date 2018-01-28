import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import authDbAdapter, { ERROR_AUTH_USER_NOT_FOUND } from './../../database/authDbAdapter';
import { getUser, addUser } from './../../actions/userAction';

const PLEASE_SIGN_IN = 'Please sign in';
const SIGN_IN_OR_REGISTERING_WARNING = 'If you do not have an account already. This will create your account';
const SIGN_IN = 'Sign in';
const REMEMBER_ME = 'Remember me';
const FORGOT_PASSWORD = 'Forgot password?';

export class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    updateEmail = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value,
        });
    }

    updatePassword = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value,
        });
    }

    signInWithEmailPassword = () => {
        // TODO: validation on empty email or empty password, plus other validations
        authDbAdapter.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((emailUser) => {
                this.props.getSignedInUser(emailUser.uid);
            }).catch((signInError) => {
                const { code } = signInError;
                if (code === ERROR_AUTH_USER_NOT_FOUND) {
                    // user not found. should create new user
                    // eslint-disable-next-line max-len
                    authDbAdapter.createUserWithEmailAndPassword(this.state.email, this.state.password)
                        .then((emailUser) => {
                            this.props.addSignedUpUser(emailUser);
                        }).catch((signUpError) => {
                            console.error(signUpError);
                        });
                } else {
                    console.error(signInError);
                }
            });
    }

    signInWithGoogle = () => {
        authDbAdapter.signInWithGoogle().then((user) => {
            this.props.getSignedInUser(user.uid);
        }).catch((signInWithGoogleError) => {
            console.error(signInWithGoogleError);
        });
    }

    signInWithFacebook = () => {
        authDbAdapter.signInWithFacebook().then((user) => {
            this.props.getSignedInUser(user.uid);
        }).catch((signInWithFacebookError) => {
            console.error(signInWithFacebookError);
        });
    }

    signInWithTwitter = () => {
        authDbAdapter.signInWithTwitter().then((user) => {
            this.props.getSignedInUser(user.uid);
        }).catch((signInWithTwitterError) => {
            console.error(signInWithTwitterError);
        });
    }

    render() {
        if (this.props.user.id !== undefined) {
            return (
                <Redirect to={{
                    pathname: '/',
                }}
                />
            );
        }

        const chkRememberMeId = 'chkRememberMe';
        // TODO: group email, password, remember me, forgot password, and sign in button to one form
        return (
            <div className="container">
                <div className="form-signin">
                    <div className="form-group">
                        <h2 className="form-signin-heading">{PLEASE_SIGN_IN}</h2>
                        <i className="fa fa-exclamation-triangle fa-3" />
                        <small>{SIGN_IN_OR_REGISTERING_WARNING}</small>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" onChange={this.updateEmail} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" onChange={this.updatePassword} />
                    </div>
                    <div className="form-group">
                        <div className="form-check-inline">
                            <label className="form-check-label" htmlFor={chkRememberMeId}>
                                <input type="checkbox" className="form-check-input" id={chkRememberMeId} />
                                {REMEMBER_ME}
                            </label>
                        </div>
                        <a href="/" className="float-right">{FORGOT_PASSWORD}</a>
                        <button className="btn btn-primary btn-block mb-2" onClick={this.signInWithEmailPassword}>{SIGN_IN}</button>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-social-icon btn-google ml-1 mr-1" onClick={this.signInWithGoogle}>
                            <span className="fa fa-google" />
                        </button>
                        <button className="btn btn-social-icon btn-facebook ml-1 mr-1" onClick={this.signInWithFacebook}>
                            <span className="fa fa-facebook" />
                        </button>
                        <button className="btn btn-social-icon btn-twitter ml-1 mr-1" onClick={this.signInWithTwitter}>
                            <span className="fa fa-twitter" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

LoginComponent.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
    getSignedInUser: PropTypes.func.isRequired,
    addSignedUpUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    getSignedInUser: userId => dispatch(getUser(userId)),
    addSignedUpUser: user => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
