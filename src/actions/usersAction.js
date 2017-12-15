export const USER_AUTHORIZING = 'USER_AUTHORIZING';
export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

export const userAuthorizing = () => ({
    type: USER_AUTHORIZING,
});

export const userAuthorized = () => ({
    type: USER_AUTHORIZED,
});

export const updateUserName = name => ({
    type: UPDATE_USER_NAME,
    name,
});
