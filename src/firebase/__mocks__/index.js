import { user0FromDb } from './../../__tests_constants__';

const usersRefFuncs = key => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    if (key === 'id0id0id0id0id0id0id0id0id0+') {
                        const snapshot = ({
                            val: () => user0FromDb,
                        });
                        resolve(snapshot);
                    } else {
                        const error = new Error(`${key} does not exist in users database`);
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
            if (value.id) {
                resolve();
            } else {
                const error = new Error('input model must have a valid id');
                reject(error);
            }
        }),
    update: values =>
        new Promise((resolve, reject) => {
            if (values.id) {
                resolve();
            } else {
                const error = new Error('update model must have a valid id');
                reject(error);
            }
        }),
});

const competitionsRefFunc = key => ({
    set: model =>
        new Promise((resolve, reject) => {
            if (model.id) {
                const snapshot = ({
                    val: () => undefined,
                });
                resolve(snapshot);
            } else {
                const error = new Error('model must have a valid id');
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
                return competitionsRefFunc(key);
            }

            return undefined;
        },
    }),
};

const firebase = {};

export default firebase;
