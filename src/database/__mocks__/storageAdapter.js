/**
 * This mock is needed as firebase storage API does not support nodeJs
 * resulting all modules that reference storageAdapter fail
 */
import * as testConstants from './../../__tests_constants__';

const addProfilePhotoToStorage = (userId, file) =>
    new Promise((resolve, reject) => {
        // eslint-disable-next-line max-len
        if (userId === testConstants.user0.id && file.name === testConstants.profilePhotoFile.name) {
            const snapshot = {
                downloadURL: testConstants.profilePhotoFromStorage1.downloadURL,
            };
            resolve(snapshot);
        } else {
            const error = new Error('add profile photo failed on storage');
            reject(error);
        }
    });

export default {
    addProfilePhotoToStorage,
};

