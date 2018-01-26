import { emailUser0 } from './../../__tests_constants__';

import authDbAdapter from './../authDbAdapter';

jest.mock('./../../firebase');

describe('create user with email and password', () => {
    it('should return created user if email and password are valid', () => {
        const expected = emailUser0;
        const email = 'emailemailuser0@meemailuser0.com';
        const password = 'emailuser0password';

        return authDbAdapter.createUserWithEmailAndPassword(email, password).then((user) => {
            expect(user).toBe(expected);
        });
    });

    it('should fail on firebase when email and password are invalid', () => {
        const expectedError = new Error('create user failed on firebase');
        const email = 'emailemailuser1@meemailuser1.com';
        const password = 'emailuser1password';

        return authDbAdapter.createUserWithEmailAndPassword(email, password).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('sign in user with email and password', () => {
    it('should return signed in user if email and password are valid', () => {
        const expected = emailUser0;
        const email = 'emailemailuser0@meemailuser0.com';
        const password = 'emailuser0password';

        return authDbAdapter.signInWithEmailAndPassword(email, password).then((user) => {
            expect(user).toBe(expected);
        });
    });

    it('should fail on firebase when email and password are invalid', () => {
        const expectedError = new Error('sign in failed on firebase. email and password does not match a user');
        const email = 'emailemailuser1@meemailuser1.com';
        const password = 'emailuser1password';

        return authDbAdapter.signInWithEmailAndPassword(email, password).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('sign out', () => {
    it('should sign out successfully', () => {
        const expected = true;

        return authDbAdapter.signOut().then(() => {
            expect(true).toBe(expected);
        });
    });
});
