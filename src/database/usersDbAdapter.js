import { firebaseApp } from './../firebase';
import usersDbModel from './models/usersDbModel';

const reduxModelToDbModel = reduxModel => usersDbModel(
    reduxModel.id,
    reduxModel.name,
    reduxModel.email,
);

const getUserRef = key => firebaseApp.database().ref(`/users/${key}`);

// TODO: try catch on getUserRef, same for addUserToDb and updateUserToDb
const getUserOnceFromDb = userId => getUserRef(userId).once('value');

const addUserToDb = (reduxModel) => {
    const dbModel = reduxModelToDbModel(reduxModel);
    const { id } = dbModel;
    // TODO: if id exists, should warn as set will overwrite
    return getUserRef(id).set(dbModel);
};

const updateUserToDb = async (userUpdateModel) => {
    // TODO: validations
    // TODO: Find a way to convert update model to db model
    const { id } = userUpdateModel;

    try {
        const snapshot = await getUserRef(id).once('value');
        // Check if id already exists in database
        if (snapshot.exists()) {
            return getUserRef(id).update(userUpdateModel);
        }

        return new Promise((resolve, reject) => {
            const error = new Error(`provided user id: ${id} does not exist in database. cannot update on non-existing user`);
            reject(error);
        });
    } catch (error) {
        console.error(error);
        // TODO: should throw
        throw error;
    }
};

export default {
    getUserOnceFromDb,
    addUserToDb,
    updateUserToDb,
};
