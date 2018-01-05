import { competitions } from './../../__tests_constants__';

const firebaseKey = '-0123456789abcdefghi';

const getCompetitionsOnceFromDb = (limitToLast = 0) => {
    const competitionsSnapshot =
        limitToLast > 0 ? competitions.slice(0, limitToLast) : competitions;
    return new Promise((resolve) => {
        resolve({
            val: () => competitionsSnapshot,
        });
    });
};

const generateKeyForCompetitionFromDb = () => firebaseKey;

const addCompetitionToDb = (competitionModel) => {
    competitions.push(competitionModel);
    return new Promise((resolve) => {
        resolve();
    });
};

const removeCompetitionFromDb = (id) => {
    const index = competitions.findIndex(c => c.id === id);
    if (index !== -1) {
        competitions.splice(index, 1);
    }
    return new Promise((resolve) => {
        resolve();
    });
};

export default {
    getCompetitionsOnceFromDb,
    generateKeyForCompetitionFromDb,
    addCompetitionToDb,
    removeCompetitionFromDb,
};
