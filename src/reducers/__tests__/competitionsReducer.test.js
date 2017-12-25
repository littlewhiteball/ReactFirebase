import competitionReducer from './../competitionsReducer';
import { ADD_COMPETITION, DELETE_COMPETITION } from './../../actions/competitionsAction';

const competition0 = {
    id: 'id0',
    title: 'title0',
};

const competition1 = {
    id: 'id1',
    title: 'title1',
};

describe('add competition', () => {
    it('should return the initial state', () => {
        const expectedState = [];

        expect(competitionReducer(undefined, {})).toEqual(expectedState);
    });

    it('should return input competition as a list, when initial state is undefined', () => {
        const expectedState = [competition0];
        const action = {
            type: ADD_COMPETITION,
            competition: competition0,
        };

        expect(competitionReducer(undefined, action)).toEqual(expectedState);
    });

    it('should return input competition as a list, when initial state is empty', () => {
        const expectedState = [competition0];
        const action = {
            type: ADD_COMPETITION,
            competition: competition0,
        };

        expect(competitionReducer([], action)).toEqual(expectedState);
    });

    it('should return a list with added competition', () => {
        const expectedState = [competition1, competition0];
        const initialState = [competition0];
        const action = {
            type: ADD_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });

    it('should return initial state when added competition already exists', () => {
        const expectedState = [competition0, competition1];
        const initialState = [competition0, competition1];
        const action = {
            type: ADD_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });
});

describe('delete competition', () => {
    it('should return empty list when initial state is undefined', () => {
        const expectedState = [];

        expect(competitionReducer(undefined, {})).toEqual(expectedState);
    });

    it('should return empty list when initial state is empty', () => {
        const expectedState = [];
        const initialState = [];

        expect(competitionReducer(initialState, {})).toEqual(expectedState);
    });

    it('should return list minus deleted competition', () => {
        const expectedState = [competition0];
        const initialState = [competition0, competition1];
        const action = {
            type: DELETE_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });

    it('should return initial state when deleted competition does not exist', () => {
        const expectedState = [competition0];
        const initialState = [competition0];
        const action = {
            type: DELETE_COMPETITION,
            competition: competition1,
        };

        expect(competitionReducer(initialState, action)).toEqual(expectedState);
    });
});
