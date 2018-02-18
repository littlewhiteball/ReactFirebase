import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user0 } from './../../../__tests_constants__';

import { NewCompetitionComponent } from './../NewCompetition';
import AddCompetitionForm from './../../competitions/AddCompetitionForm';

configure({ adapter: new Adapter() });

const setup = (signedIn) => {
    const props = {
        user: signedIn ? user0 : {
            id: '',
        },
    };
    const wrapper = shallow(<NewCompetitionComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('new competition component', () => {
    it('should render self', () => {
        const { wrapper } = setup(true);

        expect(wrapper.find(AddCompetitionForm).exists()).toBe(true);
    });
});
