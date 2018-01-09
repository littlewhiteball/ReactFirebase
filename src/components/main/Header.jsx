import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from './../users/Profile';

const LOGIN_REGISTER = 'Login/Register';
const HOME = 'Home';
const NAV_CATEGORY_LIST_ID = 'navCategoryList';
const NEW_COMPETITION = 'New Competition';

export class HeaderComponent extends PureComponent {
    render() {
        const userElement = this.props.user.signedIn ?
            // TODO: Call Logout component
            (
                <div className="nav right-actions">
                    <Profile />
                    <a className="btn btn-outline-info ml-2" href="/competition">{NEW_COMPETITION}</a>
                </div>
            ) :
            (<a href="/auth" className="btn btn-outline-info" role="button">{LOGIN_REGISTER}</a>);

        return (
            <div className="container">
                <header className="navbar navbar-expand-md navbar-dark bg-dark" role="banner">
                    <a href="/" className="navbar-brand">
                        <img src="/favicon.ico" alt="Ga" width="36" height="36" />
                        <span>{HOME}</span>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target={`#${NAV_CATEGORY_LIST_ID}`}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id={NAV_CATEGORY_LIST_ID}>
                        <ul className="navbar-nav mr-auto">
                            {
                                this.props.categoryList.map(category => (
                                    <li className="nav-item" key={category.name}>
                                        <a className="nav-link active" href={category.link}>{category.name}</a>
                                    </li>))
                            }
                        </ul>
                        {userElement}
                    </div>
                </header>
            </div>
        );
    }
}

// TODO: create a class for category, and use it as isRequired
HeaderComponent.propTypes = {
    user: PropTypes.object.isRequired,
    categoryList: PropTypes.arrayOf(PropTypes.object),
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

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(HeaderComponent);
