import { firebase } from './../firebase';

const signInWithPopup = provider => firebase.auth().signInWithPopup(provider);

export const signInWithEmailAndPassword = (email, password) =>
    // TODO: validate email regex
    firebase.auth().signInWithEmailAndPassword(email, password);

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return signInWithPopup(provider);
};

export const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return signInWithPopup(provider);
};

export const signInWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return signInWithPopup(provider);
};
