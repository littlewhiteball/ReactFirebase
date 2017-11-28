import React from 'react';
import firebase from 'firebase';

export default class Logout extends React.Component {
    logout() {
        firebase.auth().logout();
    }

    render() {
        return (
            <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.logout}>Log Out</button>
            </div>
        )
    }
}