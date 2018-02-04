const moment = () => ({
    toDate: () => new Date('2018-02-18T11:30:00.000Z'),
    add: (amount, unit) => ({
        toDate: () => {
            if (amount === 1 && unit === 'days') {
                return new Date('2018-02-19T11:30:00.000Z');
            } else if (amount === 2 && unit === 'days') {
                return new Date('2018-02-20T11:30:00.000Z');
            }
            return new Date('2018-02-18T11:30:00.000Z');
        },
    }),
});

export default moment;
