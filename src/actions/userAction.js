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

const USER_ADDING = 'USER_ADDING';
const USER_ADDED = 'USER_ADDED';
const USER_ADD_FAILED = 'USER_ADD_FAILED';
const USER_UPDATING = 'USER_UPDATING';
const USER_UPDATED = 'USER_UPDATED';
const USER_UPDATE_FAILED = 'USER_UPDATE_FAILED';

export const actionTypes = {
    USER_GET,
    USER_ADD,
    USER_UPDATE,

    USER_ADDING,
    USER_ADDED,
    USER_ADD_FAILED,
    USER_UPDATING,
    USER_UPDATED,
    USER_UPDATE_FAILED,
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

export const userAddingAction = () => ({
    type: USER_ADDING,
});

export const userAddedAction = user => ({
    type: USER_ADDED,
    user,
});

export const userAddFailedAction = () => ({
    type: USER_ADD_FAILED,
});

export const userUpdatingAction = () => ({
    type: USER_UPDATING,
});

export const userUpdatedAction = () => ({
    type: USER_UPDATED,
});

export const userUpdateFailedAction = () => ({
    type: USER_UPDATE_FAILED,
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
        // TODO: right now it's only updating name field. Need to get update fields from user
        const updateModel = {
            id: user.id,
            name: user.name,
        };
        return usersDbAdapter.updateUserToDb(updateModel).then(() => {
            dispatch(userUpdateAction(updateModel));
        }).catch((error) => {
            console.error(error);
        });
    };
