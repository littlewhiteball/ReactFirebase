// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import firebase from 'firebase';

// components
import App from './App';

import CategoryList from './components/CategoryList';
import CompetitionList from './components/CompetitionList';

// utilities
import competitionStore from './stores/competitionStore';

ReactDOM.render(<App />, document.getElementById('root'));

// var initial = competitionStore.getCompetitions();

// function render() {
//     ReactDOM.render(<CompetitionList competitions={initial} />, document.getElementById('root'));
//     ReactDOM.render(<CategoryList />, document.getElementById('categories'));
//     ReactDOM.render(<Login />, document.getElementById('auth'));
// }

// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         ReactDOM.render(<Logout />, document.getElementById('auth'));
//     } else {
//         ReactDOM.render(<Login />, document.getElementById('auth'));
//     }
// });

// competitionStore.onChange(function (competitions) {
//     initial = competitions;
//     render();
// });
