import { firebaseApp } from './../firebase';

const getCompetitionsRef = () => firebaseApp.database().ref('/competitions');

const getCompetitionRef = key => firebaseApp.database().ref(`/competitions/${key}`);

const getCompetitionsOnceFromDb = (limitToLast = 0) => {
    // TODO: Debating on('value') or once('value')
    if (limitToLast > 0) {
        return getCompetitionsRef().limitToLast(limitToLast).once('value');
    }
    return getCompetitionsRef().once('value');
};

const generateKeyForCompetitionFromDb = () => getCompetitionsRef().push().key;

const addCompetitionToDb = (competitionModel) => {
    const { id } = competitionModel;
    return getCompetitionRef(id).set(competitionModel);
};

const removeCompetitionFromDb = id => getCompetitionRef(id).remove();

export default {
    getCompetitionsOnceFromDb,
    generateKeyForCompetitionFromDb,
    addCompetitionToDb,
    removeCompetitionFromDb,
};
