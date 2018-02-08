import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const NOT_FOUND_TEXT = 'Page not found, redirecting back to home page in 3 seconds';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            show: false,
        });
    }

    componentWillMount() {
        setTimeout(() => (
            this.setState({
                show: true,
            })
        ), 3000);
    }

    render() {
        return (
            <div className="container">
                <h4 className="text-primary my-4">{NOT_FOUND_TEXT}</h4>
                {
                    this.state.show ?
                        <Redirect to="/" /> :
                        null
                }
            </div>
        );
    }
}
