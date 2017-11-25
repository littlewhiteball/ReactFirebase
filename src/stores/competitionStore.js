import dispatcher from './../dispatchers/dispatcher';
import firebase from './../database/firebase';

// ******** Public ********//

function getCompetitions() {
    return competitions;
}

function onChange(listener) {
    listeners.push(listener);
}

// ******** Private ********//

var competitions = [];

firebase.getCompetitionsRef()
    .on('value', function (snapshot) {
        const values = snapshot.val();
        for (const v in values) {
            competitions.push(values[v]);
        };
        triggerListeners();
    });

var listeners = [];

function addCompetition(competition) {
    competitions.push(competition);
    triggerListeners();

    // rest.post('/api/competitions/', competition);
}

function removeCompetition(competition) {
    var index;
    competitions.filter(function (_competition, _index) {
        if (_competition.name == competition.name) {
            index = _index;
        }
    });
    competitions.splice(index, 1);
    triggerListeners();

    // rest.remove('/api/competitions/' + competition.id);
}

function setCompetitionBought(competition, isBought) {
    var _competition = competitions.filter(function (a) {
        return a.name == competition.name;
    })[0];
    competition.purchased = isBought;
    triggerListeners();

    // rest.patch('/api/competitions/' + competition.id, competition);
}

function triggerListeners() {
    listeners.forEach(function (listener) {
        listener(competitions);
    });
}

dispatcher.register(function (event) {
    var split = event.type.split(':');
    if (split[0] == 'competition') {
        switch (split[1]) {
            case "add":
                addCompetition(event.payload);
                break;
            case "remove":
                removeCompetition(event.payload);
                break;
            case "buy":
                setCompetitionBought(event.payload, true);
                break;
            case "unbuy":
                setCompetitionBought(event.payload, false);
                break;
        }
    }
});

export default {
    getCompetitions, onChange
}
