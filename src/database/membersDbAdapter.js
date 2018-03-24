import { firebaseApp } from './../firebase';

// const getMembersRef = () => firebaseApp.database().ref('members');

const getMemberRef = key => firebaseApp.database().ref(`/members/${key}`);

// const generateKeyForMemberFromDb = () => getMembersRef().push().key;

const getMemberOnceFromDb = competitionId => getMemberRef(competitionId).once('value');

const addMemberToDb = (memberDbModel) => {
    const { competitionId } = memberDbModel;
    return getMemberRef(competitionId).set(memberDbModel);
};

// TODO: currently the only update is to add a user
const updateMemberToDb = async (memberUpdateDbModel) => {
    const { competitionId } = memberUpdateDbModel;

    try {
        const snapshot = await getMemberRef(competitionId).once('value');
        // Check if id already exists in database
        if (snapshot.exists()) {
            return getMemberRef(competitionId).update(memberUpdateDbModel);
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

const removeMemberFromDb = competitionId => getMemberRef(competitionId).remove();

export default {
    getMemberOnceFromDb,
    addMemberToDb,
    updateMemberToDb,
    removeMemberFromDb,
};
