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

/**
 * TODO: firebase uses auth as a function, so I need to mock firebase.auth()
 * However, in order to test this method, I also need to mock firebase.auth
 * as the namespace of TwitterAuthProvider class. I can't figure out how to
 * mock both a method and class namespace with the same name (auth).
 * A stack overflow thread with no answers...: https://stackoverflow.com/questions/45175599/mock-a-namespace-and-a-function-with-same-name-using-jest?stw=2
 * So this method will be mocked in the tests of its consumers.
 * I will test it later when I figure out how to mock firebase.auth.* classes
 */
const signInWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return signInWithPopup(provider);
};

// TODO: throw if not signed in
const signOut = () => firebase.auth().signOut();

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
