import competitionsDbAdapter from './../database/competitionsDbAdapter';
import competitionModel from './../models/competitionsModel';

const GETTING_COMPETITIONS = 'GETTING_COMPETITIONS';
const RECEIVED_COMPETITIONS = 'RECEIVED_COMPETITIONS';
const ADD_COMPETITION = 'ADD_COMPETITION';
const UPDATE_COMPETITION = 'UPDATE_COMPETITION';
const DELETE_COMPETITION = 'DELETE_COMPETITION';

export const actionTypes = {
    GETTING_COMPETITIONS,
    RECEIVED_COMPETITIONS,
    ADD_COMPETITION,
    UPDATE_COMPETITION,
    DELETE_COMPETITION,
};

export const gettingCompetitionsAction = () => ({
    type: GETTING_COMPETITIONS,
});

export const receivedCompetitionsAction = () => ({
    type: RECEIVED_COMPETITIONS,
});

export const addCompetitionAction = competition => ({
    type: ADD_COMPETITION,
    competition,
});

export const updateCompetitionAction = competition => ({
    type: UPDATE_COMPETITION,
    competition,
});

export const deleteCompetitionAction = competition => ({
    type: DELETE_COMPETITION,
    competition,
});

export const getCompetitions = () =>
    dispatch =>
        competitionsDbAdapter.getCompetitionsOnceFromDb().then((snapshot) => {
            dispatch(gettingCompetitionsAction());

            // TODO: get around Redux panicking about actions in reducers
            // setTimeout(() => {
            const competitions = snapshot.val() || [];

            Object.keys(competitions).forEach((key) => {
                dispatch(addCompetitionAction(competitions[key]));
            });

            dispatch(receivedCompetitionsAction());
            // }, 0);
        });

export const addCompetition = competition =>
    (dispatch) => {
        const key = competitionsDbAdapter.generateKeyForCompetitionFromDb();
        const model = competitionModel(
            key,
            competition.title,
            competition.start,
            competition.closing,
            competition.options,
        );
        return competitionsDbAdapter.addCompetitionToDb(model).then(() => {
            console.info('added competition to database');
            dispatch(addCompetitionAction(model));
        });
    };

export const updateCompetition = competition =>
    (dispatch) => {
        dispatch(updateCompetitionAction(competition));
    };

export const deleteCompetition = competition =>
    (dispatch) => {
        const { id } = competition;
        return competitionsDbAdapter.removeCompetitionFromDb(id).then(() => {
            console.info('deleted competition from database');
            dispatch(deleteCompetitionAction(competition));
        });
    };
