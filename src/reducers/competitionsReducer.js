import { actionTypes } from './../actions/competitionsAction';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMPETITION: {
            const actionCompetitionId = action.competition.id;

            if (Object.prototype.hasOwnProperty.call(state, actionCompetitionId)) {
                return state;
            }

            return Object.assign({}, state, {
                [actionCompetitionId]: action.competition,
            });
        }

        case actionTypes.DELETE_COMPETITION: {
            const actionCompetitionId = action.competition.id;

            if (Object.prototype.hasOwnProperty.call(state, actionCompetitionId)) {
                return Object.keys(state).filter(key => key !== actionCompetitionId)
                    // eslint-disable-next-line max-len
                    .reduce((accumulator, currentValue) => Object.assign({}, accumulator, { [currentValue]: state[currentValue] }), {});
            }
            return state;
        }

        default:
            return state;
    }
};
