import authDbAdapter from './../database/authDbAdapter';
import usersDbAdapter from './../database/usersDbAdapter';
import userReduxModel from './../reduxModels/userReduxModel';

const dbModelToReduxModel = dbModel => userReduxModel(
    dbModel.id,
    dbModel.name,
    dbModel.email,
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
            console.error(error);
        });

export const addUser = firebaseUser =>
    (dispatch) => {
        console.info('firebaseUser', firebaseUser);
        const model = userReduxModel(
            firebaseUser.uid,
            // use email as name before user updates it
            firebaseUser.email,
            firebaseUser.email,
        );
        return usersDbAdapter.addUserToDb(model).then(() => {
            dispatch(userAddAction(model));
        }).catch((error) => {
            console.error(error);
        });
    };

export const updateUser = user =>
    (dispatch) => {
        // TODO: decide on whether update all props or figure out how to update only changed props
        const updateModel = {
            id: user.id,
            name: user.name,
            email: user.email,
        };
        return usersDbAdapter.updateUserToDb(updateModel).then(() => {
            dispatch(userUpdateAction(updateModel));
        }).catch((error) => {
            console.error(error);
        });
    };

export const signOutUser = () =>
    dispatch =>
        authDbAdapter.signOut().then(() => {
            dispatch(userSignOutAction());
        }).catch((error) => {
            console.error(error);
        });
