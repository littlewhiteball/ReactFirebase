import { firebaseApp } from './../firebase';

const getUserRef = key => firebaseApp.database().ref(`/users/${key}`);

const addUserToDb = (userModel) => {
    const { id } = userModel;
    return getUserRef(id).set(userModel);
};

const updateUserToDb = (userUpdateModel) => {
    // TODO: validations
    const { id } = userUpdateModel;
    return getUserRef(id).update(userUpdateModel);
};

export default {
    addUserToDb,
    updateUserToDb,
};
