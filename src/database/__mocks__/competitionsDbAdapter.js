import { competitions } from './../../__tests_constants__';

const firebaseKey = '-0123456789abcdefghi';

export const getCompetitionsOnceFromDb = (limitToLast = 0) => {
    const competitionsSnapshot =
        limitToLast > 0 ? competitions.slice(0, limitToLast) : competitions;
    return new Promise((resolve) => {
        resolve({
            val: () => competitionsSnapshot,
        });
    });
};

export const generateKeyForCompetitionFromDb = () => firebaseKey;

export const addCompetitionToDb = (competitionModel) => {
    competitions.push(competitionModel);
    return new Promise((resolve) => {
        resolve();
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
