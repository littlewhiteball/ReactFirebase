import { user, users } from './../../__tests_constants__';

const addUserToDb = userModel =>
    new Promise((resolve, reject) => {
        // id undefined is one type of error
        if (!userModel.id) {
            const error = new Error('user model does not have a valid id');
            reject(error);
        } else {
            users.push(userModel);
            resolve();
        }
    });

const updateUserToDb = userUpdateModel =>
    new Promise((resolve, reject) => {
        const index = users.findIndex(u => u.id === userUpdateModel.id);
        if (index !== -1) {
            Object.keys(userUpdateModel).forEach((key) => {
                users[key] = userUpdateModel[key];
            });
            resolve();
        } else {
            const error = new Error(`${user} is not found in database`);
            reject(error);
        }
    });

export default {
    addUserToDb,
    updateUserToDb,
};
