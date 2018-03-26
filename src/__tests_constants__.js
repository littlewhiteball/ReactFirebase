import { CompetitionVisibilityEnum } from './utilities/enums/competitionVisibility';

/**
 * File
 */
export const profilePhotoFile0 = {
    name: 'profilePhoto0.jpg',
    size: 1000,
    type: 'image/jpeg',
};

export const profilePhotoFile1 = {
    name: 'profilePhoto1.jpg',
    size: 1111,
    type: 'image/png',
};

/**
 * Storage
 */
export const profilePhotoFromStorage0 = {
    downloadURL: 'https://firebasestorage.googleapis.com/v0/blabla/profilePhoto0.jpg?token=token0',
    metadata: {
        name: 'profilePhoto0.jpg',
    },
};

export const profilePhotoFromStorage1 = {
    downloadURL: 'https://firebasestorage.googleapis.com/v0/blabla/profilePhoto1.jpg?token=token1',
    metadata: {
        name: 'profilePhoto1.jpg',
    },
};

export const profilePhotoFromStorage2 = {
    downloadURL: 'https://firebasestorage.googleapis.com/v0/blabla/profilePhoto2.jpg?token=token2',
    metadata: {
        name: 'profilePhoto2.jpg',
    },
};

export const profilePhotoFromStorage3 = {
    downloadURL: 'https://firebasestorage.googleapis.com/v0/blabla/profilePhoto3.jpg?token=token3',
    metadata: {
        name: 'profilePhoto3.jpg',
    },
};

export const profilePhotoFromStorage4 = {
    downloadURL: 'https://firebasestorage.googleapis.com/v0/blabla/profilePhoto4.jpg?token=token4',
    metadata: {
        name: 'profilePhoto4.jpg',
    },
};

/**
 * firebase returned models
 */
export const AUTH_GOOGLE_PROVIDER_ID = 'google.com';

export const AUTH_FACEBOOK_PROVIDER_ID = 'facebook.com';

export const AUTH_TWITTER_PROVIDER_ID = 'twitter.com';

export const emailUser0 = {
    uid: 'id0id0id0id0id0id0id0id0id0+',
    email: 'email0@me0.com',
    password: 'emailuser0password',
    name: 'name0',
    photoUrl: profilePhotoFromStorage0.downloadURL,
    updateProfile: profile =>
        new Promise((resolve, reject) => {
            if (profile.displayName === 'display name0' && profile.photoURL === profilePhotoFromStorage0.downloadURL) {
                resolve();
            } else {
                const error = new Error('update profile failed on firebase');
                reject(error);
            }
        }),
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

const twitterExistingUser0 = {
    uid: 'twitterexistinguserid0++++++',
    displayName: 'twitter existing user 0',
    email: 'twitterexistinguser0@twitterexistingemail0.com',
    photoURL: 'https://pbs.twimg.com/profile_images/someguidexisting0/existingimage0.jpg',
};

const twitterExistingUser0AdditionalUserInfo = {
    isNewUser: false,
    providerId: 'twitter.com',
    username: 'twitterexistinguser0',
};

const twitterExistingUser0Credential = {
    accessToken: 'twitterexistinguser0accesstoken',
    providerId: 'twitter.com',
    secret: 'twitterexistinguser0secret',
};

export const twitterSignInResultExistingUser0 = {
    additionalUserInfo: twitterExistingUser0AdditionalUserInfo,
    credential: twitterExistingUser0Credential,
    operationType: 'signIn',
    user: twitterExistingUser0,
};

const twitterNewUser0 = {
    uid: 'twitternewuserid0++++++',
    displayName: 'twitter new user 0',
    email: 'twitternewuser0@twitternewemail0.com',
    photoURL: 'https://pbs.twimg.com/profile_images/someguidnew0/newimage0.jpg',
};

const twitterNewUser0AdditionalUserInfo = {
    isNewUser: true,
    providerId: 'twitter.com',
    username: 'twitternewuser0',
};

const twitterNewUser0Credential = {
    accessToken: 'twitternewuser0accesstoken',
    providerId: 'twitter.com',
    secret: 'twitternewuser0secret',
};

export const twitterSignInResultNewUser0 = {
    additionalUserInfo: twitterNewUser0AdditionalUserInfo,
    credential: twitterNewUser0Credential,
    operationType: 'signIn',
    user: twitterNewUser0,
};

/**
 * Database models
 */
export const user0FromDb = {
    id: 'id0id0id0id0id0id0id0id0id0+',
    name: 'name0',
    email: 'email0@me0.com',
    photoUrl: profilePhotoFromStorage0.downloadURL,
};

export const user1FromDb = {
    id: 'id1id1id1id1id1id1id1id1id1+',
    name: 'name1',
    email: 'email1@me1.com',
    photoUrl: profilePhotoFromStorage1.downloadURL,
};

export const user2FromDb = {
    id: 'id2id2id2id2id2id2id2id2id2+',
    name: 'name2',
    email: 'email2@me2.com',
    photoUrl: profilePhotoFromStorage2.downloadURL,
};

export const user3FromDb = {
    id: 'id3id3id3id3id3id3id3id3id3+',
    name: 'name3',
    email: 'email3@me3.com',
    photoUrl: profilePhotoFromStorage3.downloadURL,
};

export const user4FromDb = {
    id: 'id4id4id4id4id4id4id4id4id4+',
    name: 'name4',
    email: 'email4@me4.com',
    photoUrl: profilePhotoFromStorage4.downloadURL,
};

export const competition0FromDb = {
    id: 'competition0idcompetition0id',
    title: 'MLB world series 2017',
    description: 'MLB world series 2017 champion',
    visibility: CompetitionVisibilityEnum.PUBLIC,
    options: ['Houston Astros', 'LA Dodgers'],
    createdBy: user0FromDb.id,
    owner: user0FromDb.id,
    start: new Date('2017-11-02T09:00:00z'),
    closing: new Date('2017-11-12T09:00:00z'),
    fulfillment: new Date('2017-11-15T10:00:00z'),
};
export const competition1FromDb = {
    id: 'competition1idcompetition1id',
    title: 'UEFA champions league final',
    description: 'UEFA champions league final 2017',
    visibility: CompetitionVisibilityEnum.PRIVATE,
    options: ['Real Madrid', 'Juventus'],
    createdBy: user0FromDb.id,
    owner: user1FromDb.id,
    start: new Date('2017-05-03T09:00:00z'),
    closing: new Date('2017-05-17T09:00:00z'),
    fulfillment: new Date('2017-05-18T10:00:00z'),
};

const member0FromDb = {
    competitionId: competition0FromDb.id,
};
member0FromDb[user0FromDb.id] = true;
member0FromDb[user1FromDb.id] = true;

const member1FromDb = {
    competitionId: competition1FromDb.id,
};
member1FromDb[user2FromDb.id] = true;
member1FromDb[user3FromDb.id] = true;

/**
 * Start: entries for competition0
 */
export const competitionEntry00Id = 'competitionEntry00Id+++++++++';
export const competitionEntry00 = {
    userId: user0FromDb.id,
    option: competition0FromDb.options[0],
    value: 1,
    entryCreated: new Date('2017-06-01T00:00:00Z'),
    entryLastModified: new Date('2017-06-02T00:00:00Z'),
};

export const competitionEntry01Id = 'competitionEntry01Id+++++++++';
export const competitionEntry01 = {
    userId: user1FromDb.id,
    option: competition1FromDb.options[1],
    value: 2,
    entryCreated: new Date('2018-06-01T00:00:00Z'),
    entryLastModified: new Date('2018-06-02T00:00:00Z'),
};

/** End: entries for competition0 */

/**
 * Start: entries for competition1
 */
export const competitionEntry10Id = 'competitionEntry00Id+++++++++';
export const competitionEntry10 = {
    userId: user3FromDb.id,
    option: competition1FromDb.options[0],
    value: 3,
    entryCreated: new Date('2017-06-01T00:00:00Z'),
    entryLastModified: new Date('2017-06-02T00:00:00Z'),
};

export const competitionEntry11Id = 'competitionEntry01Id+++++++++';
export const competitionEntry11 = {
    userId: user4FromDb.id,
    option: competition1FromDb.options[1],
    value: 2,
    entryCreated: new Date('2018-06-01T00:00:00Z'),
    entryLastModified: new Date('2018-06-02T00:00:00Z'),
};

/** End: entries for competition1 */

/**
 * members cannot be initialized in one statement,
 * so have to be exported as properties of a new object
 */
export const members = {
    member0FromDb,
    member1FromDb,
};

export const idNotFoundFromDb = 'competitionidnotfoundfromdb+';

/**
 * Redux models: Users
 */
export const user0 = {
    id: 'id0id0id0id0id0id0id0id0id0+',
    name: 'name0',
    email: 'email0@me0.com',
    photoUrl: profilePhotoFromStorage0.downloadURL,
};
export const user0Update = {
    id: 'id0id0id0id0id0id0id0id0id0+',
    name: 'name0update',
    email: 'email0@me0.com',
    photoUrl: profilePhotoFromStorage0.downloadURL,
};
export const user1 = {
    id: 'id1id1id1id1id1id1id1id1id1+',
    name: 'name1',
    email: 'email1@me1.com',
    photoUrl: profilePhotoFromStorage1.downloadURL,
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
 * Redux models: Competitions
 */
export const competition0 = {
    id: 'competition0idcompetition0id',
    title: 'MLB world series 2017',
    description: 'MLB world series 2017 champion',
    visibility: CompetitionVisibilityEnum.PUBLIC,
    options: ['Houston Astros', 'LA Dodgers'],
    createdBy: user0.id,
    owner: user0.id,
    start: new Date('2017-11-02T09:00:00z'),
    closing: new Date('2017-11-12T09:00:00z'),
    fulfillment: new Date('2017-11-15T10:00:00z'),
};
export const competition1 = {
    id: 'competition1idcompetition1id',
    title: 'UEFA champions league final',
    description: 'UEFA champions league final 2017',
    visibility: CompetitionVisibilityEnum.PRIVATE,
    options: ['Real Madrid', 'Juventus'],
    createdBy: user0.id,
    owner: user1.id,
    start: new Date('2017-05-03T09:00:00z'),
    closing: new Date('2017-05-17T09:00:00z'),
    fulfillment: new Date('2017-05-18T10:00:00z'),
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
