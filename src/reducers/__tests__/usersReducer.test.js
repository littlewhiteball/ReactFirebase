import { user } from './../../__tests_constants__';
import usersReducer from './../usersReducer';
import { actionTypes } from './../../actions/usersAction';

const initialState = {
    name: undefined,
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

describe('user signingIn', () => {
    it('should return user signingIn state', () => {
        const expectedState = Object.assign({}, initialState, {
            signingIn: true,
        });
        const action = {
            type: actionTypes.USER_SIGNINGIN,
        };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('user signedIn', () => {
    it('should return user signedIn state', () => {
        const expectedState = Object.assign({}, initialState, {
            name: 'name0',
            signingIn: false,
            signedIn: true,
        });
        const action = {
            type: actionTypes.USER_SIGNEDIN,
            user,
        };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('user unsignedIn', () => {
    it('should return user unsignedIn state', () => {
        const expectedState = Object.assign({}, initialState, {
            signingIn: false,
            signedIn: false,
        });
        const action = {
            type: actionTypes.USER_UNsignedIn,
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
