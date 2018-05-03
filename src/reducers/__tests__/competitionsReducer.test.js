import competitionReducer from './../competitionsReducer';
import { actionTypes } from './../../actions/competitionsAction';

import { competition0, competition1 } from './../../__tests_constants__';

describe('add competition', () => {
    it('should return the initial state', () => {
        const expectedState = {};

        expect(competitionReducer(undefined, {})).toEqual(expectedState);
    });

    it('should return input competition as an object with id as key, when initial state is undefined', () => {
        const expectedState = {};
        expectedState[competition0.id] = competition0;

        const action = {
            type: actionTypes.ADD_COMPETITION,
            competition: competition0,
        };

        expect(competitionReducer(undefined, action)).toEqual(expectedState);
    });

    it('should return input competition as an object with id as key, when initial state is empty', () => {
        const expectedState = {};
        expectedState[competition0.id] = competition0;

        const action = {
            type: actionTypes.ADD_COMPETITION,
            competition: competition0,
        };

        expect(competitionReducer([], action)).toEqual(expectedState);
    });

    it('should return an object with added competition as property and competition id as key', () => {
        const expectedState = {};
        expectedState[competition0.id] = competition0;
        expectedState[competition1.id] = competition1;
        const initialState = {};
        initialState[competition0.id] = competition0;
        const action = {
            type: actionTypes.ADD_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });

    it('should return initial state when added competition already exists', () => {
        const expectedState = {};
        expectedState[competition0.id] = competition0;
        expectedState[competition1.id] = competition1;
        const initialState = {};
        initialState[competition0.id] = competition0;
        initialState[competition1.id] = competition1;
        const action = {
            type: actionTypes.ADD_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('delete competition', () => {
    it('should return empty object when initial state is undefined', () => {
        const expectedState = {};

        expect(competitionReducer(undefined, {})).toEqual(expectedState);
    });

    it('should return empty object when initial state is empty', () => {
        const expectedState = {};
        const initialState = {};

        expect(competitionReducer(initialState, {})).toEqual(expectedState);
    });

    it('should return object minus deleted competition', () => {
        const expectedState = {};
        expectedState[competition0.id] = competition0;
        const initialState = {};
        initialState[competition0.id] = competition0;
        initialState[competition1.id] = competition1;
        const action = {
            type: actionTypes.DELETE_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });

    it('should return initial state when deleted competition does not exist', () => {
        const expectedState = {};
        expectedState[competition0.id] = competition0;
        const initialState = {};
        initialState[competition0.id] = competition0;
        const action = {
            type: actionTypes.DELETE_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });
});
