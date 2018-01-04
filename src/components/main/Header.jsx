import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SIGN_OUT = 'Sign out';
const LOGIN_REGISTER = 'Login/Register';
const HOME = 'Home';

export const HeaderComponent = ({ user, categoryList }) => {
    const userElement = user.signedIn ?
        // TODO: Call Logout component
        (<button className="btn btn-outline-warning">{SIGN_OUT}</button>) :
        (<a href="/auth" className="btn btn-outline-info" role="button">{LOGIN_REGISTER}</a>);

    const navCategoryListId = 'navCategoryList';

    return (
        <header className="navbar navbar-expand-md navbar-dark bg-dark" role="banner">
            <a href="/" className="navbar-brand">
                <img src="/favicon.ico" alt="Ga" width="36" height="36" />
                <span>{HOME}</span>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target={`#${navCategoryListId}`}>
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id={navCategoryListId}>
                <ul className="navbar-nav mr-auto">
                    {
                        categoryList.map(category => (
                            <li className="nav-item" key={category.name}>
                                <a className="nav-link active" href={category.link}>{category.name}</a>
                            </li>))
                    }
                </ul>
                {userElement}
            </div>
        </header>
    );
};

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
