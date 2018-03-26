import * as testConstants from './../../__tests_constants__';
import competitionParticipantsDbAdapter from './../competitionParticipantsDbAdapter';

jest.mock('./../../firebase');

describe('get competitionParticipant once from db', () => {
    it('should return one competitionParticipant if id is found', () => {
        const expected = testConstants.competitionParticipants.competitionParticipant0FromDb;
        const { competitionId }
            = testConstants.competitionParticipants.competitionParticipant0FromDb;

        return competitionParticipantsDbAdapter
            .getCompetitionParticipantOnceFromDb(competitionId)
            .then((snapshot) => {
                expect(snapshot.val()).toBe(expected);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('get competitionParticipant has failed on firebase database');

        return competitionParticipantsDbAdapter.getCompetitionParticipantOnceFromDb()
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('add competitionParticipant to db', () => {
    it('should success for a valid competitionParticipant', () => {
        const expected = true;
        const { competitionParticipant0FromDb } = testConstants.competitionParticipants;

        return competitionParticipantsDbAdapter
            .addCompetitionParticipantToDb(competitionParticipant0FromDb)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('set competitionParticipant has failed on firebase database');
        const { competitionParticipant1FromDb } = testConstants.competitionParticipants;

        return competitionParticipantsDbAdapter
            .addCompetitionParticipantToDb(competitionParticipant1FromDb)
            .catch((error) => {
                expect(error).toEqual(expectedError);
            });
    });
});

describe('update competitionParticipant to db', () => {
    it('should succeed for a valid update competitionParticipant', () => {
        const expected = true;
        const competitionParticipantUpdate =
            Object.assign({}, testConstants.competitionParticipants.competitionParticipant0FromDb);
        competitionParticipantUpdate[testConstants.user2FromDb.id] = true;

        return competitionParticipantsDbAdapter
            .updateCompetitionParticipantToDb(competitionParticipantUpdate)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail if competition id of competitionParticipant does not exist in database', () => {
        const expectedError = new Error('provided competition id: competitionidnotfoundfromdb+ does not exist in database. cannot update');
        const competitionParticipantUpdate =
            Object.assign({}, testConstants.competitionParticipants.competitionParticipant0FromDb, {
                competitionId: testConstants.idNotFoundFromDb,
            });

        return competitionParticipantsDbAdapter
            .updateCompetitionParticipantToDb(competitionParticipantUpdate)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('update competitionParticipant has failed on firebase database');
        const competitionParticipantShouldFaileOnUpdate = Object.assign(
            {},
            testConstants.competitionParticipants.competitionParticipant0FromDb,
        );
        competitionParticipantShouldFaileOnUpdate[testConstants.user0FromDb] = false;

        return competitionParticipantsDbAdapter
            .updateCompetitionParticipantToDb(competitionParticipantShouldFaileOnUpdate)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('remove competitionParticipant from db', () => {
    it('should succeed for a valid remove competitionParticipant', () => {
        const expected = true;
        const { competitionId }
            = testConstants.competitionParticipants.competitionParticipant0FromDb;

        return competitionParticipantsDbAdapter
            .removeCompetitionParticipantFromDb(competitionId)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail if competition id of competitionParticipant does not exist in database', () => {
        const expectedError = new Error('cannot remove competitionParticipant with competition id: competitionidnotfoundfromdb+ as it does not exist in database');

        return competitionParticipantsDbAdapter
            .removeCompetitionParticipantFromDb(testConstants.idNotFoundFromDb)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('remove competitionParticipant has failed on firebase database');
        const { competitionParticipant1FromDb } = testConstants.competitionParticipants;

        return competitionParticipantsDbAdapter
            .removeCompetitionParticipantFromDb(competitionParticipant1FromDb)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});
