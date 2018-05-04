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
export const userId0 = 'id0id0id0id0id0id0id0id0id0+';
export const user0FromDb = {
    id: userId0,
    name: 'name0',
    email: 'email0@me0.com',
    photoUrl: profilePhotoFromStorage0.downloadURL,
};

export const userId1 = 'id1id1id1id1id1id1id1id1id1+';
export const user1FromDb = {
    id: userId1,
    name: 'name1',
    email: 'email1@me1.com',
    photoUrl: profilePhotoFromStorage1.downloadURL,
};

export const userId2 = 'id2id2id2id2id2id2id2id2id2+';
export const user2FromDb = {
    id: userId2,
    name: 'name2',
    email: 'email2@me2.com',
    photoUrl: profilePhotoFromStorage2.downloadURL,
};

export const userId3 = 'id3id3id3id3id3id3id3id3id3+';
export const user3FromDb = {
    id: userId3,
    name: 'name3',
    email: 'email3@me3.com',
    photoUrl: profilePhotoFromStorage3.downloadURL,
};

export const userId4 = 'id4id4id4id4id4id4id4id4id4+';
export const user4FromDb = {
    id: userId4,
    name: 'name4',
    email: 'email4@me4.com',
    photoUrl: profilePhotoFromStorage4.downloadURL,
};

export const competitionId0 = 'competition0idcompetition0id';
export const competition0FromDb = {
    id: competitionId0,
    title: 'MLB world series 2017',
    description: 'MLB world series 2017 champion',
    visibility: 'Public',
    options: ['Houston Astros', 'LA Dodgers'],
    createdBy: user0FromDb.id,
    owner: user0FromDb.id,
    start: new Date('2017-11-02T09:00:00z'),
    closing: new Date('2017-11-12T09:00:00z'),
    fulfillment: new Date('2017-11-15T10:00:00z'),
};

export const competitionId1 = 'competition1idcompetition1id';
export const competition1FromDb = {
    id: competitionId1,
    title: 'UEFA champions league final',
    description: 'UEFA champions league final 2017',
    visibility: 'Private',
    options: ['Real Madrid', 'Juventus'],
    createdBy: user0FromDb.id,
    owner: user1FromDb.id,
    start: new Date('2017-05-03T09:00:00z'),
    closing: new Date('2017-05-17T09:00:00z'),
    fulfillment: new Date('2017-05-18T10:00:00z'),
};

/**
 * competition participants cannot be initialized in one statement,
 * so have to be exported as properties of a new object
 */
const competitionParticipant0FromDb = {};
competitionParticipant0FromDb[user0FromDb.id] = true;
competitionParticipant0FromDb[user1FromDb.id] = true;

const competitionParticipant1FromDb = {};
competitionParticipant1FromDb[user2FromDb.id] = true;
competitionParticipant1FromDb[user3FromDb.id] = true;

export const competitionParticipants0 = {
    competitionParticipant0FromDb,
    competitionParticipant1FromDb,
};

/**
 * Start: entries for competition0
 */
export const competitionEntry00 = {
    userId: userId0,
    option: competition0FromDb.options[0],
    value: 1,
    entryCreated: new Date('2017-06-01T00:00:00Z'),
    entryLastModified: new Date('2017-06-02T00:00:00Z'),
};

export const competitionEntry01 = {
    userId: userId1,
    option: competition1FromDb.options[1],
    value: 2,
    entryCreated: new Date('2018-06-01T00:00:00Z'),
    entryLastModified: new Date('2018-06-02T00:00:00Z'),
};

/** End: entries for competition0 */

/**
 * Start: entries for competition1
 */
export const competitionEntry10 = {
    userId: userId2,
    option: competition1FromDb.options[0],
    value: 3,
    entryCreated: new Date('2017-06-01T00:00:00Z'),
    entryLastModified: new Date('2017-06-02T00:00:00Z'),
};

export const competitionEntry11 = {
    userId: userId3,
    option: competition1FromDb.options[1],
    value: 2,
    entryCreated: new Date('2018-06-01T00:00:00Z'),
    entryLastModified: new Date('2018-06-02T00:00:00Z'),
};

/** End: entries for competition1 */

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
    id: competitionId0,
    title: 'MLB world series 2017',
    description: 'MLB world series 2017 champion',
    visibility: 'Public',
    options: ['Houston Astros', 'LA Dodgers'],
    createdBy: user0.id,
    owner: user0.id,
    start: new Date('2017-11-02T09:00:00z'),
    closing: new Date('2017-11-12T09:00:00z'),
    fulfillment: new Date('2017-11-15T10:00:00z'),
};
export const competition1 = {
    id: competitionId1,
    title: 'UEFA champions league final',
    description: 'UEFA champions league final 2017',
    visibility: 'Private',
    options: ['Real Madrid', 'Juventus'],
    createdBy: user0.id,
    owner: user1.id,
    start: new Date('2017-05-03T09:00:00z'),
    closing: new Date('2017-05-17T09:00:00z'),
    fulfillment: new Date('2017-05-18T10:00:00z'),
};
export const competitions = {
    [competitionId0]: competition0,
    [competitionId1]: competition1,
};
export const competitionWithoutId = {
    title: 'competition without id',
};
export const competition0Update = {
    id: competitionId0,
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
