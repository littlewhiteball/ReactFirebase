import { setTimeout } from 'timers';

// import database from './../database';
import { getCompetitionsOnceFromDb, pushCompetitionToDb, addCompetitionToDb, removeCompetitionFromDb } from './../database/competitionsDbAdapter';
import competitionModel from './../models/competitionsModel';

export const GETTING_COMPETITIONS = 'GETTING_COMPETITIONS';
export const RECEIVED_COMPETITIONS = 'RECEIVED_COMPETITIONS';
export const ADD_COMPETITION = 'ADD_COMPETITION';
export const UPDATE_COMPETITION = 'UPDATE_COMPETITION';
export const DELETE_COMPETITION = 'DELETE_COMPETITION';

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
    (dispatch) => {
        dispatch(gettingCompetitionsAction);

        // TODO: Debating on('value') or once('value')
        getCompetitionsOnceFromDb().then((snapshot) => {
            // TODO: get around Redux panicking about actions in reducers
            setTimeout(() => {
                const competitions = snapshot.val() || [];

                Object.keys(competitions).forEach((key) => {
                    dispatch(addCompetitionAction(competitions[key]));
                });

                dispatch(receivedCompetitionsAction);
            }, 0);
        });
    };

export const addCompetition = competition =>
    (dispatch) => {
        const { key } = pushCompetitionToDb();
        const model = competitionModel(key, competition.title);
        addCompetitionToDb(model).then(() => {
            console.info('added competition to database');
        });

        dispatch(addCompetitionAction(model));
    };

export const updateCompetition = competition =>
    (dispatch) => {
        dispatch(updateCompetitionAction(competition));
    };

export const deleteCompetition = competition =>
    (dispatch) => {
        removeCompetitionFromDb(competition.id).then(() => {
            console.info('deleted competition from database');
        });

        dispatch(deleteCompetitionAction(competition));
    };
