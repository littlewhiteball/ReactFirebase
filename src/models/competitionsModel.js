/**
 * Returns the competition model in json format
 * @param {string} id - competition id
 * @param {string} title - competition title
 * @param {Date} start - start datetime of competition
 * @param {Date} closing - datetime of competition when entries are closed
 * @param {Object[]} options - options of competition result
 * @returns {Object} competition model
 */
export default (id, title, start, closing, options) => ({
    id,
    title,
    start,
    closing,
    options,
});
