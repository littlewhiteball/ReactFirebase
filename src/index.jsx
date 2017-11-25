import React from 'react';
import ReactDOM from 'react-dom';

import CompetitionList from './components/CompetitionList';
import competitionStore from './stores/competitionStore';

var initial = competitionStore.getCompetitions();

function render() {
    ReactDOM.render(<CompetitionList competitions={initial} />, document.getElementById('root'));
}

competitionStore.onChange(function (competitions) {
    initial = competitions;
    render();
});
