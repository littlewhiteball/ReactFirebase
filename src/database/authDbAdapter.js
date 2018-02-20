import firebase from './../firebase';

export const ERROR_AUTH_USER_NOT_FOUND = 'auth/user-not-found';

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

const updateUserProfile = (userId, displayName, photoUrl) => {
    const user = firebase.auth().currentUser;

    if (!user) {
        throw new Error('there is no signed in user');
    }

    if (user.uid !== userId) {
        throw new Error(`the current user with id: ${userId} does not match the firebase signed in user with uid: ${user.uid}`);
    }

    return user.updateProfile({
        displayName,
        photoUrl,
    });
};

export default {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut,
    updateUserProfile,
};
