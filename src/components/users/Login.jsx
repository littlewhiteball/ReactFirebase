import React, { Component } from 'react';
import firebase from 'firebase';

const pleaseSignin = 'Please sign in';
const signinOrRegisterWarning = 'If you do not have an account already. This will create your account';
const signin = 'Sign in';
const rememberMe = 'Remember me';
const forgotPassword = 'Forgot password?';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    updatePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.info('logged in');
                // Redux: redirect to home page
            })
            .catch((error) => {
                // Handle errors
                console.log(error.code);
                console.log(error.message);
            });
    }

    render() {
        const chkRememberMeId = 'chkRememberMe';
        return (
            <div className="container">
                <form className="form-signin">
                    <div className="form-group">
                        <h2 className="form-signin-heading">{pleaseSignin}</h2>
                        <i className="fa fa-exclamation-triangle fa-3" />
                        <small>{signinOrRegisterWarning}</small>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <div className="form-check-inline">
                            <label className="form-check-label" htmlFor={chkRememberMeId}>
                                <input type="checkbox" className="form-check-input" id={chkRememberMeId} />
                                {rememberMe}
                            </label>
                        </div>
                        <a href="/" className="float-right">{forgotPassword}</a>
                        <button type="submit" className="btn btn-primary btn-block mb-2">{signin}</button>
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
                </form>
            </div>
        );
    }
}
