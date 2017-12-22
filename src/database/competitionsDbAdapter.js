import firebase from './../firebase';

const getCompetitionsRef = () => firebase.database().ref('/competitions');

const getCompetitionRef = key => firebase.database().ref(`/competitions/${key}`);

export const getCompetitionsOnceFromDb = (limitToLast = 0) => {
    if (limitToLast > 0) {
        return getCompetitionsRef().limitToLast(limitToLast).once('value');
    }
    return getCompetitionsRef().once('value');
};

export const pushCompetitionToDb = () => getCompetitionsRef().push();

export const addCompetitionToDb = (competitionModel) => {
    const { id } = competitionModel;
    return getCompetitionRef(id).set(competitionModel);
};

export const removeCompetitionFromDb = id => getCompetitionRef(id).remove();
