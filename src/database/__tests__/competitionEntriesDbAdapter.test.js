import * as testConstants from './../../__tests_constants__';
import competitionEntriesDbAdapter from './../competitionEntriesDbAdapter';

jest.mock('./../../firebase');

describe('get competition entries once from db', () => {
    it('should return all entries (2) of a competition', () => {
        const expected = {};
        expected[testConstants.userId0] = testConstants.competitionEntry00;
        expected[testConstants.userId1] = testConstants.competitionEntry01;

        return competitionEntriesDbAdapter
            .getCompetitionEntriesOnceFromDb(testConstants.competitionId0)
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(expected);
            });
    });

    it('should return an empty snapshot with exists equals to false', () => {
        const expected = false;

        return competitionEntriesDbAdapter
            .getCompetitionEntriesOnceFromDb(testConstants.idNotFoundFromDb)
            .then((snapshot) => {
                expect(snapshot.exists()).toEqual(expected);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('get competition entries has failed on firebase database');

        return competitionEntriesDbAdapter
            .getCompetitionEntriesOnceFromDb(testConstants.competitionId1)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('get competition entry once from db', () => {
    it('should return an entry of a competition', () => {
        const expected = testConstants.competitionEntry00;

        return competitionEntriesDbAdapter.getCompetitionEntryOnceFromDb(
            testConstants.competitionId0,
            testConstants.userId0,
        ).then((snapshot) => {
            expect(snapshot.val()).toEqual(expected);
        });
    });

    it('should return an empty snapshot with exists equals to false', () => {
        const expected = false;

        return competitionEntriesDbAdapter.getCompetitionEntryOnceFromDb(
            testConstants.idNotFoundFromDb,
            testConstants.userId0,
        ).then((snapshot) => {
            expect(snapshot.exists()).toEqual(expected);
        });
    });

    it('should fail on firebase database', () => {
        const expectedError = new Error('get competition entry has failed on firebase database');

        return competitionEntriesDbAdapter.getCompetitionEntryOnceFromDb(
            testConstants.competitionId0,
            testConstants.userId0,
        ).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('add competition entry to db', () => {
    it('should success for a valid entry to an existing competition', () => {
        const expected = true;

        return competitionEntriesDbAdapter.addCompetitionEntryToDb(
            testConstants.competitionId0,
            testConstants.competitionEntry00,
        ).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should succeed for a valid entry to a new competition', () => {
        const expected = true;

        return competitionEntriesDbAdapter.addCompetitionEntryToDb(
            testConstants.competitionId1,
            testConstants.competitionEntry10,
        ).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('set competition entry has failed on firebase database');

        return competitionEntriesDbAdapter.addCompetitionEntryToDb(
            testConstants.idNotFoundFromDb,
            testConstants.competitionEntry11,
        ).catch((error) => {
            expect(error).toEqual(expectedError);
        });
    });
});

describe('update competition entry to db', () => {
    it('should succeed for a valid update competition entry', () => {
        const expected = true;
        const competitionEntryUpdate = Object.assign({}, testConstants.competitionEntry00, {
            value: 100,
        });

        return competitionEntriesDbAdapter.updateCompetitionEntryToDb(
            testConstants.competitionId0,
            competitionEntryUpdate,
        ).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail if competition id does not exist in database', () => {
        const expectedError = new Error('provided competition id: competitionidnotfoundfromdb+ and entry id: id0id0id0id0id0id0id0id0id0+ do not match any record in database. cannot update');
        const competitionEntryUpdate = Object.assign({}, testConstants.competitionEntry00, {
            value: 100,
        });

        return competitionEntriesDbAdapter.updateCompetitionEntryToDb(
            testConstants.idNotFoundFromDb,
            competitionEntryUpdate,
        ).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });

    it('should fail if entry id does not exist in database', () => {
        const expectedError = new Error('provided competition id: competition0idcompetition0id and entry id: competitionidnotfoundfromdb+ do not match any record in database. cannot update');
        const competitionEntryUpdate = Object.assign({}, testConstants.competitionEntry00, {
            userId: testConstants.idNotFoundFromDb,
        });

        return competitionEntriesDbAdapter.updateCompetitionEntryToDb(
            testConstants.competitionId0,
            competitionEntryUpdate,
        ).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });

    it('should fail on firebase on a valid update', () => {
        const expectedError = new Error('update competition entry has failed on firebase database');

        return competitionEntriesDbAdapter.updateCompetitionEntryToDb(
            testConstants.competitionId0,
            testConstants.competitionEntry00,
        ).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('remove competition entries from db', () => {
    it('should succeed for a valid competition id', () => {
        const expected = true;

        return competitionEntriesDbAdapter
            .removeCompetitionEntriesFromDb(testConstants.competitionId0)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('remove competition entries has failed on firebase database');

        return competitionEntriesDbAdapter
            .removeCompetitionEntriesFromDb(testConstants.competitionId1)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('remove competition entry from db', () => {
    it('should succeed for a valid competition id and entry id', () => {
        const expected = true;

        return competitionEntriesDbAdapter.removeCompetitionEntryFromDb(
            testConstants.competitionId0,
            testConstants.userId0,
        ).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('remove competition entry has failed on firebase database');

        return competitionEntriesDbAdapter.removeCompetitionEntryFromDb(
            testConstants.competitionId1,
            testConstants.userId3,
        ).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});
