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

const competitionsRefFunc = (key) => {
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
                            } else if (key === testConstants.competitionIdNotFoundFromDb) {
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
                    // eslint-disable-next-line max-len
                    if (values.id === testConstants.competition0FromDb.id && values.title !== testConstants.competition0FromDb.title) {
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
                    } else if (key === testConstants.competitionIdNotFoundFromDb) {
                        const error = new Error(`cannot remove competition with id: ${key} as it does not exist in database`);
                        reject(error);
                    } else {
                        const error = new Error('remove competition has failed on firebase database');
                        reject(error);
                    }
                }),
        });
    }
    // competitions
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

export const firebaseApp = {
    database: () => ({
        ref: (path) => {
            if (path.startsWith('/users')) {
                const key = path.substring(7);
                return usersRefFuncs(key);
            } else if (path.startsWith('/competitions')) {
                const key = path.substring(14);
                return competitionsRefFunc(key);
            }

            return undefined;
        },
    }),
};

const firebase = {
    auth: () => ({
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
        signOut: () =>
            new Promise((resolve, reject) => {
                resolve();

                // TODO: figure out a way to mock reject
            }),
    }),
};

export default firebase;
