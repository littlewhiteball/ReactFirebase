import React, { Component } from 'react';
import Header from './../main/Header';
import Footer from './../main/Footer';
import AddCompetitionForm from './../competitions/AddCompetitionForm';

export default class NewCompetition extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddCompetitionForm />
                <Footer />
            </div>
        )
    }
}
