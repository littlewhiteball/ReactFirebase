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
                            if (key === testConstants.competitionId0) {
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
                    if (value.title === testConstants.competition0FromDb.title) {
                        resolve();
                    } else {
                        const error = new Error('set competition has failed on firebase database');
                        reject(error);
                    }
                }),
            update: values =>
                new Promise((resolve, reject) => {
                    if (values.title !== testConstants.competition0FromDb.title) {
                        resolve();
                    } else {
                        const error = new Error('update competition has failed on firebase database');
                        reject(error);
                    }
                }),
            remove: () =>
                new Promise((resolve, reject) => {
                    if (key === testConstants.competitionId0) {
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
            key: testConstants.competitionId0,
        }),
        limitToLast: () => ({
            // TODO: this is not tested
            once: eventType =>
                new Promise((resolve, reject) => {
                    switch (eventType) {
                        case 'value': {
                            const competitions = {};
                            // eslint-disable-next-line max-len
                            competitions[testConstants.competitionId0] = testConstants.competition0FromDb;
                            // eslint-disable-next-line max-len
                            competitions[testConstants.competitionId1] = testConstants.competition1FromDb;
                            const snapshot = ({
                                val: () => competitions,
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
                        const competitions = {};
                        // eslint-disable-next-line max-len
                        competitions[testConstants.competitionId0] = testConstants.competition0FromDb;
                        // eslint-disable-next-line max-len
                        competitions[testConstants.competitionId1] = testConstants.competition1FromDb;
                        const snapshot = ({
                            val: () => competitions,
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

const competitionParticipantsRefFuncs = competitionId => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    if (competitionId === testConstants.competitionId0) {
                        const snapshot = ({
                            val: () => testConstants.competitionParticipants0,
                            exists: () => true,
                        });
                        resolve(snapshot);
                    } else if (competitionId === testConstants.idNotFoundFromDb) {
                        const snapshot = ({
                            exists: () => false,
                        });
                        resolve(snapshot);
                    } else {
                        const error = new Error('get competition participants has failed on firebase database');
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
            // eslint-disable-next-line max-len
            if (competitionId === testConstants.competitionId0) {
                resolve();
            } else {
                const error = new Error('remove competition participants has failed on firebase database');
                reject(error);
            }
        }),
});

const competitionParticipantRefFuncs = (competitionId, userId) => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    if (competitionId === testConstants.competitionId0) {
                        const snapshot = ({
                            val: () => {
                                const result = {};
                                result[testConstants.user0FromDb.id] = true;
                                result[testConstants.user1FromDb.id] = true;
                                return result;
                            },
                            exists: () => true,
                        });
                        resolve(snapshot);
                    } else if (competitionId === testConstants.idNotFoundFromDb) {
                        const snapshot = {
                            exists: () => false,
                        };
                        resolve(snapshot);
                    } else {
                        const error = new Error('get competition participant has failed on firebase database');
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
    set: () =>
        new Promise((resolve, reject) => {
            if (competitionId === testConstants.competitionId0
                && userId === testConstants.user0FromDb.id) {
                resolve();
            } else {
                const error = new Error('set competition participant has failed on firebase database');
                reject(error);
            }
        }),
    remove: () =>
        new Promise((resolve, reject) => {
            if (competitionId === testConstants.competitionId0
                && userId === testConstants.user0FromDb.id) {
                resolve();
            } else {
                const error = new Error('remove competition participant has failed on firebase database');
                reject(error);
            }
        }),
});

const competitionEntriesRefFuncs = key =>
    ({
        once: eventType =>
            new Promise((resolve, reject) => {
                switch (eventType) {
                    case 'value': {
                        if (key === testConstants.competitionId0) {
                            const snapshot = ({
                                val: () => {
                                    const result = {};
                                    // eslint-disable-next-line max-len
                                    result[testConstants.userId0] = testConstants.competitionEntry00;
                                    // eslint-disable-next-line max-len
                                    result[testConstants.userId1] = testConstants.competitionEntry01;
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
                if (key === testConstants.competitionId0) {
                    resolve();
                } else {
                    const error = new Error('remove competition entries has failed on firebase database');
                    reject(error);
                }
            }),
    });

const competitionEntryRefFuncs = (competitionId, entryId) => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    if (competitionId === testConstants.competitionId0
                        && entryId === testConstants.userId0) {
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
            if (competitionId === testConstants.competitionId0
                && entryId === testConstants.userId0
                && competitionEntry.userId === testConstants.user0FromDb.id) {
                resolve();
            } else if (competitionId === testConstants.competitionId1
                && entryId === testConstants.userId2
                && competitionEntry.userId === testConstants.user2FromDb.id) {
                resolve();
            } else {
                const error = new Error('set competition entry has failed on firebase database');
                reject(error);
            }
        }),
    update: competitionEntryUpdate =>
        new Promise((resolve, reject) => {
            if (competitionId === testConstants.competitionId0
                && entryId === testConstants.userId0
                && competitionEntryUpdate.value !== testConstants.competitionEntry00.value) {
                resolve();
            } else {
                const error = new Error('update competition entry has failed on firebase database');
                reject(error);
            }
        }),
    remove: () =>
        new Promise((resolve, reject) => {
            if (competitionId === testConstants.competitionId0
                && entryId === testConstants.userId0) {
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
                const key = path.substring(25).split('/');
                if (key.length === 1) {
                    // participants for a single competition
                    return competitionParticipantsRefFuncs(key[0]);
                }
                // single competition participant
                return competitionParticipantRefFuncs(key[0], key[1]);
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
