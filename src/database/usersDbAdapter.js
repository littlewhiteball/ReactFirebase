import firebase, { firebaseApp } from './../firebase';

const getUserRef = key => firebaseApp.database().ref(`/users/${key}`);

/**
 * auth
 */

const signInWithPopup = provider => firebase.auth().signInWithPopup(provider);

const createUserWithEmailAndPassword = (email, password) =>
    // TODO: validate email and password
    firebase.auth().createUserWithEmailAndPassword(email, password);

const signInWithEmailAndPassword = (email, password) =>
    // TODO: validate email regex
    firebase.auth().signInWithEmailAndPassword(email, password);

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return signInWithPopup(provider);
};

const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return signInWithPopup(provider);
};

const signInWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return signInWithPopup(provider);
};

const signOut = () => {
    // TODO: throw if not signed in
    console.info('signed out');
    return firebase.auth().signOut();
};

/**
 * user
 */

const addUserToDb = (userModel) => {
    const { id } = userModel;
    return getUserRef(id).set(userModel);
};

const updateUserToDb = (userUpdateModel) => {
    // TODO: validations
    const { id } = userUpdateModel;
    return getUserRef(id).update(userUpdateModel);
};

/**
 * export
 */

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
