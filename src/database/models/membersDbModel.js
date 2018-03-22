export default (id, userIdList) => {
    const member = {
        id,
    };

    Object.keys(userIdList).forEach((user) => {
        member[user] = true;
    });

    return member;
};
