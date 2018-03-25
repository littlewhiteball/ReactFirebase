import * as testConstants from './../../../__tests_constants__';

import competitionEntriesDbModel from './../competitionEntriesDbModel';

describe('competition entries db model', () => {
    it('should return an object of competition entry db model', () => {
        const expected = {
            userId: testConstants.user0FromDb.id,
            option: testConstants.competition0FromDb.options[0],
            value: 1,
            entryCreated: new Date('2018-01-02T10:00:00z'),
            entryLastModified: new Date('2018-01-03T10:00:00z'),
        };

        expect(competitionEntriesDbModel(
            testConstants.user0FromDb.id,
            testConstants.competition0FromDb.options[0],
            1,
            new Date('2018-01-02T10:00:00z'),
            new Date('2018-01-03T10:00:00z'),
        )).toEqual(expected);
    });
});
