import competitionsDbModel from './../competitionsDbModel';

describe('competitions db model', () => {
    it('should return an object of competitions db model', () => {
        const expected = {
            id: 'competitiondbmodelid',
            title: 'competition db model',
            description: 'competition db model description',
            visibility: 'Public',
            options: [
                'db model option 1',
                'db model option 2',
            ],
            createdBy: 'user0',
            owner: 'competitionmodelownerid',
            start: new Date('2018-01-02T10:00:00z'),
            closing: new Date('2018-01-04T10:00:00z'),
            fulfillment: new Date('2018-01-05T10:00:00z'),
        };

        expect(competitionsDbModel(
            'competitiondbmodelid',
            'competition db model',
            'competition db model description',
            'Public',
            ['db model option 1', 'db model option 2'],
            'user0',
            'competitionmodelownerid',
            new Date('2018-01-02T10:00:00z'),
            new Date('2018-01-04T10:00:00z'),
            new Date('2018-01-05T10:00:00z'),
        )).toEqual(expected);
    });
});

