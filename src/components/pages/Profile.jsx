import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EditProfile from './../users/EditProfile';

// eslint-disable-next-line react/prefer-stateless-function
export class ProfileComponent extends Component {
    render() {
        return this.props.userId
            ? (<EditProfile />)
            : (<Redirect to="/auth" />);
    }
}

ProfileComponent.propTypes = {
    userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    userId: state.user.id,
});

export default connect(mapStateToProps, null)(ProfileComponent);
