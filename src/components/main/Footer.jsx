import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">{this.state.year} ReactFirebase</span>
                </div>
            </footer>
        );
    }
}
