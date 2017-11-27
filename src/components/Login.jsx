import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: props.firebase,
            email: '',
            password: ''
        };

        this.signin = this.signin.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updateEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    signin() {
        this.state.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function (user) {
                console.info('logged in');
                // Redux: redirect to home page
            })
            .catch(function (error) {
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
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.signin}>Sign In</button>
                </div>
            </form >
        );
    };
}
