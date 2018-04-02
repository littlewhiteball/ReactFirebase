import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as testConstants from './../../../__tests_constants__';

import { JoinCompetitionFormComponent } from './../JoinCompetitionForm';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        userId: testConstants.user0.id,
        saveChange: jest.fn(() =>
            new Promise((resolve) => {
                resolve();
            })),
        navToPath: jest.fn(),
    };

    const wrapper = mount(<JoinCompetitionFormComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('add competition form component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).exists()).toBe(true);
        expect(wrapper.find('h1').text()).toBe('Join Competition');
    });
});
