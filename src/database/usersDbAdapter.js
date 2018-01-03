import { firebaseApp } from './../firebase';

const signInWithPopup = provider => firebaseApp.auth().signInWithPopup(provider);

export const signInWithEmailAndPassword = (email, password) =>
    // TODO: validate email regex
    firebaseApp.auth().signInWithEmailAndPassword(email, password);

export const signInWithGoogle = () => {
    const provider = new firebaseApp.auth.GoogleAuthProvider();
    return signInWithPopup(provider);
};

export const signInWithFacebook = () => {
    const provider = new firebaseApp.auth.FacebookAuthProvider();
    return signInWithPopup(provider);
};

export const signInWithTwitter = () => {
    const provider = new firebaseApp.auth.TwitterAuthProvider();
    return signInWithPopup(provider);
};
