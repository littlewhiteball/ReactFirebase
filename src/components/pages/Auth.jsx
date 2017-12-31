import React, { Component } from 'react';
import Header from './../main/Header';
import Login from './../users/Login';
import Footer from './../main/Footer';

export default class Auth extends Component {
    render() {
        return (
            <div>
                <Header />
                <Login />
                <Footer />
            </div>
        )
    }
}
