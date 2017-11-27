import dispatcher from './../dispatchers/dispatcher';
// TODO: pass firebase in from index.jsx. May need to change this file to a class
import firebase from './../database/firebase';
import competitionModel from './../models/competition';

// ******** Public ********//

function getCompetitions() {
    return competitions;
}

function onChange(listener) {
    listeners.push(listener);
}

// ******** Private ********//

var competitions = [];

let competitionRef = firebase.getCompetitionsRef();

competitionRef.on('value', function (snapshot) {
    competitions = [];
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

    let key = competitionRef.push().key;
    let model = competitionModel(key, competition.name, competition.purchased);
    firebase.getCompetitionRef(key).set(model).then(function () {
        console.info('added')
    });
}

function removeCompetition(competition) {
    var index;
    competitions.filter(function (_competition, _index) {
        if (_competition.id == competition.id) {
            index = _index;
            return;
        }
    });
    competitions.splice(index, 1);
    triggerListeners();

    firebase.getCompetitionRef(competition.id).remove().then(function () {
        console.info('removed');
    })
}

function setCompetitionBought(competition, isBought) {
    var _competition = competitions.filter(function (a) {
        return a.name == competition.name;
    })[0];
    competition.purchased = isBought;
    triggerListeners();

    let model = competitionModel(competition.id, competition.name, competition.purchased);
    firebase.getCompetitionRef(competition.id).update(model).then(function () {
        console.info('updated');
    })
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
