import { firebaseApp } from './../firebase';
import usersDbModel from './models/usersDbModel';

const reduxModelToDbModel = reduxModel => usersDbModel(
    reduxModel.id,
    reduxModel.name,
    reduxModel.email,
);

const getUserRef = key => firebaseApp.database().ref(`/users/${key}`);

const addUserToDb = (userReduxModel) => {
    const dbModel = reduxModelToDbModel(userReduxModel);
    const { id } = dbModel;
    return getUserRef(id).set(dbModel);
};

const updateUserToDb = (userUpdateModel) => {
    // TODO: validations
    // TODO: Find a way to convert update model to db model
    const { id } = userUpdateModel;
    return getUserRef(id).update(userUpdateModel);
};

export default {
    addUserToDb,
    updateUserToDb,
};
