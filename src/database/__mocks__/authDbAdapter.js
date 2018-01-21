import { user, googleResult, facebookResult, twitterResult } from './../../__tests_constants__';

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

export default {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut,
};
