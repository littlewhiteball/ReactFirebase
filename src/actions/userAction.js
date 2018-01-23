import usersDbAdapter from './../database/usersDbAdapter';
import userReduxModel from './../reduxModels/userReduxModel';

const dbModelToReduxModel = dbModel => userReduxModel(
    dbModel.id,
    dbModel.name,
    dbModel.email,
);

const USER_GET = 'USER_GET';
const USER_ADDING = 'USER_ADDING';
const USER_ADDED = 'USER_ADDED';
const USER_ADD_FAILED = 'USER_ADD_FAILED';
const USER_UPDATING = 'USER_UPDATING';
const USER_UPDATED = 'USER_UPDATED';
const USER_UPDATE_FAILED = 'USER_UPDATE_FAILED';

export const actionTypes = {
    USER_GET,
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

export const addUser = user =>
    (dispatch) => {
        dispatch(userAddingAction());

        const model = userReduxModel(
            user.id,
            user.name,
            user.email,
        );
        return usersDbAdapter.addUserToDb(model).then(() => {
            dispatch(userAddedAction(model));
        }).catch((error) => {
            console.error(error);

            dispatch(userAddFailedAction());
        });
    };

export const updateUser = user =>
    (dispatch) => {
        dispatch(userUpdatingAction());

        // TODO: only updated fields
        const updateModel = userReduxModel(
            user.id,
            user.name,
            user.email,
        );
        return usersDbAdapter.updateUserToDb(updateModel).then(() => {
            dispatch(userUpdatedAction());
        }).catch((error) => {
            console.error(error);

            dispatch(userUpdateFailedAction());
        });
    };
