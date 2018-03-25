import { firebaseApp } from './../firebase';

const getAllCompetitionsEntriesRef = () => firebaseApp.database().ref('/competitionEntries');

const getCompetitionEntriesRef = competitionId => firebaseApp.database().ref(`/competitionEntries/${competitionId}`);

const getCompetitionEntryRef = (competitionId, key) => firebaseApp.database().ref(`/competitionEntries/${competitionId}/${key}`);

const generateKeyForCompetitionEntryFromDb = () => getAllCompetitionsEntriesRef().push().key;

const getCompetitionEntriesOnceFromDb = competitionId => getCompetitionEntriesRef(competitionId).once('value');

const getCompetitionEntryOnceFromDb = (competitionId, key) => getCompetitionEntryRef(competitionId, key).once('value');

const addCompetitionEntryToDb = (competitionId, competitionEntry) => {
    const id = generateKeyForCompetitionEntryFromDb();

    return getCompetitionEntryRef(competitionId, id).set(competitionEntry);
};

// TODO: currently only updates: option, value, lastModified
const updateCompetitionEntryToDb = async (competitionId, entryId, competitionEntry) => {
    try {
        const snapshot = await getCompetitionEntryOnceFromDb(competitionId, entryId);
        if (snapshot.exists()) {
            return getCompetitionEntryRef(competitionId, entryId).update(competitionEntry);
        }

        return new Promise((resolve, reject) => {
            const error = new Error(`provided competition id: ${competitionId} and entry id: ${entryId} do not match any record in database. cannot update`);
            reject(error);
        });
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

const removeCompetitionEntriesFromDb =
    competitionId => getCompetitionEntriesRef(competitionId).remove();

const removeCompetitionEntryFromDb =
    (competitionId, id) => getCompetitionEntryRef(competitionId, id).remove();

export default {
    getCompetitionEntriesOnceFromDb,
    getCompetitionEntryOnceFromDb,
    addCompetitionEntryToDb,
    updateCompetitionEntryToDb,
    removeCompetitionEntriesFromDb,
    removeCompetitionEntryFromDb,
};
