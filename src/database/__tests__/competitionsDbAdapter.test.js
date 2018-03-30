import * as testConstants from './../../__tests_constants__';
import competitionsDbAdapter from './../competitionsDbAdapter';

jest.mock('./../../firebase');

describe('generate key for competition from db', () => {
    it('should return a new id by the push function', () => {
        const expected = testConstants.competition0FromDb.id;

        expect(competitionsDbAdapter.generateKeyForCompetitionFromDb()).toBe(expected);
    });
});

describe('get competitions once from db', () => {
    it('should return two competitions', () => {
        const expectedCompetitions = {};
        expectedCompetitions[testConstants.competitionId0] = testConstants.competition0FromDb;
        expectedCompetitions[testConstants.competitionId1] = testConstants.competition1FromDb;
        const expectedExists = true;

        return competitionsDbAdapter.getCompetitionsOnceFromDb().then((snapshot) => {
            expect(snapshot.val()).toEqual(expectedCompetitions);
            expect(snapshot.exists()).toBe(expectedExists);
        });
    });
});

describe('add competition to db', () => {
    it('should success for a valid competition', () => {
        const expected = true;

        return competitionsDbAdapter.addCompetitionToDb(testConstants.competition0).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail if competition does not have a valid id', () => {
        const expectedError = new Error('set competition has failed on firebase database');

        return competitionsDbAdapter.addCompetitionToDb(testConstants.competitionWithoutId)
            .catch((error) => {
                expect(error).toEqual(expectedError);
            });
    });
});

describe('update competition to db', () => {
    it('should succeed for a valid update competition', () => {
        const expected = true;

        return competitionsDbAdapter.updateCompetitionToDb(testConstants.competition0Update)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail if competition id does not exist in database', () => {
        const expectedError = new Error('provided competition id: competitionidnotfoundfromdb+ does not exist in database. cannot update');
        const competitionUpdate = Object.assign({}, testConstants.competition0FromDb, {
            id: testConstants.idNotFoundFromDb,
        });

        return competitionsDbAdapter.updateCompetitionToDb(competitionUpdate)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('update competition has failed on firebase database');

        return competitionsDbAdapter.updateCompetitionToDb(testConstants.competition0)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('remove competition from db', () => {
    it('should succeed for a valid remove competition', () => {
        const expected = true;

        return competitionsDbAdapter.removeCompetitionFromDb(testConstants.competition0.id)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('remove competition has failed on firebase database');

        return competitionsDbAdapter.removeCompetitionFromDb(testConstants.competition1.id)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});
