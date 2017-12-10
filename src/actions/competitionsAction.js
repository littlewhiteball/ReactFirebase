import { getCompetitionsRef, getCompetitionRef } from './../database';
import { competiton } from './../models';

const ADD_COMPETITION = 'ADD_COMPETITION';
const DELETE_COMPETITION = 'DELETE_COMPETITION';

const addCompetition = (competition) => {
    let key = competitionRef.push().key;
    let model = competitionModel(key, competition.title);
    competitionDb.getCompetitionRef(key).set(model).then(function () {
        console.info('added competition to database')
    });

    return (
        {
            type: ADD_COMPETITION,
            title: competition.title
        });
}

var deleteCompetition = (competition) => {
    competitionDb.getCompetitionRef(competition.id).remove().then(function () {
        console.info('deleted competition from database');
    })

    return ({
        type: DELETE_COMPETITION,
        id: competition.id
    });
}

export {
    ADD_COMPETITION, DELETE_COMPETITION, addCompetition, deleteCompetition
};
