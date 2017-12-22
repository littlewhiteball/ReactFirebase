import * as actions from './../competitionsAction';

describe('gettingCompetitionsAction', () => {
    it('should create action to get competitions', () => {
        const expectedAction = {
            type: 'GETTING_COMPETITIONS',
        };

        expect(actions.gettingCompetitionsAction()).toEqual(expectedAction);
    });
});
