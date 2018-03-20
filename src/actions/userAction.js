import authDbAdapter from './../database/authDbAdapter';
import usersDbAdapter from './../database/usersDbAdapter';
import userReduxModel from './../reduxModels/userReduxModel';

const DEFAULT_PROFILE_PHOTO_URL = 'https://firebasestorage.googleapis.com/v0/b/freepolls-2a96d.appspot.com/o/default%2FprofilePhoto.jpg?alt=media&token=7d8114f9-3c23-4ee7-aa4e-994d6fc3fb06';

const dbModelToReduxModel = dbModel => userReduxModel(
    dbModel.id,
    dbModel.name,
    dbModel.email,
    dbModel.photoUrl,
);

const USER_GET = 'USER_GET';
const USER_ADD = 'USER_ADD';
const USER_UPDATE = 'USER_UPDATE';
const USER_SIGN_OUT = 'USER_SIGN_OUT';

export const actionTypes = {
    USER_GET,
    USER_ADD,
    USER_UPDATE,
    USER_SIGN_OUT,
};

export const userGetAction = user => ({
    type: USER_GET,
    user,
});

export const userAddAction = user => ({
    type: USER_ADD,
    user,
});

export const userUpdateAction = userUpdate => ({
    type: USER_UPDATE,
    userUpdate,
});

export const userSignOutAction = () => ({
    type: USER_SIGN_OUT,
});

export const getUser = userId =>
    dispatch =>
        usersDbAdapter.getUserOnceFromDb(userId).then((snapshot) => {
            const user = dbModelToReduxModel(snapshot.val());

            dispatch(userGetAction(user));
        }).catch((error) => {
            console.error(error.message);
        });

export const addUser = firebaseUser =>
    (dispatch) => {
        console.info('firebaseUser', firebaseUser);
        const model = userReduxModel(
            firebaseUser.uid,
            // use email as name before user updates it
            // TODO: third party login (e.g. Twitter) has display name
            firebaseUser.email,
            firebaseUser.email,
            DEFAULT_PROFILE_PHOTO_URL,
        );
        return usersDbAdapter.addUserToDb(model).then(() => {
            dispatch(userAddAction(model));
        }).catch((error) => {
            console.error(error.message);
        });
    };

export const updateUser = user =>
    (dispatch) => {
        // TODO: decide on whether update all props or figure out how to update only changed props
        const updateModel = {
            id: user.id,
            name: user.name,
            email: user.email,
            photoUrl: user.photoUrl,
        };

        authDbAdapter.updateUserProfile(user.id, user.photoUrl)
            .then(() => {
                console.log('user profile photo updated');
                // TODO: Update user to db
            });

        // TODO: The following can only happen when updateUserProfile succeeded
        return usersDbAdapter.updateUserToDb(updateModel).then(() => {
            dispatch(userUpdateAction(updateModel));
        }).catch((error) => {
            console.error(error.message);
        });
    };

export const signOutUser = () =>
    dispatch =>
        authDbAdapter.signOut().then(() => {
            dispatch(userSignOutAction());
        }).catch((error) => {
            console.error(error.message);
        });
