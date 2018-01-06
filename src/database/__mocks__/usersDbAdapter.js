import { user, googleResult, facebookResult, twitterResult } from './../../__tests_constants__';

const signInWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
        if (email === 'email@me.com' && password === 'password') {
            resolve(user);
        } else {
            // TODO: design ErrorCode - ErrorMessage map
            // TODO: create sub class of Error to include code and method as properties
            reject({
                code: 'email and password did not have a match in our record',
                method: 'some method',
            });
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
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut,
};
