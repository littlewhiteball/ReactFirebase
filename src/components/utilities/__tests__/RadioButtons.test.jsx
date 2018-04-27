import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RadioButtons from './../RadioButtons';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        options: ['option1', 'option2'],
        onValueChanged: jest.fn(),
    };

    const wrapper = mount(<RadioButtons {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('radio buttons component', () => {
    it('should render self', () => {
        const { wrapper } = setup(1);

        expect(wrapper.find('div').at(1).hasClass('form-check')).toBe(true);
        expect(wrapper.find('div').at(1).key()).toBe('option1');
        expect(wrapper.find('input').at(0).hasClass('form-check-input')).toBe(true);
        expect(wrapper.find('input').at(0).prop('type')).toBe('radio');
        expect(wrapper.find('input').at(0).prop('name')).toBe('options');
        expect(wrapper.find('input').at(0).prop('id')).toBe('option1');
        expect(wrapper.find('label').at(0).hasClass('form-check-label border border-default border-left-0')).toBe(true);
        expect(wrapper.find('label').at(0).prop('htmlFor')).toBe('option1');
        expect(wrapper.find('label').at(0).text()).toBe('option1');
        expect(wrapper.find('div').at(2).hasClass('form-check')).toBe(true);
        expect(wrapper.find('div').at(2).key()).toBe('option2');
        expect(wrapper.find('input').at(1).hasClass('form-check-input')).toBe(true);
        expect(wrapper.find('input').at(1).prop('type')).toBe('radio');
        expect(wrapper.find('input').at(1).prop('name')).toBe('options');
        expect(wrapper.find('input').at(1).prop('id')).toBe('option2');
        expect(wrapper.find('label').at(1).hasClass('form-check-label border border-default border-left-0')).toBe(true);
        expect(wrapper.find('label').at(1).prop('htmlFor')).toBe('option2');
        expect(wrapper.find('label').at(1).text()).toBe('option2');
    });

    it('should handle value change when option1 is clicked', () => {
        const { props, wrapper } = setup();

        wrapper.find('input').at(0).simulate('click', { preventDefault() { } });

        expect(props.onValueChanged.mock.calls.length).toBe(1);
        expect(props.onValueChanged.mock.calls[0][0]).toBe('option1');
    });

    it('should handle value change when option2 is clicked', () => {
        const { props, wrapper } = setup();

        wrapper.find('input').at(1).simulate('click', { preventDefault() { } });

        expect(props.onValueChanged.mock.calls.length).toBe(1);
        expect(props.onValueChanged.mock.calls[0][0]).toBe('option2');
    });
});
