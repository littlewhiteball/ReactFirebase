import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as testConstants from './../../__tests_constants__';

import * as actions from './../competitionsAction';

jest.mock('./../../firebase');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addCompetitionAction', () => {
    it('should create action to add competition', () => {
        const expectedAction = {
            type: 'ADD_COMPETITION',
            competition: testConstants.competition0,
        };

        expect(actions.addCompetitionAction(testConstants.competition0)).toEqual(expectedAction);
    });
});

describe('updateCompetitionAction', () => {
    it('should create action to update competition', () => {
        const expectedAction = {
            type: 'UPDATE_COMPETITION',
            competition: testConstants.competition0,
        };

        expect(actions.updateCompetitionAction(testConstants.competition0)).toEqual(expectedAction);
    });
});

describe('deleteCompetitionAction', () => {
    it('should create action to delete competition', () => {
        const expectedAction = {
            type: 'DELETE_COMPETITION',
            competition: testConstants.competition0,
        };

        expect(actions.deleteCompetitionAction(testConstants.competition0)).toEqual(expectedAction);
    });
});

describe('getCompetitions', () => {
    it('should 1.get competitions from database 2.create action to add competition for each competition', () => {
        const expectedActions = [
            {
                type: 'ADD_COMPETITION',
                competition: testConstants.competition0,
            },
            {
                type: 'ADD_COMPETITION',
                competition: testConstants.competition1,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.getCompetitions()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('addCompetition', () => {
    it('should 1. create competition to database, 2. create action to add competition', () => {
        const expectedAction = [
            {
                type: 'ADD_COMPETITION',
                competition: {
                    id: testConstants.competition0.id,
                    title: testConstants.competition0.title,
                    start: testConstants.competition0.start,
                    closing: testConstants.competition0.closing,
                    options: testConstants.competition0.options,
                },
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.addCompetition(testConstants.competition0)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});

describe('updateCompetition', () => {
    it('should 1. update competition in database, 2. create competition update action', () => {
        const expectedAction = [
            {
                type: 'UPDATE_COMPETITION',
                competition: testConstants.competition0Update,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.updateCompetition(testConstants.competition0Update))
            .then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
    });
});

describe('deleteCompetition', () => {
    it('should 1. delete competition from database, 2. create action to delete competition', () => {
        const expectedAction = [
            {
                type: 'DELETE_COMPETITION',
                competition: testConstants.competition0,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.deleteCompetition(testConstants.competition0)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
