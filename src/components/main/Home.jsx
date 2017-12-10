import React, { Component } from 'react';

import { Header, Footer } from './';
import { Tending } from './../pages';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Tending />
                <Footer />
            </div>
        );
    }
}
