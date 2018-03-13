import usersDbModel from './../usersDbModel';

describe('users db model', () => {
    it('should return an object of user db model', () => {
        const expected = {
            id: 'id0',
            name: 'name0',
            email: 'email0@me0.com',
            photoUrl: 'https://photoUrl0.com',
        };

        expect(usersDbModel('id0', 'name0', 'email0@me0.com', 'https://photoUrl0.com')).toEqual(expected);
    });
});
