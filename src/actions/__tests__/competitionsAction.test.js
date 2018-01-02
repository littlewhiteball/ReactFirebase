import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { competition0, competition1 } from './../../__tests_constants__';

import * as actions from './../competitionsAction';

jest.mock('./../../database/competitionsDbAdapter');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('gettingCompetitionsAction', () => {
    it('should create action to indicate getting competitions', () => {
        const expectedAction = {
            type: 'GETTING_COMPETITIONS',
        };

        expect(actions.gettingCompetitionsAction()).toEqual(expectedAction);
    });
});

describe('receivedCompetitionsAction', () => {
    it('should create action to indicated received competitions', () => {
        const expectedAction = {
            type: 'RECEIVED_COMPETITIONS',
        };

        expect(actions.receivedCompetitionsAction()).toEqual(expectedAction);
    });
});

describe('addCompetitionAction', () => {
    it('should create action to add competition', () => {
        const expectedAction = {
            type: 'ADD_COMPETITION',
            competition: competition0,
        };

        expect(actions.addCompetitionAction(competition0)).toEqual(expectedAction);
    });
});

describe('updateCompetitionAction', () => {
    it('should create action to update competition', () => {
        const expectedAction = {
            type: 'UPDATE_COMPETITION',
            competition: competition0,
        };

        expect(actions.updateCompetitionAction(competition0)).toEqual(expectedAction);
    });
});

describe('deleteCompetitionAction', () => {
    it('should create action to delete competition', () => {
        const expectedAction = {
            type: 'DELETE_COMPETITION',
            competition: competition0,
        };

        expect(actions.deleteCompetitionAction(competition0)).toEqual(expectedAction);
    });
});

describe('getCompetitions', () => {
    const testName = `
        should:
        1. create action to indicate getting competitions
        2. get competitions from database
        3. create action to add competition for each competition
        4. create action to indicate received competitions`;

    it(testName, () => {
        const expectedActions = [
            { type: 'GETTING_COMPETITIONS' },
            {
                type: 'ADD_COMPETITION',
                competition: competition0,
            },
            {
                type: 'ADD_COMPETITION',
                competition: competition1,
            },
            { type: 'RECEIVED_COMPETITIONS' },
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
                    id: '-0123456789abcdefghi',
                    title: competition0.title,
                    start: competition0.start,
                    closing: competition0.closing,
                    options: competition0.options,
                },
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.addCompetition(competition0)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});

describe('updateCompetition', () => {
    it.skip('should 1. update competition in database, 2. create action to update competition', () => {
        const expectedAction = [
            {
                type: 'UPDATE_COMPETITION',
                competition: competition0,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.updateCompetition(competition0)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});

describe('deleteCompetition', () => {
    it('should 1. delete competition from database, 2. create action to delete competition', () => {
        const expectedAction = [
            {
                type: 'DELETE_COMPETITION',
                competition: competition0,
            },
        ];

        const store = mockStore({});
        return store.dispatch(actions.deleteCompetition(competition0)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
