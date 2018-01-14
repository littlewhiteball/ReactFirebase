import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewCompetition from './../NewCompetition';
import AddCompetitionForm from './../../competitions/AddCompetitionForm';

configure({ adapter: new Adapter() });

const wrapper = shallow(<NewCompetition />);

describe('auth component', () => {
    it('should render self', () => {
        expect(wrapper.find(AddCompetitionForm).exists()).toBe(true);
    });
});
