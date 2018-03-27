import * as testConstants from './../../__tests_constants__';
import competitionParticipantsDbAdapter from './../competitionParticipantsDbAdapter';

jest.mock('./../../firebase');

describe('get competition participants once from db', () => {
    it('should return all participants of a competition', () => {
        const expected = testConstants.competitionParticipants0;

        return competitionParticipantsDbAdapter
            .getCompetitionParticipantsOnceFromDb(testConstants.competition0FromDb.id)
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(expected);
            });
    });

    it('should return an empty snapshot with exists equals to false', () => {

    });

    it('should fail on firebase', () => {
        const expectedError = new Error('get competition participants has failed on firebase database');

        return competitionParticipantsDbAdapter
            .getCompetitionParticipantOnceFromDb(testConstants.idNotFoundFromDb)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('get competition participant once from db', () => {
    it('should a competition participant', () => {
        const expected = testConstants.competitionParticipants0.competitionParticipant0FromDb;

        return competitionParticipantsDbAdapter.getCompetitionParticipantOnceFromDb(
            testConstants.competition0FromDb.id,
            testConstants.user0FromDb.id,
        ).then((snapshot) => {
            expect(snapshot.val()).toEqual(expected);
        });
    });

    it('should return an empty snapshot with exists equals to false', () => {
        const expected = false;

        return competitionParticipantsDbAdapter.getCompetitionParticipantOnceFromDb(
            testConstants.idNotFoundFromDb,
            testConstants.user0FromDb.id,
        ).then((snapshot) => {
            expect(snapshot.exists()).toBe(expected);
        });
    });

    it('should fail on firebase database', () => {
        const expectedError = new Error('get competition participant has failed on firebase database');

        return competitionParticipantsDbAdapter.getCompetitionParticipantOnceFromDb(
            testConstants.competition1FromDb.id,
            testConstants.user1FromDb.id,
        ).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('add competitionParticipant to db', () => {
    it('should success for a valid competitionParticipant', () => {
        const expected = true;

        return competitionParticipantsDbAdapter.addCompetitionParticipantToDb(
            testConstants.competition0FromDb.id,
            testConstants.user0FromDb.id,
        ).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('set competition participant has failed on firebase database');

        return competitionParticipantsDbAdapter.addCompetitionParticipantToDb(
            testConstants.idNotFoundFromDb,
            testConstants.competition0FromDb.id,
        ).catch((error) => {
            expect(error).toEqual(expectedError);
        });
    });
});

describe('remove competitionParticipants from db', () => {
    it('should succeed for a valid competition id', () => {
        const expected = true;

        return competitionParticipantsDbAdapter
            .removeCompetitionParticipantsFromDb(testConstants.competition0FromDb.id)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('remove competition participants has failed on firebase database');

        return competitionParticipantsDbAdapter
            .removeCompetitionParticipantsFromDb(testConstants.idNotFoundFromDb)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('remove competitionParticipant from db', () => {
    it('should succeed for a valid competition id and user id', () => {
        const expected = true;

        return competitionParticipantsDbAdapter.removeCompetitionParticipantsFromDb(
            testConstants.competition0FromDb.id,
            testConstants.user0FromDb.id,
        ).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('remove competition participant has failed on firebase database');

        return competitionParticipantsDbAdapter.removeCompetitionParticipantFromDb(
            testConstants.idNotFoundFromDb,
            testConstants.user0FromDb.id,
        ).catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});
