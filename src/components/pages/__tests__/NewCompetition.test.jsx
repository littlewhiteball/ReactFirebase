import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { auth } from './../../../__tests_constants__';

import { NewCompetitionComponent } from './../NewCompetition';
import AddCompetitionForm from './../../competitions/AddCompetitionForm';

configure({ adapter: new Adapter() });

const setup = (signedIn) => {
    const props = {
        auth: Object.assign({}, auth, {
            signedIn,
        }),
    };
    const wrapper = shallow(<NewCompetitionComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('new competition component', () => {
    it('should render add competition form when signed in', () => {
        const { wrapper } = setup(true);

        expect(wrapper.find(AddCompetitionForm).exists()).toBe(true);
    });

    it('should render redirect to auth page when not signed in', () => {
        const { wrapper } = setup(false);

        expect(wrapper.find('Redirect').prop('to')).toBe('/auth');
    });
});
