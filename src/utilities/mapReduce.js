/**
 * key: the property of obj to group by
 * value:  the property of obj to sum
 * example:
const obj = {
    id1: {
        option: 'opt1',
        value: 3,
    },
    id2: {
        option: 'opt2',
        value: 5,
    },
    id3: {
        option: 'opt1',
        value: 7,
    },
};
console.log(groupByAndSum(obj, 'option', 'value'));

result:
 > Object { opt1: Object { count: 2, sum: 10 }, opt2: Object { count: 1, sum: 5 } }
 */
const groupByAndSum = (obj, key, value) => {
    const defaultResult = {
        count: 0,
        sum: 0,
    };
    return obj ?
        Object.keys(obj).reduce((accumulator, currentValue) =>
            Object.assign({}, accumulator, {
                [obj[currentValue][key]]: {
                    count: (accumulator[obj[currentValue][key]] || defaultResult).count + 1,
                    // eslint-disable-next-line max-len
                    sum: (accumulator[obj[currentValue][key]] || defaultResult).sum + obj[currentValue][value],
                },
            }), {})
        : {};
};

export default {
    groupByAndSum,
};
