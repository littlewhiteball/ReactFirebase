import { firebaseApp } from './../firebase';

const getCompetitionParticipantsRef = competitionId => firebaseApp.database().ref(`/competitionParticipants/${competitionId}`);

const getCompetitionParticipantRef = (competitionId, userId) => firebaseApp.database().ref(`/competitionParticipants/${competitionId}/${userId}`);

const getCompetitionParticipantsOnceFromDb = competitionId => getCompetitionParticipantsRef(competitionId).once('value');

const getCompetitionParticipantOnceFromDb = (competitionId, userId) => getCompetitionParticipantRef(competitionId, userId).once('value');

const addCompetitionParticipantToDb = (competitionId, userId) =>
    getCompetitionParticipantRef(competitionId, userId).set(true);

const removeCompetitionParticipantsFromDb = competitionId =>
    getCompetitionParticipantsRef(competitionId).remove();

const removeCompetitionParticipantFromDb = (competitionId, userId) =>
    getCompetitionParticipantRef(competitionId, userId).remove();

export default {
    getCompetitionParticipantsOnceFromDb,
    getCompetitionParticipantOnceFromDb,
    addCompetitionParticipantToDb,
    removeCompetitionParticipantsFromDb,
    removeCompetitionParticipantFromDb,
};
