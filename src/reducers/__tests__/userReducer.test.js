import userReducer from './../userReducer';
import { actionTypes } from './../../actions/userAction';
import { user0 } from './../../__tests_constants__';

const initialState = {
    id: '',
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

describe('user sign out', () => {
    it('should return initial user with empty id', () => {
        const expectedState = initialState;
        const action = {
            type: actionTypes.USER_SIGN_OUT,
        };

        expect(userReducer(user0, action)).toEqual(expectedState);
    });
});
