/**
 * Competitions
 */
export const competition0 = {
    id: 'id0',
    title: 'MLB world series 2017',
    start: new Date('2017-11-02T09:00:00z'),
    closing: new Date('2017-11-12T09:00:00z'),
    options: ['Houston Astros', 'LA Dodgers'],
};
export const competition1 = {
    id: 'id1',
    title: 'UEFA champions league final',
    start: new Date('2017-05-03T09:00:00z'),
    closing: new Date('2017-05-17T09:00:00z'),
    options: ['Real Madrid', 'Juventus'],
};
export const competitions = [
    competition0, competition1,
];

/**
 * Users
 */
export const EMAIL = 'email@me.com';
export const PASSWORD = 'password';
export const user = {
    name: 'name',
};
export const googleResult = {
    user,
    credential: {
        accessToken: 'googleaccesstoken',
    },
};
