import { user0FromDb, user0, userWithoutId, user0Update, userIdNotFound } from './../../__tests_constants__';

import userDbAdapter from './../usersDbAdapter';

jest.mock('./../../firebase');

describe('get user once from db', () => {
    it('should return one user if id is found', () => {
        const expected = user0FromDb;

        return userDbAdapter.getUserOnceFromDb('id0id0id0id0id0id0id0id0id0+').then((snapshot) => {
            expect(snapshot.val()).toBe(expected);
        });
    });

    it('should fail if id is undefined', () => {
        const expectedError = new Error('get user has failed on firebase database');

        return userDbAdapter.getUserOnceFromDb().catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });

    it('should fail if id is not found', () => {
        const expectedError = new Error('get user has failed on firebase database');

        return userDbAdapter.getUserOnceFromDb('idnotmatch').catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('add user to db', () => {
    it('should success for a valid user', () => {
        // firebase set returns an empty resolve promise.
        // so just need to test we can call then() after the promise is returned
        const expected = true;

        return userDbAdapter.addUserToDb(user0).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail if user does not have a valid id', () => {
        const expectedError = new Error('set user has failed on firebase database');

        return userDbAdapter.addUserToDb(userWithoutId).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('update user to db', () => {
    it('should success for a valid update user', () => {
        // firebase update returns an empty resolve promise.
        // so just need to test we can call then() after the promise is returned
        const expected = true;

        return userDbAdapter.updateUserToDb(user0Update).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should get correct message when failed on firebase', () => {
        // user id is found, but firebase failed to retrieve the correct record
        const expectedError = new Error('update user has failed on firebase database');

        // the failure is mocked by updating user0, as the assumption is:
        // use user0 to update user0 should fail...
        return userDbAdapter.updateUserToDb(user0).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });

    it('should fail if update user id does not exist in db', () => {
        const expectedError = new Error('provided user id: idnotfoundidnotfound----++++ does not exist in database. cannot update on non-existing user');

        return userDbAdapter.updateUserToDb(userIdNotFound).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});
