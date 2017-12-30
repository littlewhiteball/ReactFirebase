import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Header extends PureComponent {
    render() {
        const navCategoryListId = 'navCategoryList';
        return (
            <header className="navbar navbar-expand-md navbar-dark bg-dark" role="banner">
                <a href="/" className="navbar-brand">
                    <img src="/favicon.ico" alt="Ga" width="36" height="36" />
                    Home
                </a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target={`#${navCategoryListId}`}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id={navCategoryListId}>
                    <ul className="navbar-nav mr-auto">
                        {this.props.categoryList.map(category => (
                            <li className="nav-item">
                                <a className="nav-link active" href={category.link}>{category.name}</a>
                            </li>))}
                    </ul>
                    <button className="btn btn-outline-info">Login/Register</button>
                </div>
            </header>
        );
    }
}

// TODO: create a class for category, and use it as isRequired
Header.propTypes = {
    categoryList: PropTypes.arrayOf(PropTypes.objet),
};

Header.defaultProps = {
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
