import competitionsDbModel from './../competitionsDbModel';

describe('competitions db model', () => {
    it('should return an object of competitions db model', () => {
        const expected = {
            id: 'competitiondbmodelid',
            title: 'competition db model',
            description: 'competition db model description',
            start: new Date('2018-01-02T10:00:00z'),
            closing: new Date('2018-01-04T10:00:00z'),
            fulfillment: new Date('2018-01-05T10:00:00z'),
            options: [
                'db model option 1',
                'db model option 2',
            ],
        };

        expect(competitionsDbModel(
            'competitiondbmodelid',
            'competition db model',
            'competition db model description',
            new Date('2018-01-02T10:00:00z'),
            new Date('2018-01-04T10:00:00z'),
            new Date('2018-01-05T10:00:00z'),
            ['db model option 1', 'db model option 2'],
        )).toEqual(expected);
    });
});

