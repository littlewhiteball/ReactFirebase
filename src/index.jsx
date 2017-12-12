// packages
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

render();

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
