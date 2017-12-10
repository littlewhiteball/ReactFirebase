const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const USER_AUTHORIZING = 'USER_AUTHORIZING';
const USER_AUTHORIZED = 'USER_AUTHORIZED';

const updateUserName = (name) => ({
    type: UPDATE_USER_NAME,
    name
});


const userAuthorizing = () => ({
    type: USER_AUTHORIZING
});

const userAuthorized = () => ({
    type: USER_AUTHORIZED
});

export {
    updateUserName, userAuthorizing, userAuthorized
};
