import { user, users, googleResult, facebookResult, twitterResult } from './../../__tests_constants__';

const createUserWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
        if (email === 'usernotfound@me.com' && password === 'usernotfoundpassword') {
            resolve(user);
        } else {
            const error = new Error('sign up failed');
            // error.code = ...
            reject(error);
        }
    });

const signInWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
        if (email === 'email@me.com' && password === 'password0') {
            resolve(user);
        } else if (email === 'email@me.com' && password !== 'password0') {
            const error = new Error('wrong password');
            error.code = 'auth/wrong-password';
            reject(error);
        } else if (email === 'usernotfound@me.com') {
            // TODO: design ErrorCode - ErrorMessage map
            // TODO: create sub class of Error to include code and method as properties
            const error = new Error('user not found');
            error.code = 'auth/user-not-found';
            reject(error);
        }
    });

const signInWithGoogle = () =>
    new Promise((resolve) => {
        resolve(googleResult);
    });

const signInWithFacebook = () =>
    new Promise((resolve) => {
        resolve(facebookResult);
    });

const signInWithTwitter = () =>
    new Promise((resolve) => {
        resolve(twitterResult);
    });

const signOut = () =>
    new Promise((resolve) => {
        resolve();

        // TODO: figure out how to reject();
    });

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
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut,

    addUserToDb,
    updateUserToDb,
};
