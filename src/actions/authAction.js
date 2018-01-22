import authDbAdapter from './../database/authDbAdapter';
import authReduxModel from './../reduxModels/authReduxModel';

const ERROR_AUTH_USER_NOT_FOUND = 'auth/user-not-found';

const USER_SIGNINGIN = 'USER_SIGNINGIN';
const USER_SIGNEDIN = 'USER_SIGNEDIN';
const USER_SIGNINFAILED = 'USER_SIGNINFAILED';
const USER_SIGNINGUP = 'USER_SIGNINGUP';
const USER_SIGNEDUP = 'USER_SIGNEDUP';
const USER_SIGNUPFAILED = 'USER_SIGNUPFAILED';
const USER_SIGNINGOUT = 'USER_SIGNINGOUT';
const USER_SIGNEDOUT = 'USER_SIGNEDOUT';
const USER_SIGNOUTFAILED = 'USER_SIGNOUTFAILED';

export const actionTypes = {
    USER_SIGNINGIN,
    USER_SIGNEDIN,
    USER_SIGNINFAILED,
    USER_SIGNINGUP,
    USER_SIGNINGOUT,
    USER_SIGNEDOUT,
    USER_SIGNOUTFAILED,
};

export const userSigningInAction = () => ({
    type: USER_SIGNINGIN,
});

export const userSignedInAction = auth => ({
    type: USER_SIGNEDIN,
    auth,
});

export const userSignInFailedAction = () => ({
    type: USER_SIGNINFAILED,
});

export const userSigningUpAction = () => ({
    type: USER_SIGNINGUP,
});

export const userSignedUpAction = auth => ({
    type: USER_SIGNEDUP,
    auth,
});

export const userSignUpFailedAction = () => ({
    type: USER_SIGNUPFAILED,
});

export const userSigningOutAction = () => ({
    type: USER_SIGNINGOUT,
});

export const userSignedOutAction = () => ({
    type: USER_SIGNEDOUT,
});

export const userSignOutFailedAction = () => ({
    type: USER_SIGNOUTFAILED,
});

export const signInEmailPassword = (email, password) =>
    (dispatch) => {
        dispatch(userSigningInAction());

        return authDbAdapter.signInWithEmailAndPassword(email, password).then((user) => {
            console.info(`${user.email} signed in`);

            const auth = authReduxModel(user.uid);
            dispatch(userSignedInAction(auth));
        }).catch((signInError) => {
            const { code } = signInError;
            if (code === ERROR_AUTH_USER_NOT_FOUND) {
                // user not found. should create new user
                dispatch(userSigningUpAction());

                authDbAdapter.createUserWithEmailAndPassword(email, password).then((user) => {
                    const auth = authReduxModel(user.uid);
                    dispatch(userSignedUpAction(auth));

                    console.info(`${user.email} created`);

                    dispatch(userSignedInAction(auth));
                }).catch((signUpError) => {
                    console.error(signUpError);

                    dispatch(userSignUpFailedAction());
                });
            } else {
                console.error(signInError);
                dispatch(userSignInFailedAction());
            }
        });
    };

export const signInGoogle = () =>
    (dispatch) => {
        dispatch(userSigningInAction());

        return authDbAdapter.signInWithGoogle().then((result) => {
            const { googleUser } = result;
            const { accessToken } = result.credential;
            console.info(googleUser);
            console.info(accessToken);

            const auth = authReduxModel(googleUser.uid);
            dispatch(userSignedInAction(auth));
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userSignInFailedAction());
        });
    };

export const signInFacebook = () =>
    (dispatch) => {
        dispatch(userSigningInAction());

        return authDbAdapter.signInWithFacebook().then((result) => {
            const { facebookUser } = result;
            const { accessToken } = result.credential;
            console.info(facebookUser);
            console.info(accessToken);

            const auth = authReduxModel(facebookUser.uid);
            dispatch(userSignedInAction(auth));
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userSignInFailedAction());
        });
    };

export const signInTwitter = () =>
    (dispatch) => {
        dispatch(userSigningInAction());

        return authDbAdapter.signInWithTwitter().then((result) => {
            const { twitterUser } = result;
            const { accessToken, secret } = result.credential;
            console.info(accessToken);
            console.info(secret);

            const auth = authReduxModel(twitterUser.uid);
            dispatch(userSignedInAction(auth));
        }).catch((error) => {
            console.error(error);
            // if (error.code == 'auth/account-exists-with-different-credential') {
            //     const auth = {
            //         userId: user.uid,
            //     };
            //     dispatch(userSignedInAction(user))
            // }

            dispatch(userSignInFailedAction());
        });
    };

export const signOutUser = () =>
    (dispatch) => {
        dispatch(userSigningOutAction());

        return authDbAdapter.signOut().then(() => {
            dispatch(userSignedOutAction());
        }).catch((error) => {
            console.error(error);

            dispatch(userSignOutFailedAction());
        });
    };
