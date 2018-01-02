import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './../usersAction';

jest.mock('./../../database/usersDbAdapter');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('userAuthorizingAction', () => {
    it('should create action to indicate user is being authorized', () => {
        const expectedAction = {
            type: 'USER_AUTHORIZING',
        };

        expect(actions.userAuthorizing()).toEqual(expectedAction);
    });
});

describe('userAuthorizedAction', () => {
    it('should create action to indicate user is authorized', () => {
        const expectedAction = {
            type: 'USER_AUTHORIZED',
        };

        expect(actions.userAuthorized()).toEqual(expectedAction);
    });
});

describe('userUnauthorizedAction', () => {
    it('should create action to indicate user is not authorized', () => {
        const expectedAction = {
            type: 'USER_UNAUTHORIZED',
        };

        expect(actions.userUnauthorized()).toEqual(expectedAction);
    });
});

describe('signInEmailPassword', () => {
    it('should 1.create authorizing action 2.sign in with email and password 3.create authorized action', () => {
        const expectedActions = [
            { type: 'USER_AUTHORIZING' },
            { type: 'USER_AUTHORIZED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInEmailPassword('email@me.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should 1.create authorizing action 2.sign in with email and password 3.sign in should fail 4.create unauthorized action', () => {
        const expectedActions = [
            { type: 'USER_AUTHORIZING' },
            { type: 'USER_UNAUTHORIZED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInEmailPassword('wrongemail', 'wrongpassword')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signInGoogle', () => {
    it('should 1.create authorizing action 2.sign in with google 3.create authorized action', () => {
        const expectedActions = [
            { type: 'USER_AUTHORIZING' },
            { type: 'USER_AUTHORIZED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInGoogle()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signInFacebook', () => {
    it('should 1.create authorizing action 2.sign in with facebook 3.create authorized action', () => {
        const expectedActions = [
            { type: 'USER_AUTHORIZING' },
            { type: 'USER_AUTHORIZED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInFacebook()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signInTwitter', () => {
    it('should 1.create authorizing action 2.sign in with twitter 3.create authorized action', () => {
        const expectedActions = [
            { type: 'USER_AUTHORIZING' },
            { type: 'USER_AUTHORIZED' },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signInTwitter()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
