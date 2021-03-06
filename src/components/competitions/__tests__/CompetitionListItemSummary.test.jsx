import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as testConstants from './../../../__tests_constants__';

import CompetitionListItemSummary from './../CompetitionListItemSummary';

jest.mock('./../../../firebase');

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        competition: testConstants.competition0,
    };
    const wrapper = mount(<CompetitionListItemSummary {...props} />);

    return {
        wrapper,
    };
};

describe('competition summary component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').hasClass('jumbotron py-2 mt-2 col-9')).toBe(true);
        expect(wrapper.find('small').at(0).text()).toBe('start: 2017-11-2 02:00:00');
        expect(wrapper.find('br').exists()).toBe(true);
        expect(wrapper.find('small').at(1).text()).toBe('closing: 2017-11-12 01:00:00');
        expect(wrapper.find('ul').hasClass('list-group mt-2')).toBe(true);
        expect(wrapper.find('li').at(0).hasClass('list-group-item d-flex justify-content-between align-items-center')).toBe(true);
        expect(wrapper.find('li').at(0).key()).toBe('competition0idcompetition0idoption0');
        expect(wrapper.find('span').at(0).text()).toBe('Houston Astros');
        expect(wrapper.find('li').at(1).hasClass('list-group-item d-flex justify-content-between align-items-center')).toBe(true);
        expect(wrapper.find('li').at(1).key()).toBe('competition0idcompetition0idoption1');
        expect(wrapper.find('span').at(1).text()).toBe('LA Dodgers');
    });

    it('initial state', () => {
        const { wrapper } = setup();

        expect(wrapper.state()).toEqual({
            competitionEntriesLoaded: false,
        });
    });

    it('should set competitionEntriesLoaded state and render badge pills for entry count and sum after component is mounted', () => {
        const { wrapper } = setup();

        setImmediate(() => {
            // TODO: the following line was not needed in other tests (e.g. EditProfile)
            wrapper.update();

            expect(wrapper.state('competitionEntriesLoaded')).toBe(true);
            expect(wrapper.find('span').at(0).text()).toBe('Houston Astros');
            expect(wrapper.find('span').at(1).hasClass('badge badge-primary badge-pill')).toBe(true);
            expect(wrapper.find('span').at(1).text()).toBe('1');
            expect(wrapper.find('span').at(2).hasClass('badge badge-primary badge-pill ml-2')).toBe(true);
            expect(wrapper.find('span').at(2).text()).toBe('$1');
            expect(wrapper.find('span').at(3).text()).toBe('LA Dodgers');
            expect(wrapper.find('span').at(4).hasClass('badge badge-primary badge-pill')).toBe(true);
            expect(wrapper.find('span').at(4).text()).toBe('0');
            expect(wrapper.find('span').at(5).hasClass('badge badge-primary badge-pill ml-2')).toBe(true);
            expect(wrapper.find('span').at(5).text()).toBe('$0');
        });
    });
});
