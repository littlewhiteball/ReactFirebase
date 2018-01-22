import userReduxModel from './../userReduxModel';

describe('user redux model', () => {
    it('should return an object of user redux model', () => {
        const expected = {
            id: 'id0',
            name: 'name0',
            email: 'email0@me0.com',
        };

        expect(userReduxModel('id0', 'name0', 'email0@me0.com')).toEqual(expected);
    });
});

