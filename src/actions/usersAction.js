import usersDbAdapter from './../database/usersDbAdapter';

const USER_AUTHORIZING = 'USER_AUTHORIZING';
const USER_AUTHORIZED = 'USER_AUTHORIZED';
const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED';
const USER_SIGNINGOUT = 'USER_SIGNINGOUT';
const USER_SIGNEDOUT = 'USER_SIGNEDOUT';
const USER_NOT_SIGNEDOUT = 'USER_NOT_SIGNEDOUT';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

export const actionTypes = {
    USER_AUTHORIZING,
    USER_AUTHORIZED,
    USER_UNAUTHORIZED,
    USER_SIGNINGOUT,
    USER_SIGNEDOUT,
    USER_NOT_SIGNEDOUT,
    UPDATE_USER_NAME,
};

export const userAuthorizingAction = () => ({
    type: USER_AUTHORIZING,
});

export const userAuthorizedAction = user => ({
    type: USER_AUTHORIZED,
    user,
});

export const userUnauthorizedAction = () => ({
    type: USER_UNAUTHORIZED,
});

export const userSigningOutAction = () => ({
    type: USER_SIGNINGOUT,
});

export const userSignedOutAction = () => ({
    type: USER_SIGNEDOUT,
});

export const userNotSignedOutAction = () => ({
    type: USER_NOT_SIGNEDOUT,
});

export const signInEmailPassword = (email, password) =>
    (dispatch) => {
        dispatch(userAuthorizingAction());

        return usersDbAdapter.signInWithEmailAndPassword(email, password).then((user) => {
            console.info(`${user.name} signed in`);

            dispatch(userAuthorizedAction(user));
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorizedAction());
        });
    };

export const signInGoogle = () =>
    (dispatch) => {
        dispatch(userAuthorizingAction());

        return usersDbAdapter.signInWithGoogle().then((result) => {
            const { user } = result;
            const { accessToken } = result.credential;
            console.info(user);
            console.info(accessToken);

            dispatch(userAuthorizedAction());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorizedAction());
        });
    };

export const signInFacebook = () =>
    (dispatch) => {
        dispatch(userAuthorizingAction());

        return usersDbAdapter.signInWithFacebook().then((result) => {
            const { user } = result;
            const { accessToken } = result.credential;
            console.info(user);
            console.info(accessToken);

            dispatch(userAuthorizedAction());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorizedAction());
        });
    };

export const signInTwitter = () =>
    (dispatch) => {
        dispatch(userAuthorizingAction());

        return usersDbAdapter.signInWithTwitter().then((result) => {
            const { accessToken, secret } = result.credential;
            console.info(accessToken);
            console.info(secret);

            dispatch(userAuthorizedAction());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorizedAction());
        });
    };

export const signOutUser = () =>
    (dispatch) => {
        dispatch(userSigningOutAction());

        return usersDbAdapter.signOut().then(() => {
            dispatch(userSignedOutAction());
        }).catch((error) => {
            console.error(error);

            dispatch(userNotSignedOutAction());
        });
    };
