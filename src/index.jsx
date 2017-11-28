// packages
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

// components
import Login from './components/Login';
import Logout from './components/Logout';
import CategoryList from './components/CategoryList';
import CompetitionList from './components/CompetitionList';

// utilities
import competitionStore from './stores/competitionStore';

var initial = competitionStore.getCompetitions();

function render() {
    ReactDOM.render(<CompetitionList competitions={initial} />, document.getElementById('root'));
    ReactDOM.render(<CategoryList />, document.getElementById('categories'));
    ReactDOM.render(<Login />, document.getElementById('auth'));
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        ReactDOM.render(<Logout />, document.getElementById('auth'));
    } else {
        ReactDOM.render(<Login />, document.getElementById('auth'));
    }
});

competitionStore.onChange(function (competitions) {
    initial = competitions;
    render();
});
