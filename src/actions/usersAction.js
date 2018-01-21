import usersDbAdapter from './../database/usersDbAdapter';
import userModel from './../models/usersModel';

const USER_ADDING = 'USER_ADDING';
const USER_ADDED = 'USER_ADDED';
const USER_ADD_FAILED = 'USER_ADD_FAILED';
const USER_UPDATING = 'USER_UPDATING';
const USER_UPDATED = 'USER_UPDATED';
const USER_UPDATE_FAILED = 'USER_UPDATE_FAILED';

export const actionTypes = {
    USER_ADDING,
    USER_ADDED,
    USER_ADD_FAILED,
    USER_UPDATING,
    USER_UPDATED,
    USER_UPDATE_FAILED,
};

export const userAddingAction = () => ({
    type: USER_ADDING,
});

export const userAddedAction = () => ({
    type: USER_ADDED,
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

export const addUser = user =>
    (dispatch) => {
        dispatch(userAddingAction());

        const model = userModel(
            user.id,
            user.name,
            user.email,
        );
        return usersDbAdapter.addUserToDb(model).then(() => {
            dispatch(userAddedAction());
        }).catch((error) => {
            console.error(error);

            dispatch(userAddFailedAction());
        });
    };

export const updateUser = user =>
    (dispatch) => {
        dispatch(userUpdatingAction());

        // TODO: only updated fields
        const updateModel = userModel(
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
