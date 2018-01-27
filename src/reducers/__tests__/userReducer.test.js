import userReducer from './../userReducer';
import { actionTypes } from './../../actions/userAction';
import { user0, user0Update } from './../../__tests_constants__';

const initialState = {
    id: undefined,
    name: undefined,
    email: undefined,
};

describe('initial state', () => {
    it('should return undefined user', () => {
        const expectedState = initialState;

        expect(userReducer(undefined, {})).toEqual(expectedState);
    });
});

describe('user get', () => {
    it('should return user', () => {
        const expectedState = {
            id: 'id0id0id0id0id0id0id0id0id0+',
            name: 'name0',
            email: 'email0@me0.com',
        };
        const action = {
            type: actionTypes.USER_GET,
            user: user0,
        };

        expect(userReducer(undefined, action)).toEqual(expectedState);
    });
});

describe('user add', () => {
    it('should return user', () => {
        const expectedState = {
            id: 'id0id0id0id0id0id0id0id0id0+',
            name: 'name0',
            email: 'email0@me0.com',
        };
        const action = {
            type: actionTypes.USER_ADD,
            user: user0,
        };

        expect(userReducer(undefined, action)).toEqual(expectedState);
    });
});

describe('user update', () => {
    it('should return updated user', () => {
        const expectedState = {
            id: 'id0id0id0id0id0id0id0id0id0+',
            name: 'name0update',
            email: 'email0@me0.com',
        };
        const action = {
            type: actionTypes.USER_UPDATE,
            userUpdate: {
                id: 'id0id0id0id0id0id0id0id0id0+',
                name: 'name0update',
            },
        };

        expect(userReducer(user0, action)).toEqual(expectedState);
    });
});

describe('user adding', () => {
    it('should return undefined user', () => {
        const expectedState = initialState;
        const action = {
            type: actionTypes.USER_ADDING,
        };

        expect(userReducer(undefined, action)).toEqual(expectedState);
    });
});

describe('user added', () => {
    it('should return added user', () => {
        const expectedState = {
            id: 'id0id0id0id0id0id0id0id0id0+',
            name: 'name0',
            email: 'email0@me0.com',
        };
        const action = {
            type: actionTypes.USER_ADDED,
            user: user0,
        };

        expect(userReducer(undefined, action)).toEqual(expectedState);
    });
});

describe('user add failed', () => {
    it('should return undefined user', () => {
        const expectedState = initialState;
        const action = {
            type: actionTypes.USER_ADD_FAILED,
        };

        expect(userReducer(undefined, action)).toEqual(expectedState);
    });
});

describe('user updating', () => {
    it('should return current user that has not been updated', () => {
        const expectedState = {
            id: 'id0',
            name: 'name0',
            email: 'email0@me0.com',
        };

        const currentState = {
            id: 'id0',
            name: 'name0',
            email: 'email0@me0.com',
        };
        const action = {
            type: actionTypes.USER_UPDATING,
            user: user0Update,
        };

        expect(userReducer(currentState, action)).toEqual(expectedState);
    });
});

describe('user updated', () => {
    it('should return updated user', () => {
        const expectedState = {
            id: 'id0id0id0id0id0id0id0id0id0+',
            name: 'name0update',
            email: 'email0@me0.com',
        };

        const currentState = {
            id: 'id0',
            name: 'name0',
            email: 'email0@me0.com',
        };
        const action = {
            type: actionTypes.USER_UPDATED,
            user: user0Update,
        };

        expect(userReducer(currentState, action)).toEqual(expectedState);
    });
});

describe('user update failed', () => {
    it('should return current user that has failed to be updated', () => {
        const expectedState = {
            id: 'id0',
            name: 'name0',
            email: 'email0@me0.com',
        };

        const currentState = {
            id: 'id0',
            name: 'name0',
            email: 'email0@me0.com',
        };
        const action = {
            type: actionTypes.USER_UPDATE_FAILED,
            user: user0Update,
        };

        expect(userReducer(currentState, action)).toEqual(expectedState);
    });
});
