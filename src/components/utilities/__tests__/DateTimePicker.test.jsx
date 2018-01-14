import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DateTime from 'react-datetime';

import DateTimePicker from './../DateTimePicker';

configure({ adapter: new Adapter() });

jest.mock('moment');

const wrapper = shallow(<DateTimePicker />);

describe('footer component', () => {
    it('should render self', () => {
        expect(wrapper.find(DateTime).exists()).toBe(true);
        expect(wrapper.find(DateTime).prop('value')).toBe('01/12/2018 11:30 PM');
    });

    it('initial state', () => {
        expect(wrapper.state('dateTimeValue')).toEqual('01/12/2018 11:30 PM');
    });
});
