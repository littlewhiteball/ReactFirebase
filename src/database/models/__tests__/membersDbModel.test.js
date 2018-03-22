import * as testConstants from './../../../__tests_constants__';

import membersDbModel from './../membersDbModel';

describe('members db model', () => {
    it('should return an object of members db model', () => {
        const expected = {
            id: testConstants.competition0.id,
        };
        expected[testConstants.user0.id] = true;
        expected[testConstants.user1.id] = true;

        expect(membersDbModel(
            testConstants.competition0.id,
            [testConstants.user0.id, testConstants.user1.id]
        ));
    });
});
