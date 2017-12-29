import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { competition0 } from './../../../__tests_constants__';

import CompetitionSummary from './../CompetitionSummary';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        competition: competition0,
    };
    const wrapper = mount(<CompetitionSummary {...props} />);

    return {
        wrapper,
    };
};

describe('competition summary component', () => {
    it('should render self', () => {
        const { wrapper } = setup();
        expect(wrapper.find('div').hasClass('card card-block')).toBe(true);
        expect(wrapper.find('div').text()).toBe('MLB world series 2017\nstart:2017-11-2 02:00:00\nend:2017-11-12 01:00:00');
    });
});
