import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const NOT_FOUND_TEXT = 'Not found, redirecting back to home page';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>{NOT_FOUND_TEXT}</h1>
                <Redirect to="/" />
            </div>
        );
    }
}
