import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import firebase from './../../firebase';
import { getUser } from './../../actions/userAction';
import ProfileDropDown from './../users/ProfileDropDown';

const LOGIN_REGISTER = 'Login/Register';
const HOME = 'Home';
const NAV_CATEGORY_LIST_ID = 'navCategoryList';
const NEW_COMPETITION = 'New Competition';

export class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
        };
    }

    componentWillMount() {
        this.removeAuthListener = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    signedIn: true,
                });
                this.props.getSignedInUser(user.uid);
            } else {
                this.setState({
                    signedIn: false,
                });
            }
        });
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }

    navToAuth = () => this.props.navToPath('/auth');

    navToNewCompetition = () => this.props.navToPath('/competition');

    // TODO: search user and/or competition
    search = () => { };

    render() {
        const userElement = this.state.signedIn ?
            // TODO: Call Logout component
            (
                <div className="nav right-actions">
                    <ProfileDropDown />
                    <button className="btn btn-outline-info ml-2" onClick={this.navToNewCompetition}>{NEW_COMPETITION}</button>
                </div>
            ) :
            (<button className="btn btn-outline-info" onClick={this.navToAuth}>{LOGIN_REGISTER}</button>);

        return (
            <div className="container">
                <header className="navbar navbar-expand-md navbar-dark bg-dark" role="banner">
                    <Link to="/" href="/" className="navbar-brand">
                        <img src="/favicon.ico" alt="Ga" width="36" height="36" />
                        <span>{HOME}</span>
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target={`#${NAV_CATEGORY_LIST_ID}`}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id={NAV_CATEGORY_LIST_ID}>
                        <ul className="navbar-nav mr-auto">
                            {
                                this.props.categoryList.map(category => (
                                    <li className="nav-item" key={category.name}>
                                        <Link to={category.link} className="nav-link active" href={category.link}>
                                            <span>{category.name}</span>
                                        </Link>
                                    </li>))
                            }
                        </ul>
                        <div className="nav right-actions">
                            <input className="search-box pl-2" placeholder="Search" type="text" />
                            <button className="btn btn-primary search-btn mr-2" type="button" onChange={this.search}>
                                <i className="fa fa-search" />
                            </button>
                            {userElement}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

// TODO: create a class for category, and use it as isRequired
HeaderComponent.propTypes = {
    categoryList: PropTypes.arrayOf(PropTypes.object),
    navToPath: PropTypes.func.isRequired,
    getSignedInUser: PropTypes.func.isRequired,
};

HeaderComponent.defaultProps = {
    categoryList: [
        {
            name: 'NFL',
            link: '/nfl',
        },
        {
            name: 'EPL',
            link: '/epl',
        },
    ],
};

const mapDispatchToProps = dispatch => ({
    navToPath: pathname => dispatch(push(pathname)),
    getSignedInUser: userId => dispatch(getUser(userId)),
});

export default connect(null, mapDispatchToProps)(HeaderComponent);
