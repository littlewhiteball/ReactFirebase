import { ADD_COMPETITION, DELETE_COMPETITION } from './../actions';

const competitions = (state = [], competition) => {
    switch (action.type) {
        case ADD_COMPETITION:
            return [competition, ...state];

        case DELETE_COMPETITION:
            const index = state.findIndex(c => c.id === competition.id);
            if (index !== -1) {
                state.splice(index, 1);
            }

            return state;
    }

    return state;
}

export {
    competitions
};
