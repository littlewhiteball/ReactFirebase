import { user } from './../../__tests_constants__';
import usersReducer from './../usersReducer';
import { actionTypes } from './../../actions/usersAction';

const initialState = {
    name: undefined,
    authorizing: false,
    authorized: false,
    signingIn: false,
    signedIn: false,
    signingOut: false,
    signedOut: false,
};


describe('intial state', () => {
    it('should return initial state', () => {
        const expectedState = initialState;

        expect(usersReducer(undefined, {})).toEqual(expectedState);
    });
});

describe('user authorizing', () => {
    it('should return user authorizing state', () => {
        const expectedState = Object.assign({}, initialState, {
            authorizing: true,
        });
        const action = {
            type: actionTypes.USER_AUTHORIZING,
        };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('user authorized', () => {
    it('should return user authorized state', () => {
        const expectedState = Object.assign({}, initialState, {
            name: 'name0',
            authorizing: false,
            authorized: true,
        });
        const action = {
            type: actionTypes.USER_AUTHORIZED,
            user,
        };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('user unauthorized', () => {
    it('should return user unauthorized state', () => {
        const expectedState = Object.assign({}, initialState, {
            authorizing: false,
            authorized: false,
        });
        const action = {
            type: actionTypes.USER_UNAUTHORIZED,
        };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('user signing out', () => {
    it('should return user signingout state', () => {
        const expectedState = Object.assign({}, initialState, {
            signingOut: true,
        });
        const action = {
            type: actionTypes.USER_SIGNINGOUT,
        };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('user signed out', () => {
    it('should return user signedout state', () => {
        const expectedState = Object.assign({}, initialState, {
            signingOut: false,
            signedOut: true,
        });
        const action = {
            type: actionTypes.USER_SIGNEDOUT,
        };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});
