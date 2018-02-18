import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditProfile from './../users/EditProfile';

// eslint-disable-next-line react/prefer-stateless-function
export class ProfileComponent extends Component {
    render() {
        return (
            <EditProfile />
        );
    }
}

export default connect()(ProfileComponent);
