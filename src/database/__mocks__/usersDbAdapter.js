import { user, googleResult, facebookResult, twitterResult } from './../../__tests_constants__';

export const signInWithEmailAndPassword = (email, password) =>
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

export const signInWithGoogle = () =>
    new Promise((resolve) => {
        resolve(googleResult);
    });

export const signInWithFacebook = () =>
    new Promise((resolve) => {
        resolve(facebookResult);
    });

export const signInWithTwitter = () =>
    new Promise((resolve) => {
        resolve(twitterResult);
    });
