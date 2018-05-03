import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as testConstants from './../../../__tests_constants__';

import CompetitionList from './../CompetitionList';
import CompetitionListItem from './../CompetitionListItem';

configure({ adapter: new Adapter() });

const setup = () => {
    const competitions = {};
    competitions[testConstants.competition0.id] = testConstants.competition0;
    competitions[testConstants.competition1.id] = testConstants.competition1;
    const props = {
        competitions,
    };
    const wrapper = shallow(<CompetitionList {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('competition list component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.find('br').exists()).toBe(true);
        expect(wrapper.find(CompetitionListItem).at(0).key()).toBe(testConstants.competition0.id);
        expect(wrapper.find(CompetitionListItem).at(0).props('competition').competition).toEqual(testConstants.competition0);
        expect(wrapper.find(CompetitionListItem).at(1).key()).toBe(testConstants.competition1.id);
        expect(wrapper.find(CompetitionListItem).at(1).props('competition').competition).toEqual(testConstants.competition1);
    });
});
