import { ADD_COMPETITION, DELETE_COMPETITION } from './../actions';
import { getCompetitionsRef, getCompetitionRef } from './../database';
import { competiton } from './../models';

const competitions = (state = [], competition) => {
    switch (action.type) {
        case ADD_COMPETITION:
            let key = competitionRef.push().key;
            let model = competitionModel(key, competition.title);
            competitionDb.getCompetitionRef(key).set(model).then(function () {
                console.info('added competition to database')
            });

            return [{ id: key, title: competition.title }, ...state];

        case DELETE_COMPETITION:
            const index = state.findIndex(c => c.id === competition.id);
            if (index !== -1) {
                state.splice(index, 1);
            }

            competitionDb.getCompetitionRef(competition.id).remove().then(function () {
                console.info('deleted competition from database');
            })

            return state;
    }

    return state;
}

export {
    competitions
};
