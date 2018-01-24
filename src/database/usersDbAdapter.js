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

const updateUserToDb = (userUpdateModel) => {
    // TODO: validations
    // TODO: Find a way to convert update model to db model
    const { id } = userUpdateModel;
    return getUserRef(id).update(userUpdateModel);
};

export default {
    getUserOnceFromDb,
    addUserToDb,
    updateUserToDb,
};
