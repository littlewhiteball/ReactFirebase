import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { user, user0Update, userIdNotFound, userWithoutId } from './../../__tests_constants__';

import * as actions from './../usersAction';

jest.mock('./../../database/usersDbAdapter');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
