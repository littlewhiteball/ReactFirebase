import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signInEmailPassword } from './../../actions/usersAction';

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
        this.props.signInWithEmailPassword(this.state.email, this.state.password);
    }

    render() {
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
                        <button className="btn btn-social-icon btn-google ml-1 mr-1">
                            <span className="fa fa-google" />
                        </button>
                        <button className="btn btn-social-icon btn-facebook ml-1 mr-1">
                            <span className="fa fa-facebook" />
                        </button>
                        <button className="btn btn-social-icon btn-twitter ml-1 mr-1">
                            <span className="fa fa-twitter" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

LoginComponent.propTypes = {
    signInWithEmailPassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    signInWithEmailPassword:
        (email, password) => dispatch(signInEmailPassword(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
