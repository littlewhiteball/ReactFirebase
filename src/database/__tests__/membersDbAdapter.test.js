import * as testConstants from './../../__tests_constants__';
import membersDbAdapter from './../membersDbAdapter';

jest.mock('./../../firebase');

describe('get member once from db', () => {
    it('should return one member if id is found', () => {
        const expected = testConstants.members.member0FromDb;

        return membersDbAdapter
            .getMemberOnceFromDb(testConstants.members.member0FromDb.competitionId)
            .then((snapshot) => {
                expect(snapshot.val()).toBe(expected);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('get member has failed on firebase database');

        return membersDbAdapter.getMemberOnceFromDb().catch((error) => {
            expect(error).toMatchObject(expectedError);
        });
    });
});

describe('add member to db', () => {
    it('should success for a valid member', () => {
        const expected = true;

        return membersDbAdapter.addMemberToDb(testConstants.members.member0FromDb).then(() => {
            expect(true).toBe(expected);
        });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('set member has failed on firebase database');

        return membersDbAdapter.addMemberToDb(testConstants.members.member1FromDb)
            .catch((error) => {
                expect(error).toEqual(expectedError);
            });
    });
});

describe('update member to db', () => {
    it('should succeed for a valid update member', () => {
        const expected = true;
        const memberUpdate = Object.assign({}, testConstants.members.member0FromDb);
        memberUpdate[testConstants.user2FromDb.id] = true;

        return membersDbAdapter.updateMemberToDb(memberUpdate)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail if competition id of member does not exist in database', () => {
        const expectedError = new Error('provided competition id: competitionidnotfoundfromdb+ does not exist in database. cannot update');
        const memberUpdate = Object.assign({}, testConstants.members.member0FromDb, {
            competitionId: testConstants.idNotFoundFromDb,
        });

        return membersDbAdapter.updateMemberToDb(memberUpdate)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('update member has failed on firebase database');
        const memberShouldFaileOnUpdate = Object.assign(
            {},
            testConstants.members.member0FromDb,
        );
        memberShouldFaileOnUpdate[testConstants.user0FromDb] = false;

        return membersDbAdapter.updateMemberToDb(memberShouldFaileOnUpdate)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});

describe('remove member from db', () => {
    it('should succeed for a valid remove member', () => {
        const expected = true;

        return membersDbAdapter
            .removeMemberFromDb(testConstants.members.member0FromDb.competitionId)
            .then(() => {
                expect(true).toBe(expected);
            });
    });

    it('should fail if competition id of member does not exist in database', () => {
        const expectedError = new Error('cannot remove member with competition id: competitionidnotfoundfromdb+ as it does not exist in database');

        return membersDbAdapter.removeMemberFromDb(testConstants.idNotFoundFromDb)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });

    it('should fail on firebase', () => {
        const expectedError = new Error('remove member has failed on firebase database');

        return membersDbAdapter.removeMemberFromDb(testConstants.members.member1FromDb)
            .catch((error) => {
                expect(error).toMatchObject(expectedError);
            });
    });
});
