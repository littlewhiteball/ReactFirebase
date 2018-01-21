import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { user, user0Update, userIdNotFound, userWithoutId } from './../../__tests_constants__';

import * as actions from './../usersAction';

jest.mock('./../../database/usersDbAdapter');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('userSigningInAction', () => {
    it('should create action to indicate user is signing in', () => {
        const expectedAction = {
            type: 'USER_SIGNINGIN',
        };

        expect(actions.userSigningInAction()).toEqual(expectedAction);
    });
});

describe('userSignedInAction', () => {
    it('should create action to indicate user is signed in', () => {
        const expectedAction = {
            type: 'USER_SIGNEDIN',
        };

        expect(actions.userSignedInAction()).toEqual(expectedAction);
    });
});

describe('userSignInFailedAction', () => {
    it('should create action to indicate user is failed to sign in', () => {
        const expectedAction = {
            type: 'USER_SIGNINFAILED',
        };

        expect(actions.userSignInFailedAction()).toEqual(expectedAction);
    });
});

describe('userSigningUpAction', () => {
    it('should create action to indicate user is signing up', () => {
        const expectedAction = {
            type: 'USER_SIGNINGUP',
        };

        expect(actions.userSigningUpAction()).toEqual(expectedAction);
    });
});

describe('userSignedUpAction', () => {
    it('should create action to indicate user is signed up', () => {
        const expectedAction = {
            type: 'USER_SIGNEDUP',
        };

        expect(actions.userSignedUpAction()).toEqual(expectedAction);
    });
});

describe('userSignInFailedAction', () => {
    it('should create action to indicate user failed to sign up', () => {
        const expectedAction = {
            type: 'USER_SIGNUPFAILED',
        };

        expect(actions.userSignUpFailedAction()).toEqual(expectedAction);
    });
});

describe('userAddingAction', () => {
    it('should create action to indicate user is being added', () => {
        const expectedAction = {
            type: 'USER_ADDING',
        };

        expect(actions.userAddingAction()).toEqual(expectedAction);
    });
});

describe('userAddedAction', () => {
    it('should create action to indicate user is added', () => {
        const expectedAction = {
            type: 'USER_ADDED',
        };

        expect(actions.userAddedAction()).toEqual(expectedAction);
    });
});

describe('userAddFailedAction', () => {
    it('should create action to indicate add user has failed', () => {
        const expectedAction = {
            type: 'USER_ADD_FAILED',
        };

        expect(actions.userAddFailedAction()).toEqual(expectedAction);
    });
});

describe('userUpdatingAction', () => {
    it('should create action to indicate user is being updated', () => {
        const expectedAction = {
            type: 'USER_UPDATING',
        };

        expect(actions.userUpdatingAction()).toEqual(expectedAction);
    });
});

describe('userUpdatedAction', () => {
    it('should create action to indicate user is updated', () => {
        const expectedAction = {
            type: 'USER_UPDATED',
        };

        expect(actions.userUpdatedAction()).toEqual(expectedAction);
    });
});

describe('userUpdateFailedAction', () => {
    it('should create action to indicate update user has failed', () => {
        const expectedAction = {
            type: 'USER_UPDATE_FAILED',
        };

        expect(actions.userUpdateFailedAction()).toEqual(expectedAction);
    });
});


describe('signInEmailPassword', () => {
    it('should 1.create signingIn action 2.sign in with email and password 3.create signedIn action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            {
                type: 'USER_SIGNEDIN',
                user,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInEmailPassword('email@me.com', 'password0')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should 1.create signingIn action 2.sign in with email and password 3.sign in should fail with wrong password 4.create signInFailed action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            { type: 'USER_SIGNINFAILED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInEmailPassword('email@me.com', 'wrongpassword')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    const signUpWhenUserNotFoundTestCaseName = `
        1.create signingIn action
        2.sign in with email and password
        3.sign in should fail with user not found
        4.create signingUp action
        5.sign up with email and password
        6.create signedUp action
        7.create signedIn action
    `;
    it(signUpWhenUserNotFoundTestCaseName, () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            { type: 'USER_SIGNINGUP' },
            {
                type: 'USER_SIGNEDUP',
                user,
            },
            {
                type: 'USER_SIGNEDIN',
                user,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInEmailPassword('usernotfound@me.com', 'usernotfoundpassword')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signInGoogle', () => {
    it('should 1.create signingIn action 2.sign in with google 3.create signedIn action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            {
                type: 'USER_SIGNEDIN',
                user,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInGoogle()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signInFacebook', () => {
    it('should 1.create signingIn action 2.sign in with facebook 3.create signedIn action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            {
                type: 'USER_SIGNEDIN',
                user,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInFacebook()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signInTwitter', () => {
    it('should 1.create signingIn action 2.sign in with twitter 3.create signedIn action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            {
                type: 'USER_SIGNEDIN',
                user,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInTwitter()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signOutUser', () => {
    it('should 1.create signingout action 2.sign out 3.create signedout action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGOUT' },
            { type: 'USER_SIGNEDOUT' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signOutUser()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it.skip('should 1.create signingout action 2.sign out 3.sign out should fail 4.create not signedout action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGOUT' },
            { type: 'USER_SIGNOUTFAILED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signOutUser()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('addUser', () => {
    it('should 1.create adding action 2.add user to database 3.create added action', () => {
        const expectedActions = [
            { type: 'USER_ADDING' },
            { type: 'USER_ADDED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.addUser(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should 1.create adding action 2.add user to database 3.add user should fail 4.create add failed action', () => {
        const expectedActions = [
            { type: 'USER_ADDING' },
            { type: 'USER_ADD_FAILED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.addUser(userWithoutId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('updateUser', () => {
    it('should 1.create updating action 2.update user to database 3.create updated action', () => {
        const expectedActions = [
            { type: 'USER_UPDATING' },
            { type: 'USER_UPDATED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.updateUser(user0Update)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should 1.create updating action 2.update user to database 3.update should fail 4.create update failed action', () => {
        const expectedActions = [
            { type: 'USER_UPDATING' },
            { type: 'USER_UPDATE_FAILED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.updateUser(userIdNotFound)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
