import usersDbAdapter from './../database/usersDbAdapter';

const USER_SIGNINGIN = 'USER_SIGNINGIN';
const USER_SIGNEDIN = 'USER_SIGNEDIN';
const USER_SIGNINFAILED = 'USER_SIGNINFAILED';
const USER_SIGNINGOUT = 'USER_SIGNINGOUT';
const USER_SIGNEDOUT = 'USER_SIGNEDOUT';
const USER_SIGNOUTFAILED = 'USER_SIGNOUTFAILED';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

export const actionTypes = {
    USER_SIGNINGIN,
    USER_SIGNEDIN,
    USER_SIGNINFAILED,
    USER_SIGNINGOUT,
    USER_SIGNEDOUT,
    USER_SIGNOUTFAILED,
    UPDATE_USER_NAME,
};

export const userSigningInAction = () => ({
    type: USER_SIGNINGIN,
});

export const userSignedInAction = user => ({
    type: USER_SIGNEDIN,
    user,
});

export const userSignInFailedAction = () => ({
    type: USER_SIGNINFAILED,
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

        return usersDbAdapter.signInWithEmailAndPassword(email, password).then((user) => {
            console.info(`${user.name} signed in`);

            dispatch(userSignedInAction(user));
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userSignInFailedAction());
        });
    };

export const signInGoogle = () =>
    (dispatch) => {
        dispatch(userSigningInAction());

        return usersDbAdapter.signInWithGoogle().then((result) => {
            const { user } = result;
            const { accessToken } = result.credential;
            console.info(user);
            console.info(accessToken);

            dispatch(userSignedInAction());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userSignInFailedAction());
        });
    };

export const signInFacebook = () =>
    (dispatch) => {
        dispatch(userSigningInAction());

        return usersDbAdapter.signInWithFacebook().then((result) => {
            const { user } = result;
            const { accessToken } = result.credential;
            console.info(user);
            console.info(accessToken);

            dispatch(userSignedInAction());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userSignInFailedAction());
        });
    };

export const signInTwitter = () =>
    (dispatch) => {
        dispatch(userSigningInAction());

        return usersDbAdapter.signInWithTwitter().then((result) => {
            const { accessToken, secret } = result.credential;
            console.info(accessToken);
            console.info(secret);

            dispatch(userSignedInAction());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userSignInFailedAction());
        });
    };

export const signOutUser = () =>
    (dispatch) => {
        dispatch(userSigningOutAction());

        return usersDbAdapter.signOut().then(() => {
            dispatch(userSignedOutAction());
        }).catch((error) => {
            console.error(error);

            dispatch(userSignOutFailedAction());
        });
    };
