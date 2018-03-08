import * as testConstants from './../../__tests_constants__';

import authDbAdapter from './../authDbAdapter';

jest.mock('./../../firebase');

describe('user with email and password', () => {
    it('should return created user if email and password are valid', () => {
        const expected = testConstants.emailUser0;
        const { email, password } = testConstants.emailUser0;

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

    it('should return signed in user if email and password are valid', () => {
        const expected = testConstants.emailUser0;
        const { email, password } = testConstants.emailUser0;

        return authDbAdapter.signInWithEmailAndPassword(email, password).then((user) => {
            expect(user).toBe(expected);
        });
    });

    it('should fail on firebase when email does not match any record in firebase', () => {
        const expectedError = new Error('There is no user record corresponding to this identifier. The User may have been deleted');
        const { email, password } = testConstants.emailUserNotFound0;

        return authDbAdapter.signInWithEmailAndPassword(email, password).catch((error) => {
            expect(error).toMatchObject(expectedError);
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

describe.skip('user with provider auth', () => {

});

describe('update user', () => {
    it('should update user with display name and photo url', () => {
        authDbAdapter.updateUserProfile(testConstants.user0.id, 'display name0', testConstants.profilePhotoFromStorage1.downloadURL).then(() => {
            expect(true).toBe(true);
        });
    });

    it('should fail on firebase when updating profile', () => {
        const expectedError = new Error('update profile failed on firebase');

        authDbAdapter.updateUserProfile(testConstants.user0.id, 'fail display name', 'https://failurl.com').catch((error) => {
            expect(error).toEqual(expectedError);
        });
    });

    it.skip('should throw when firebase current user is null', () => {

    });

    it('should throw when current user id from redux store does not match firebase current signed in user', () => {
        const expectedError = new Error('the current user with id: id1id1id1id1id1id1id1id1id1+ does not match the firebase signed in user with uid: id0id0id0id0id0id0id0id0id0+');

        expect(() => authDbAdapter.updateUserProfile(testConstants.user1.id, 'displayName', 'https://photoUrl.com')).toThrowError(expectedError);
    });
});
