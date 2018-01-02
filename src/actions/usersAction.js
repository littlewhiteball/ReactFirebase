import { signInWithEmailAndPassword, signInWithGoogle, signInWithFacebook, signInWithTwitter } from './../database/usersDbAdapter';

export const USER_AUTHORIZING = 'USER_AUTHORIZING';
export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED';
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

export const userAuthorizing = () => ({
    type: USER_AUTHORIZING,
});

export const userAuthorized = () => ({
    type: USER_AUTHORIZED,
});

export const userUnauthorized = () => ({
    type: USER_UNAUTHORIZED,
});

export const signInEmailPassword = (email, password) =>
    (dispatch) => {
        dispatch(userAuthorizing());

        return signInWithEmailAndPassword(email, password).then((user) => {
            console.info(`${user.name} signed in`);

            dispatch(userAuthorized());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorized());
        });
    };

export const signInGoogle = () =>
    (dispatch) => {
        dispatch(userAuthorizing());

        return signInWithGoogle().then((result) => {
            const { user } = result;
            const { accessToken } = result.credential;
            console.info(user);
            console.info(accessToken);

            dispatch(userAuthorized());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorized());
        });
    };

export const signInFacebook = () =>
    (dispatch) => {
        dispatch(userAuthorizing());

        return signInWithFacebook().then((result) => {
            const { user } = result;
            const { accessToken } = result.credential;
            console.info(user);
            console.info(accessToken);

            dispatch(userAuthorized());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorized());
        });
    };

export const signInTwitter = () =>
    (dispatch) => {
        dispatch(userAuthorizing());

        return signInWithTwitter().then((result) => {
            const { accessToken, secret } = result.credential;
            console.info(accessToken);
            console.info(secret);

            dispatch(userAuthorized());
        }).catch((error) => {
            const { code, method } = error;
            console.error(code, method);

            dispatch(userUnauthorized());
        });
    };
