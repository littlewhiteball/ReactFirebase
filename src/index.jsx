import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/Login';
import CategoryList from './components/CategoryList';
import CompetitionList from './components/CompetitionList';
import competitionStore from './stores/competitionStore';

var initial = competitionStore.getCompetitions();

function render() {
    ReactDOM.render(<CompetitionList competitions={initial} />, document.getElementById('root'));
    ReactDOM.render(<CategoryList />, document.getElementById('categories'));
    ReactDOM.render(<Login />, document.getElementById('login'));
}

competitionStore.onChange(function (competitions) {
    initial = competitions;
    render();
});
