import { user, googleResult } from './../../__tests_constants__';

export const signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
        resolve(user);
    });
};

export const signInWithGoogle = () => {
    return new Promise((resolve, reject) => {
        resolve(googleResult);
    });
};

export const signInWithFacebook = () => {
    return new Promise((resolve, reject) => {
        resolve(user);
    });
};

export const signInWithTwitter = () => {
    return new Promise((resolve, reject) => {
        resolve(user);
    });
};
