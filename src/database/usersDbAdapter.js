import { firebaseApp } from './../firebase';

const signInWithPopup = provider => firebaseApp.auth().signInWithPopup(provider);

const signInWithEmailAndPassword = (email, password) =>
    // TODO: validate email regex
    firebaseApp.auth().signInWithEmailAndPassword(email, password);

const signInWithGoogle = () => {
    const provider = new firebaseApp.auth.GoogleAuthProvider();
    return signInWithPopup(provider);
};

const signInWithFacebook = () => {
    const provider = new firebaseApp.auth.FacebookAuthProvider();
    return signInWithPopup(provider);
};

const signInWithTwitter = () => {
    const provider = new firebaseApp.auth.TwitterAuthProvider();
    return signInWithPopup(provider);
};

const signOut = () =>
    // TODO: throw if not signed in
    firebaseApp.auth().signOut();

export default {
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut,
};
