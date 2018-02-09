import { CompetitionVisibilityEnum } from './utilities/enums/competitionVisibility';

/**
 * firebase returned models
 */
export const emailUser0 = {
    uid: 'id0id0id0id0id0id0id0id0id0+',
    email: 'email0@me0.com',
    password: 'emailuser0password',
    name: 'name0',
};

export const emailUserNotFound0 = {
    email: 'emailemailusernotfound0@meemailusernotfound0.com',
    password: 'emailusernotfound0password',
    name: 'emailusernotfound0name',
};

export const emailUserNotFoundSignUp0 = {
    uid: 'emailusernotfoundsignup0--++',
    email: 'emailemailusernotfound0@meemailusernotfound0.com',
    password: 'emailusernotfound0password',
    name: 'emailusernotfound0name',
};

/**
 * Database models
 */
export const user0FromDb = {
    id: 'id0id0id0id0id0id0id0id0id0+',
    name: 'name0',
    email: 'email0@me0.com',
};

export const user1FromDb = {
    id: 'id1id1id1id1id1id1id1id1id1+',
    name: 'name1',
    email: 'email1@me1.com',
};

export const competition0FromDb = {
    id: 'competition0idcompetition0id',
    ownerId: user0FromDb.id,
    title: 'MLB world series 2017',
    description: 'MLB world series 2017 champion',
    visibility: CompetitionVisibilityEnum.PUBLIC,
    start: new Date('2017-11-02T09:00:00z'),
    closing: new Date('2017-11-12T09:00:00z'),
    fulfillment: new Date('2017-11-15T10:00:00z'),
    options: ['Houston Astros', 'LA Dodgers'],
};
export const competition1FromDb = {
    id: 'competition1idcompetition1id',
    ownerId: user1FromDb.id,
    title: 'UEFA champions league final',
    description: 'UEFA champions league final 2017',
    visibility: CompetitionVisibilityEnum.PRIVATE,
    start: new Date('2017-05-03T09:00:00z'),
    closing: new Date('2017-05-17T09:00:00z'),
    fulfillment: new Date('2017-05-18T10:00:00z'),
    options: ['Real Madrid', 'Juventus'],
};

export const competitionIdNotFoundFromDb = 'competitionidnotfoundfromdb+';

/**
 * Users
 */
export const user0 = {
    id: 'id0id0id0id0id0id0id0id0id0+',
    name: 'name0',
    email: 'email0@me0.com',
};
export const user0Update = {
    id: 'id0id0id0id0id0id0id0id0id0+',
    name: 'name0update',
    email: 'email0@me0.com',
};
export const user1 = {
    id: 'id1id1id1id1id1id1id1id1id1+',
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
    id: 'idnotfoundidnotfound----++++',
    name: 'nameidnotfound',
    email: 'emailidnotfound@meidnotfound.com',
};

/**
 * Competitions
 */
export const competition0 = {
    id: 'competition0idcompetition0id',
    ownerId: user0.id,
    title: 'MLB world series 2017',
    description: 'MLB world series 2017 champion',
    visibility: CompetitionVisibilityEnum.PUBLIC,
    start: new Date('2017-11-02T09:00:00z'),
    closing: new Date('2017-11-12T09:00:00z'),
    fulfillment: new Date('2017-11-15T10:00:00z'),
    options: ['Houston Astros', 'LA Dodgers'],
};
export const competition1 = {
    id: 'competition1idcompetition1id',
    ownerId: user1.id,
    title: 'UEFA champions league final',
    description: 'UEFA champions league final 2017',
    visibility: CompetitionVisibilityEnum.PRIVATE,
    start: new Date('2017-05-03T09:00:00z'),
    closing: new Date('2017-05-17T09:00:00z'),
    fulfillment: new Date('2017-05-18T10:00:00z'),
    options: ['Real Madrid', 'Juventus'],
};
export const competitions = [
    competition0, competition1,
];
export const competitionWithoutId = {
    title: 'competition without id',
};
export const competition0Update = {
    id: competition0.id,
    title: 'update title',
    start: competition0.start,
    closing: competition0.closing,
    options: competition0.options,
};
export const competitionIdNotFound0 = {
    id: competitionIdNotFoundFromDb,
};

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

/**
 * Date
 */
export const dateTimeNow = new Date('2018-02-18T11:30:00.000Z');
export const dateTimeAddOneDay = new Date('2018-02-19T11:30:00.000Z');
export const dateTimeAddTwoDays = new Date('2018-02-20T11:30:00.000Z');
