/**
 * error messages in this mock class are mocking firebase database errors
 */

import * as testConstants from './../../__tests_constants__';

const usersRefFuncs = key => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    if (key === 'id0id0id0id0id0id0id0id0id0+') {
                        const snapshot = ({
                            val: () => testConstants.user0FromDb,
                            exists: () => true,
                        });
                        resolve(snapshot);
                    } else if (key === 'idnotfoundidnotfound----++++') {
                        const snapshot = ({
                            exists: () => false,
                        });
                        resolve(snapshot);
                    } else {
                        const error = new Error('get user has failed on firebase database');
                        reject(error);
                    }
                    break;
                }

                default: {
                    const error = new Error(`${eventType} is not a supported eventType by once method`);
                    reject(error);
                }
            }
        }),
    set: value =>
        new Promise((resolve, reject) => {
            if (value.id === 'id0id0id0id0id0id0id0id0id0+') {
                resolve();
            } else {
                const error = new Error('set user has failed on firebase database');
                reject(error);
            }
        }),
    update: values =>
        new Promise((resolve, reject) => {
            if (values.id === 'id0id0id0id0id0id0id0id0id0+' && values.name !== 'name0') {
                resolve();
            } else {
                const error = new Error('update user has failed on firebase database');
                reject(error);
            }
        }),
});

const competitionsRefFuncs = (key) => {
    if (key) {
        // single competition
        return ({
            once: eventType =>
                new Promise((resolve, reject) => {
                    switch (eventType) {
                        case 'value': {
                            if (key === testConstants.competition0FromDb.id) {
                                const snapshot = ({
                                    val: () => testConstants.competition0FromDb,
                                    exists: () => true,
                                });
                                resolve(snapshot);
                            } else if (key === testConstants.idNotFoundFromDb) {
                                const snapshot = ({
                                    exists: () => false,
                                });
                                resolve(snapshot);
                            } else {
                                const error = new Error('get competition has failed on firebase database');
                                reject(error);
                            }

                            break;
                        }

                        default: {
                            const error = new Error(`${eventType} is not a supported eventType by once method`);
                            reject(error);
                        }
                    }
                }),
            set: value =>
                new Promise((resolve, reject) => {
                    if (value.id === testConstants.competition0FromDb.id) {
                        resolve();
                    } else {
                        const error = new Error('set competition has failed on firebase database');
                        reject(error);
                    }
                }),
            update: values =>
                new Promise((resolve, reject) => {
                    if (values.id === testConstants.competition0FromDb.id
                        && values.title !== testConstants.competition0FromDb.title) {
                        resolve();
                    } else {
                        const error = new Error('update competition has failed on firebase database');
                        reject(error);
                    }
                }),
            remove: () =>
                new Promise((resolve, reject) => {
                    if (key === testConstants.competition0FromDb.id) {
                        resolve();
                    } else if (key === testConstants.idNotFoundFromDb) {
                        const error = new Error(`cannot remove competition with id: ${key} as it does not exist in database`);
                        reject(error);
                    } else {
                        const error = new Error('remove competition has failed on firebase database');
                        reject(error);
                    }
                }),
        });
    }

    // else: competitions
    return ({
        push: () => ({
            key: testConstants.competition0FromDb.id,
        }),
        limitToLast: () => ({
            // TODO: this is not tested
            once: eventType =>
                new Promise((resolve, reject) => {
                    switch (eventType) {
                        case 'value': {
                            const snapshot = ({
                                val: () => [
                                    testConstants.competition0FromDb,
                                    testConstants.competition1FromDb,
                                ],
                                exists: () => true,
                            });
                            resolve(snapshot);

                            // TODO: figure out how to mock reject
                            break;
                        }

                        default: {
                            const error = new Error(`${eventType} is not a supported eventType by once method`);
                            reject(error);
                        }
                    }
                }),
        }),
        once: eventType =>
            new Promise((resolve, reject) => {
                switch (eventType) {
                    case 'value': {
                        const snapshot = ({
                            val: () => [
                                testConstants.competition0FromDb,
                                testConstants.competition1FromDb,
                            ],
                            exists: () => true,
                        });
                        resolve(snapshot);

                        // TODO: figure out how to reject
                        break;
                    }

                    default: {
                        const error = new Error(`${eventType} is not a supported eventType by once method`);
                        reject(error);
                    }
                }
            }),
    });
};

const competitionParticipantsRefFuncs = key => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    const { competitionParticipant0FromDb } = testConstants.competitionParticipants;
                    if (key === testConstants.competition0FromDb.id) {
                        const snapshot = ({
                            val: () => competitionParticipant0FromDb,
                            exists: () => true,
                        });
                        resolve(snapshot);
                    } else if (key === testConstants.idNotFoundFromDb) {
                        const snapshot = ({
                            exists: () => false,
                        });
                        resolve(snapshot);
                    } else {
                        const error = new Error('get competitionParticipant has failed on firebase database');
                        reject(error);
                    }
                    break;
                }

                default: {
                    const error = new Error(`${eventType} is not a supported eventType by once method`);
                    reject(error);
                }
            }
        }),
    set: value =>
        new Promise((resolve, reject) => {
            if (value.competitionId === testConstants.competition0FromDb.id) {
                resolve();
            } else {
                const error = new Error('set competitionParticipant has failed on firebase database');
                reject(error);
            }
        }),
    update: values =>
        new Promise((resolve, reject) => {
            // update mock: add user2 to user list of competitionParticipant
            if (values.competitionId === testConstants.competition0FromDb.id
                && values[testConstants.user2FromDb.id] === true) {
                resolve();
            } else {
                const error = new Error('update competitionParticipant has failed on firebase database');
                reject(error);
            }
        }),
    remove: () =>
        new Promise((resolve, reject) => {
            const { competitionId }
                = testConstants.competitionParticipants.competitionParticipant0FromDb;
            if (key === competitionId) {
                resolve();
            } else if (key === testConstants.idNotFoundFromDb) {
                const error = new Error(`cannot remove competitionParticipant with competition id: ${key} as it does not exist in database`);
                reject(error);
            } else {
                const error = new Error('remove competitionParticipant has failed on firebase database');
                reject(error);
            }
        }),
});

const competitionEntriesRefFuncs = (key) => {
    if (key) {
        // entries for a single competition
        return ({
            once: eventType =>
                new Promise((resolve, reject) => {
                    switch (eventType) {
                        case 'value': {
                            console.log(key);
                            if (key === testConstants.competition0FromDb.id) {
                                const snapshot = ({
                                    val: () => {
                                        const result = {};
                                        // eslint-disable-next-line max-len
                                        result[testConstants.competitionEntry00Id] = testConstants.competitionEntry00;
                                        // eslint-disable-next-line max-len
                                        result[testConstants.competitionEntry01Id] = testConstants.competitionEntry01;
                                        return result;
                                    },
                                    exists: () => true,
                                });
                                resolve(snapshot);
                            } else if (key === testConstants.idNotFoundFromDb) {
                                const snapshot = ({
                                    exists: () => false,
                                });
                                resolve(snapshot);
                            } else {
                                const error = new Error('get competition entries has failed on firebase database');
                                reject(error);
                            }

                            break;
                        }

                        default: {
                            const error = new Error(`${eventType} is not a supported eventType by once method`);
                            reject(error);
                        }
                    }
                }),
            remove: () =>
                new Promise((resolve, reject) => {
                    if (key === testConstants.competition0FromDb.id) {
                        resolve();
                    } else {
                        const error = new Error('remove competition entries has failed on firebase database');
                        reject(error);
                    }
                }),
        });
    }
    // all competition entries
    return ({
        push: () => ({
            key: testConstants.competitionEntry00Id,
        }),
    });
};

const competitionEntryRefFuncs = (competitionId, entryId) => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    if (competitionId === testConstants.competition0FromDb.id
                        && entryId === testConstants.competitionEntry00Id) {
                        const snapshot = ({
                            val: () => testConstants.competitionEntry00,
                            exists: () => true,
                        });
                        resolve(snapshot);
                    } else if (competitionId === testConstants.idNotFoundFromDb
                        || entryId === testConstants.idNotFoundFromDb) {
                        const snapshot = ({
                            exists: () => false,
                        });
                        resolve(snapshot);
                    } else {
                        const error = new Error('get competition entry has failed on firebase database');
                        reject(error);
                    }

                    break;
                }

                default: {
                    const error = new Error(`${eventType} is not a supported eventType by once method`);
                    reject(error);
                }
            }
        }),
    set: competitionEntry =>
        new Promise((resolve, reject) => {
            if (competitionId === testConstants.competition0FromDb.id
                && entryId === testConstants.competitionEntry00Id
                && competitionEntry.userId === testConstants.user0FromDb.id) {
                resolve();
            } else if (competitionId === testConstants.competition1FromDb.id
                // as generate key is mocked to always return 00Id
                && entryId === testConstants.competitionEntry00Id
                && competitionEntry.userId === testConstants.user3FromDb.id) {
                resolve();
            } else {
                const error = new Error('set competition entry has failed on firebase database');
                reject(error);
            }
        }),
    update: competitionEntryUpdate =>
        new Promise((resolve, reject) => {
            if (competitionId === testConstants.competition0FromDb.id
                && entryId === testConstants.competitionEntry00Id
                && competitionEntryUpdate.userId === testConstants.user0FromDb.id) {
                resolve();
            } else {
                const error = new Error('update competition entry has failed on firebase database');
                reject(error);
            }
        }),
    remove: () =>
        new Promise((resolve, reject) => {
            if (competitionId === testConstants.competition0FromDb.id
                && entryId === testConstants.competitionEntry00Id) {
                resolve();
            } else {
                const error = new Error('remove competition entry has failed on firebase database');
                reject(error);
            }
        }),
});

export const firebaseApp = {
    database: () => ({
        ref: (path) => {
            if (path.startsWith('/users')) {
                const key = path.substring(7);
                return usersRefFuncs(key);
            } else if (path.startsWith('/competitions')) {
                const key = path.substring(14);
                return competitionsRefFuncs(key);
            } else if (path.startsWith('/competitionParticipants')) {
                const key = path.substring(25);
                return competitionParticipantsRefFuncs(key);
            } else if (path.startsWith('/competitionEntries')) {
                const key = path.substring(20).split('/');
                if (key.length === 1) {
                    // entries for a single competition
                    return competitionEntriesRefFuncs(key[0]);
                }
                // single competition entry
                return competitionEntryRefFuncs(key[0], key[1]);
            }

            return undefined;
        },
    }),
};

const firebase = {
    auth: () => ({
        // TODO: figure out how to return undefined currentUser
        currentUser: testConstants.emailUser0,
        onAuthStateChanged: (callback) => {
            callback(testConstants.emailUser0);

            // TODO: return null to mock when there is no user signed in
        },
        createUserWithEmailAndPassword: (email, password) =>
            new Promise((resolve, reject) => {
                // eslint-disable-next-line max-len
                if (email === testConstants.emailUser0.email && password === testConstants.emailUser0.password) {
                    resolve(testConstants.emailUser0);
                    // eslint-disable-next-line max-len
                } else if (email === testConstants.emailUserNotFound0.email && password === testConstants.emailUserNotFound0.password) {
                    // This is to cover sign in with not found email then sign up
                    resolve(testConstants.emailUserNotFoundSignUp0);
                } else {
                    const error = new Error('create user failed on firebase');
                    reject(error);
                }
            }),
        signInWithEmailAndPassword: (email, password) =>
            new Promise((resolve, reject) => {
                // eslint-disable-next-line max-len
                if (email === testConstants.emailUser0.email && password === testConstants.emailUser0.password) {
                    resolve(testConstants.emailUser0);
                } else if (email === testConstants.emailUserNotFound0.email) {
                    const error = new Error('There is no user record corresponding to this identifier. The User may have been deleted');
                    error.code = 'auth/user-not-found';
                    reject(error);
                } else {
                    const error = new Error('sign in failed on firebase. email and password does not match a user');
                    reject(error);
                }
            }),
        /**
         * TODO: firebase.auth.*Provider needs to be mocked as well
         */
        signInWithPopup: provider =>
            new Promise((resolve, reject) => {
                if (provider.providerId === 'twitter.com') {
                    resolve(testConstants.twitterExistingUser0);
                } else {
                    const error = new Error(`sign in with provider: ${provider.providerId} failed on firebase`);
                    reject(error);
                }
            }),
        signOut: () =>
            new Promise((resolve, reject) => {
                resolve();

                // TODO: figure out a way to mock reject
                // eslint-disable-next-line no-constant-condition
                if (false) {
                    reject();
                }
            }),
    }),
    storage: () => ({
        ref: () => ({
            child: filePath => ({
                put: file =>
                    new Promise((resolve, reject) => {
                        if (filePath === `user/profilePhotos/${testConstants.user0.id}.jpg` &&
                            file.name === testConstants.profilePhotoFile0.name) {
                            resolve(testConstants.profilePhotoFromStorage0);
                        } else {
                            const error = new Error('failed to upload file to firebase storage');
                            reject(error);
                        }
                    }),
            }),
        }),
    }),
};

export default firebase;
