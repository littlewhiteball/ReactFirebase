import firebase from './../firebase';

export const getCompetitionsRef = () => firebase.database().ref('/competitions');

export const getCompetitionRef = key => firebase.database().ref(`/competitions/competition/${key}`);
