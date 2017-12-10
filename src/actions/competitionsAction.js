const ADD_COMPETITION = 'ADD_COMPETITION';
const DELETE_COMPETITION = 'DELETE_COMPETITION';

const addCompetition = (competition) => ({
    type: ADD_COMPETITION,
    title: competition.title
});

var deleteCompetition = (competition) => ({
    type: DELETE_COMPETITION,
    id: competition.id
});

export {
    ADD_COMPETITION, DELETE_COMPETITION, addCompetition, deleteCompetition
};
