import React, { Component } from 'react';
import firebase from 'firebase';

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
        return (
            <form className="form">
                <div className="form-group">
                    <input type="text" className="form-control input-lg" placeholder="Email" onChange={this.updateEmail} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control input-lg" placeholder="Password" onChange={this.updatePassword} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.login}>Log In</button>
                </div>
            </form >
        );
    }
}
