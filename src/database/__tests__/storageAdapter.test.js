import * as testConstants from './../../__tests_constants__';
import storageAdapter from './../storageAdapter';

jest.mock('./../../firebase');

describe('storage adapter', () => {
    it('should upload then return the profile photo from storage', () => {
        storageAdapter.addProfilePhotoToStorage(
            testConstants.user0.id,
            testConstants.profilePhotoFile0,
        ).then((snapshot) => {
            expect(snapshot).toEqual(testConstants.profilePhotoFromStorage0);
        });
    });

    it('should fail on uploading profile photo to storage', () => {
        storageAdapter.addProfilePhotoToStorage(
            testConstants.user1.id,
            testConstants.profilePhotoFile0,
        ).catch((error) => {
            const expectedError = new Error('failed to upload file to firebase storage');

            expect(error).toEqual(expectedError);
        });
    });
});
