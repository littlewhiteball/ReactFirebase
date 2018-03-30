import { firebaseApp } from './../firebase';

const getCompetitionEntriesRef = competitionId => firebaseApp.database().ref(`/competitionEntries/${competitionId}`);

const getCompetitionEntryRef = (competitionId, key) => firebaseApp.database().ref(`/competitionEntries/${competitionId}/${key}`);

const getCompetitionEntriesOnceFromDb = competitionId => getCompetitionEntriesRef(competitionId).once('value');

const getCompetitionEntryOnceFromDb = (competitionId, key) => getCompetitionEntryRef(competitionId, key).once('value');

const addCompetitionEntryToDb = (competitionId, competitionEntry) => {
    const { userId } = competitionEntry;

    return getCompetitionEntryRef(competitionId, userId).set(competitionEntry);
};

// TODO: currently only updates: option, value, lastModified
const updateCompetitionEntryToDb = async (competitionId, competitionEntry) => {
    try {
        const { userId } = competitionEntry;
        const snapshot = await getCompetitionEntryOnceFromDb(competitionId, userId);
        if (snapshot.exists()) {
            return getCompetitionEntryRef(competitionId, userId).update(competitionEntry);
        }

        return new Promise((resolve, reject) => {
            const error = new Error(`provided competition id: ${competitionId} and entry id: ${userId} do not match any record in database. cannot update`);
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
    (competitionId, userId) => getCompetitionEntryRef(competitionId, userId).remove();

export default {
    getCompetitionEntriesOnceFromDb,
    getCompetitionEntryOnceFromDb,
    addCompetitionEntryToDb,
    updateCompetitionEntryToDb,
    removeCompetitionEntriesFromDb,
    removeCompetitionEntryFromDb,
};
