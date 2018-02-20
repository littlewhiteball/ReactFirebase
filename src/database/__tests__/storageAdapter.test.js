import * as testConstants from './../../__tests_constants__';
import storageAdapter from './../storageAdapter';

jest.mock('./../../firebase');

describe('storage adapter', () => {
    it('should upload then return the profile photo from storage', () => {
        storageAdapter.addProfilePhotoToStorage(
            testConstants.user0.id,
            testConstants.profilePhotoFile,
        ).then((snapshot) => {
            expect(snapshot).toEqual(testConstants.profilePhotoFile);
        });
    });

    it('should fail on uploading profile photo to storage', () => {
        storageAdapter.addProfilePhotoToStorage(
            testConstants.user1.id,
            testConstants.profilePhotoFile,
        ).catch((error) => {
            const expectedError = new Error('failed to upload file to firebase storage');

            expect(error).toEqual(expectedError);
        });
    });
});
