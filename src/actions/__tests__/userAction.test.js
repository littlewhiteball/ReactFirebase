import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { emailUser0, user0FromDb, user0, user0Update, userIdNotFound, userWithoutId } from './../../__tests_constants__';

import * as actions from './../userAction';

jest.mock('./../../firebase');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('userGetAction', () => {
    it('should create action to indicate get user is complete', () => {
        const expectedAction = {
            type: 'USER_GET',
            user: {
                id: 'id0id0id0id0id0id0id0id0id0+',
                name: 'name0',
                email: 'email0@me0.com',
            },
        };

        expect(actions.userGetAction(user0)).toEqual(expectedAction);
    });
});

describe('userAddAction', () => {
    it('should create action to indicate get user is added', () => {
        const expectedAction = {
            type: 'USER_ADD',
            user: {
                id: 'id0id0id0id0id0id0id0id0id0+',
                name: 'name0',
                email: 'email0@me0.com',
            },
        };

        expect(actions.userAddAction(user0)).toEqual(expectedAction);
    });
});

describe('userUpdateAction', () => {
    it('should create action to indicate get user is updated', () => {
        const expectedAction = {
            type: 'USER_UPDATE',
            userUpdate: {
                id: 'id0id0id0id0id0id0id0id0id0+',
                name: 'name0update',
                email: 'email0@me0.com',
            },
        };

        expect(actions.userUpdateAction(user0Update)).toEqual(expectedAction);
    });
});

describe('userSignOutAction', () => {
    it('should create action to indicate user has signed out', () => {
        const expectedAction = {
            type: 'USER_SIGN_OUT',
        };

        expect(actions.userSignOutAction()).toEqual(expectedAction);
    });
});

describe('getUser', () => {
    it('should 1.get user from database 2.create user get action', () => {
        const expectedActions = [
            {
                type: 'USER_GET',
                user: {
                    id: 'id0id0id0id0id0id0id0id0id0+',
                    name: 'name0',
                    email: 'email0@me0.com',
                },
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.getUser(user0.id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should not create any action when user id is undefined', () => {
        const expectedActions = [];

        const store = mockStore({});
        return store.dispatch(actions.getUser(undefined)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should not create any action when user id does not exist', () => {
        const expectedActions = [];

        const store = mockStore({});
        return store.dispatch(actions.getUser('notexist')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('addUser', () => {
    it('should 1.add user which has email as name to database 2.create add action', () => {
        const expectedActions = [
            {
                type: 'USER_ADD',
                user: Object.assign({}, user0FromDb, {
                    name: user0FromDb.email,
                }),
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.addUser(emailUser0)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should not create any action when user id is not valid', () => {
        const expectedActions = [
        ];

        const store = mockStore({});
        return store.dispatch(actions.addUser(userWithoutId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('updateUser', () => {
    it('should 1.update user to database 2.create update action', () => {
        const expectedActions = [
            {
                type: 'USER_UPDATE',
                userUpdate: {
                    id: 'id0id0id0id0id0id0id0id0id0+',
                    name: 'name0update',
                },
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.updateUser(user0Update)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should not create any action when user id is not found', () => {
        const expectedActions = [
        ];

        const store = mockStore({});
        return store.dispatch(actions.updateUser(userIdNotFound)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('signOutUser', () => {
    it('should 1.sign out user 2.create sign out action', () => {
        const expectedActions = [
            {
                type: 'USER_SIGN_OUT',
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.signOutUser()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
