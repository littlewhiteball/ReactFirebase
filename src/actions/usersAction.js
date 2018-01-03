import { signInWithEmailAndPassword, signInWithGoogle, signInWithFacebook, signInWithTwitter } from './../database/usersDbAdapter';

export const USER_AUTHORIZING = 'USER_AUTHORIZING';
export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED';
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

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

export const signInEmailPassword = (email, password) =>
    (dispatch) => {
        dispatch(userAuthorizingAction());

        return signInWithEmailAndPassword(email, password).then((user) => {
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

        return signInWithGoogle().then((result) => {
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

        return signInWithFacebook().then((result) => {
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

        return signInWithTwitter().then((result) => {
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
