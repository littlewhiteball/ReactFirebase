import firebase from './../firebase';

const getCompetitionsRef = () => firebase.database().ref('/competitions');

const getCompetitionRef = key => firebase.database().ref(`/competitions/${key}`);

export const getCompetitionsOnceFromDb = (limitToLast = 0) => {
    // TODO: Debating on('value') or once('value')
    if (limitToLast > 0) {
        return getCompetitionsRef().limitToLast(limitToLast).once('value');
    }
    return getCompetitionsRef().once('value');
};

export const generateKeyForCompetitionFromDb = () => getCompetitionsRef().push().key;

export const addCompetitionToDb = (competitionModel) => {
    const { id } = competitionModel;
    return getCompetitionRef(id).set(competitionModel);
};

export const removeCompetitionFromDb = id => getCompetitionRef(id).remove();
