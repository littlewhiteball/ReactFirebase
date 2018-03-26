/**
 * competition participants table uses competition id as id
 */

export default (competitionId, userIdList) => {
    const competitionParticipant = {
        competitionId,
    };

    Object.keys(userIdList).forEach((user) => {
        competitionParticipant[user] = true;
    });

    return competitionParticipant;
};
