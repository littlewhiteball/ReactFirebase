import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { user } from './../../__tests_constants__';

import * as actions from './../usersAction';

jest.mock('./../../database/usersDbAdapter');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('userSigningInActionAction', () => {
    it('should create action to indicate user is being signedIn', () => {
        const expectedAction = {
            type: 'USER_SIGNINGIN',
        };

        expect(actions.userSigningInAction()).toEqual(expectedAction);
    });
});

describe('userSignedInActionAction', () => {
    it('should create action to indicate user is signedIn', () => {
        const expectedAction = {
            type: 'USER_SIGNEDIN',
        };

        expect(actions.userSignedInAction()).toEqual(expectedAction);
    });
});

describe('userSignInFailedActionAction', () => {
    it('should create action to indicate user is not signedIn', () => {
        const expectedAction = {
            type: 'USER_SIGNINFAILED',
        };

        expect(actions.userSignInFailedAction()).toEqual(expectedAction);
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
        return store.dispatch(actions.signInEmailPassword('email@me.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should 1.create signingIn action 2.sign in with email and password 3.sign in should fail 4.create signInFailed action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            { type: 'USER_SIGNINFAILED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInEmailPassword('wrongemail', 'wrongpassword')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signInGoogle', () => {
    it('should 1.create signingIn action 2.sign in with google 3.create signedIn action', () => {
        const expectedActions = [
            { type: 'USER_SIGNINGIN' },
            { type: 'USER_SIGNEDIN' },
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
            { type: 'USER_SIGNEDIN' },
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
            { type: 'USER_SIGNEDIN' },
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
