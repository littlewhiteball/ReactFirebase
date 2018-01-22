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
 * Auth
 */
export const authState0 = {
    userId: 'auth0userid',
};
export const emailResult = {
    uid: 'auth0userid',
};
export const googleResult = {
    googleUser: emailResult,
    credential: {
        accessToken: 'googleaccesstoken',
    },
};
export const facebookResult = {
    facebookUser: emailResult,
    credential: {
        accessToken: 'facebookaccesstoken',
    },
};
export const twitterResult = {
    twitterUser: emailResult,
    credential: {
        accessToken: 'twitteraccesstoken',
        secret: 'secret',
    },
};

/**
 * Users
 */
export const user0 = {
    id: 'id0',
    name: 'name0',
    email: 'email0@me0.com',
};
export const user0Update = {
    id: 'id0',
    name: 'name0update',
    email: 'email0update@me0update.com',
};
export const user1 = {
    id: 'id1',
    name: 'name1',
    email: 'email1@me1.com',
};
export const users = [
    user0,
    user1,
];
export const userWithoutId = {
    name: 'namex',
    email: 'emailx@mex.com',
};
export const userIdNotFound = {
    id: 'idnotfound',
    name: 'nameidnotfound',
    email: 'emailidnotfound@meidnotfound.com',
};

/**
 * Competition category
 */
export const categoryList = [
    {
        name: 'NFL',
        link: '/nfl',
    },
    {
        name: 'EPL',
        link: '/epl',
    },
];
