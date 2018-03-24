/**
 * members table uses competition id as id
 */

export default (competitionId, userIdList) => {
    const member = {
        competitionId,
    };

    Object.keys(userIdList).forEach((user) => {
        member[user] = true;
    });

    return member;
};
