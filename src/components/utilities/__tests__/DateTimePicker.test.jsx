import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DateTime from 'react-datetime';

import DateTimePicker from './../DateTimePicker';

configure({ adapter: new Adapter() });

const setup = (defaultDateTimeValue) => {
    const props = {
        onChange: jest.fn(),
    };
    if (defaultDateTimeValue) {
        props.defaultDateTimeValue = defaultDateTimeValue;
    }

    const wrapper = shallow(<DateTimePicker {...props} />);
    return {
        props, wrapper,
    };
};

describe('datetime picker component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find(DateTime).exists()).toBe(true);
    });

    it('should render default datetime value', () => {
        const expected = new Date('2018-02-18T11:30:00.000Z');
        const { wrapper } = setup();

        expect(wrapper.find(DateTime).prop('defaultValue')).toEqual(expected);
    });

    it('should render props default datetime value', () => {
        const expected = new Date('2018-01-15T10:15:00.000Z');
        const { wrapper } = setup(new Date('2018-01-15T10:15:00.000Z'));

        expect(wrapper.find(DateTime).prop('defaultValue')).toEqual(expected);
    });

    // TODO: figure out how to test onChange of DateTime
    it.skip('should callback onchange', () => {
        const { props, wrapper } = setup();

        wrapper.find(DateTime).find('.rdtDay').simulate('click');

        expect(props.onChange.mock.calls.length).toBe(1);
    });
});
