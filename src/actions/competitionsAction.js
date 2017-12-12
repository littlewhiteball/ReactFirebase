import { setTimeout } from 'timers';

import { getCompetitionsRef, getCompetitionRef } from './../database/competitions';
import { competitionModel } from './../models/competitionsModel';

export const GETTING_COMPETITIONS = 'GETTING_COMPETITIONS';
export const RECEIVED_COMPETITIONS = 'RECEIVED_COMPETITIONS';
export const ADD_COMPETITION = 'ADD_COMPETITION';
export const UPDATE_COMPETITION = 'UPDATE_COMPETITION';
export const DELETE_COMPETITION = 'DELETE_COMPETITION';

export const gettingCompetitionsAction = () => ({
    type: GETTING_COMPETITIONS
});

export const receivedCompetitionsAction = () => ({
    type: RECEIVED_COMPETITIONS
});

export const addCompetitionAction = (competition) => ({
    type: ADD_COMPETITION,
    competition
});

export const deleteCompetitionAction = (competition) => ({
    type: DELETE_COMPETITION,
    competition
});

export const getCompetitions = () => {
    return (dispatch) => {
        dispatch(gettingCompetitionsAction);

        getCompetitionsRef().limitToLast(20).on('value', (snapshot) => {
            //TODO: get around Redux panicking about actions in reducers
            setTimeout(() => {
                const competitions = snapshot.val() || [];

                for (const c in competitions) {
                    dispatch(addCompetitionAction);
                }

                dispatch(receivedCompetitionsAction);
            }, 0);
        });
    }
}

export const addCompetition = (competition) => {
    return (dispatch) => {
        let key = competitionRef.push().key;
        let model = competitionModel(key, competition.title);
        competitionDb.getCompetitionRef(key).set(model).then(function () {
            console.info('added competition to database')
        });

        dispatch(addCompetitionAction(competition));
    }
}

export const updateCompetition = (competition) => {
    return (dispatch) => {
        // TODO
    }
}

export const deleteCompetition = (competition) => {
    return (dispatch) => {
        competitionDb.getCompetitionRef(competition.id).remove().then(function () {
            console.info('deleted competition from database');
        })

        dispatch(deleteCompetitionAction(competition));
    }
}
