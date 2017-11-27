import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <form className="form">
                <div className="form-group">
                    <input type="text" className="form-control input-lg" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control input-lg" placeholder="Password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block">Sign In</button>
                </div>
            </form >
        );
    };
}
