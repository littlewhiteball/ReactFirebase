import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as testConstants from './../../../__tests_constants__';

import { CompetitionListItemComponent } from './../CompetitionListItem';
import CompetitionListItemSummary from './../CompetitionListItemSummary';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        competition: testConstants.competition0,
        delete: jest.fn(),
    };
    const wrapper = mount(<CompetitionListItemComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('competition component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('div').at(1).hasClass('row')).toBe(true);
        expect(wrapper.find('div').at(2).hasClass('col-9')).toBe(true);
        expect(wrapper.find('a').prop('href')).toBe('#competitionSummarycompetition0idcompetition0id');
        expect(wrapper.find('a').prop('data-toggle')).toBe('collapse');
        expect(wrapper.find('a').text()).toBe('MLB world series 2017');
        expect(wrapper.find('div').at(3).hasClass('col-3')).toBe(true);
        expect(wrapper.find('button').hasClass('btn btn-primary')).toBe(true);
        expect(wrapper.find('button').prop('type')).toBe('button');
        expect(wrapper.find('button').text()).toBe('Join');
        expect(wrapper.find('div').at(4).hasClass('collapse')).toBe(true);
        expect(wrapper.find('div').at(4).prop('id')).toBe('competitionSummarycompetition0idcompetition0id');
        expect(wrapper.find(CompetitionListItemSummary).exists()).toBe(true);
        expect(wrapper.find(CompetitionListItemSummary).props('competition').competition).toBe(testConstants.competition0);
    });

    it('should call delete once submitted', () => {
        const { props, wrapper } = setup();
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(props.delete.mock.calls.length).toBe(1);
        expect(props.delete.mock.calls[0][0]).toBe(testConstants.competition0);
    });
});
