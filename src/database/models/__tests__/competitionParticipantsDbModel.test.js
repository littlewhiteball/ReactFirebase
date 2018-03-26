import * as testConstants from './../../../__tests_constants__';

import competitionParticipantsDbModel from './../competitionParticipantsDbModel';

describe('competitionParticipants db model', () => {
    it('should return an object of competitionParticipants db model', () => {
        const expected = {
            id: testConstants.competition0.id,
        };
        expected[testConstants.user0.id] = true;
        expected[testConstants.user1.id] = true;

        expect(competitionParticipantsDbModel(
            testConstants.competition0.id,
            [testConstants.user0.id, testConstants.user1.id],
        ));
    });
});
