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
        const expectedError = new Error('undefined does not exist in users database');

        return userDbAdapter.getUserOnceFromDb().catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });

    it('should fail if id is not found', () => {
        const expectedError = new Error('idnotmatch does not exist in users database');

        return userDbAdapter.getUserOnceFromDb('idnotmatch').catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('add user to db', () => {
    it('should success for a valid user', () => {
        return userDbAdapter.addUserToDb(user0).then(() => {
            // TODO
        });
    });

    it('should fail if user does not have a valid id', () => {
        const expectedError = new Error('input model must have a valid id');

        return userDbAdapter.addUserToDb(userWithoutId).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('update user to db', () => {
    it('should success for a valid update user', () => {
        return userDbAdapter.updateUserToDb(user0Update).then(() => {
            // TODO
        });
    });

    it('should fail if update user does not have a valid id', () => {
        const expectedError = new Error('update model must have a valid id');

        return userDbAdapter.updateUserToDb(userWithoutId).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });

    it('should fail if update user id does not exist in db', () => {
        return userDbAdapter.updateUserToDb(userIdNotFound).then((error) => {
            // TODO
        });
    });
});
