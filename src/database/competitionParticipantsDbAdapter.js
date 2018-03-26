import { firebaseApp } from './../firebase';

const getCompetitionParticipantRef = key => firebaseApp.database().ref(`/competitionParticipants/${key}`);

const getCompetitionParticipantOnceFromDb = competitionId => getCompetitionParticipantRef(competitionId).once('value');

const addCompetitionParticipantToDb = (competitionParticipantDbModel) => {
    const { competitionId } = competitionParticipantDbModel;
    return getCompetitionParticipantRef(competitionId).set(competitionParticipantDbModel);
};

// TODO: Add competitionParticipant and update competitionParticipant is same thing

// TODO: currently the only update is to add a user
const updateCompetitionParticipantToDb = async (competitionParticipantUpdateDbModel) => {
    const { competitionId } = competitionParticipantUpdateDbModel;

    try {
        const snapshot = await getCompetitionParticipantRef(competitionId).once('value');
        // Check if id already exists in database
        if (snapshot.exists()) {
            return getCompetitionParticipantRef(competitionId)
                .update(competitionParticipantUpdateDbModel);
        }

        return new Promise((resolve, reject) => {
            const error = new Error(`provided competition id: ${competitionId} does not exist in database. cannot update`);
            reject(error);
        });
    } catch (error) {
        console.error(error.message);
        // TODO: should throw
        throw error;
    }
};

const removeCompetitionParticipantFromDb =
    competitionId => getCompetitionParticipantRef(competitionId).remove();

export default {
    getCompetitionParticipantOnceFromDb,
    addCompetitionParticipantToDb,
    updateCompetitionParticipantToDb,
    removeCompetitionParticipantFromDb,
};
