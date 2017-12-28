import { competitions } from './../../../__tests_constants__';

const firebaseKey = '-0123456789abcdefghi';

export const getCompetitionsOnceFromDb = (limitToLast = 0) => {
    if (limitToLast > 0) {
        return new Promise((resolve) => {
            resolve(competitions.slice(0, limitToLast));
        });
    }
    return new Promise((resolve) => {
        resolve(competitions);
    });
};

export const generateKeyForCompetitionFromDb = () => firebaseKey;

export const addCompetitionToDb = (competitionModel) => {
    competitions.push(competitionModel);
    return new Promise((resolve) => {
        resolve(competitionModel);
    });
};

export const removeCompetitionFromDb = (id) => {
    const index = competitions.findIndex(c => c.id === id);
    if (index !== -1) {
        competitions.splice(index, 1);
    }
    return new Promise((resolve) => {
        resolve();
    });
};
