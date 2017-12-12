import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Tending from './../pages/Trending';

export default class Home extends Component {
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
