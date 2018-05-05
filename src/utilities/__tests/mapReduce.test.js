import mapReduce from './../mapReduce';

describe('group by and sum', () => {
    it('should return empty object when input object is undefined', () => {
        expect(mapReduce.groupByAndSum(undefined, '', '')).toEqual({});
    });

    it('should return object with key as key, and an object that has count and sum as value', () => {
        const expected = {
            opt1: {
                count: 2,
                sum: 10,
            },
            opt2: {
                count: 1,
                sum: 5,
            },
        };

        const obj = {
            id1: {
                option: 'opt1',
                value: 3,
            },
            id2: {
                option: 'opt2',
                value: 5,
            },
            id3: {
                option: 'opt1',
                value: 7,
            },
        };

        expect(mapReduce.groupByAndSum(obj, 'option', 'value')).toEqual(expected);
    });
});
