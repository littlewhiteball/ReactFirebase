import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-bright navbar-fixed-top" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">Home</a>
                    </div>
                    <nav className="collapse navbar-collapse" role="navigation">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">Category</a>
                            </li>
                            <li>
                                <a href="#">Category</a>
                            </li>
                            <li>
                                <a href="#">Category</a>
                            </li>
                            <li>
                                <a href="#">Category</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-right navbar-nav">
                            <li className="dropdown">
                                <Link to="/login" className="btn btn-default navbar-btn">Login/Register</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
