import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user0 } from './../../../__tests_constants__';

import { JoinCompetitionComponent } from './../JoinCompetition';
import JoinCompetitionForm from './../../competitions/JoinCompetitionForm';

configure({ adapter: new Adapter() });

const setup = (signedIn) => {
    const props = {
        user: signedIn ? user0 : {
            id: '',
        },
    };
    const wrapper = shallow(<JoinCompetitionComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('join competition component', () => {
    it('should render self', () => {
        const { props, wrapper } = setup(true);

        expect(wrapper.find(JoinCompetitionForm).exists()).toBe(true);
        expect(wrapper.find(JoinCompetitionForm).props()).toEqual(props);
    });
});
