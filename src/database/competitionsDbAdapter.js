import { firebaseApp } from './../firebase';
import competitionsDbModel from './../database/models/competitionsDbModel';

const reduxModelToDbModel = reduxModel => competitionsDbModel(
    reduxModel.id,
    reduxModel.title,
    reduxModel.description,
    reduxModel.start,
    reduxModel.closing,
    reduxModel.fulfillment,
    reduxModel.options,
);

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
    const dbModel = reduxModelToDbModel(competitionModel);
    const { id } = dbModel;
    return getCompetitionRef(id).set(dbModel);
};

const updateCompetitionToDb = async (competitionUpdateModel) => {
    const { id } = competitionUpdateModel;

    try {
        const snapshot = await getCompetitionRef(id).once('value');
        // Check if id already exists in database
        if (snapshot.exists()) {
            return getCompetitionRef(id).update(competitionUpdateModel);
        }

        return new Promise((resolve, reject) => {
            const error = new Error(`provided competition id: ${id} does not exist in database. cannot update`);
            reject(error);
        });
    } catch (error) {
        console.error(error);
        // TODO: should throw
        throw error;
    }
};

const removeCompetitionFromDb = id => getCompetitionRef(id).remove();

export default {
    getCompetitionsOnceFromDb,
    generateKeyForCompetitionFromDb,
    addCompetitionToDb,
    updateCompetitionToDb,
    removeCompetitionFromDb,
};
