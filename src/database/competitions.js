import firebase from './../firebase';

function getCompetitionsRef() {
    return firebase.database().ref('/competitions');
}

function getCompetitionRef(key) {
    return firebase.database().ref('/competitions/competition' + key);
}

export {
    getCompetitionsRef, getCompetitionRef
}
