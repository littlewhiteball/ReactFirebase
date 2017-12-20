import { ADD_COMPETITION, DELETE_COMPETITION } from './../actions/competitionsAction';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_COMPETITION:
            if (state.map(competition => competition.id).includes(action.competition.id)) {
                return state;
            }
            return [action.competition, ...state];


        case DELETE_COMPETITION: {
            const index = state.findIndex(c => c.id === action.competition.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return state;
        }

        default:
            return state;
    }
};
